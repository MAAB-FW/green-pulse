"use client";
import { useCreatePaymentIntentMutation } from "@/redux/features/api/baseApi";
import { RootState } from "@/redux/store";
import ReduxProvider from "@/services/ReduxProvider";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { useSelector } from "react-redux";
import { NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY } from "../../../../env";

const stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
const Payment = () => {
  const amount = 40;
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ReduxProvider>
      <h2 className="mb-6 text-center text-4xl font-extrabold text-gray-800">
        Payment
      </h2>
      <p className="mb-6 text-center text-lg text-gray-600">
        Please proceed with your payment to complete the donation process.
      </p>
      <div className="flex justify-center">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            amount={amount}
          ></CheckoutForm>
        </Elements>
      </div>
    </ReduxProvider>
  );
};

export default Payment;

const CheckoutForm = ({
  setIsLoading,
  isLoading,
  amount,
}: {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  amount: number;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { name, email } = useSelector((state: RootState) => state.userSlice);

  // get clientSecret from server
  const [paymentIntent, { data, error }] = useCreatePaymentIntentMutation();

  const clientSecret = data?.client_secret || "";
  useEffect(() => {
    paymentIntent({ price: Math.round(amount * 100) });
  }, [amount, paymentIntent]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }
    setIsLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setIsLoading(false);
      console.log("error", error);
      return;
    } else {
      console.log("paymentMethod", paymentMethod);
    }

    const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name || "Anonymous",
            email: email || "Anonymous",
          },
        },
      }
    );

    if (cardError) {
      setIsLoading(false);
      console.log("cardError", cardError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full min-w-xs space-y-3">
        <CardElement
          className="rounded-md bg-white p-4"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="w-full">
          {error && (
            <div className="text-red-500">
              {typeof error === "string"
                ? error
                : "data" in error
                  ? JSON.stringify(error.data)
                  : "An error occurred"}
            </div>
          )}
          <button
            type="submit"
            disabled={!stripe || !clientSecret || isLoading || !email}
            className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            {isLoading ? (
              <CgSpinner className="w-8 animate-spin text-xl" />
            ) : (
              `Proceed to Payment $${amount}`
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
