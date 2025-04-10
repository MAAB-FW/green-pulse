import { Request, Response } from "express";
import Stripe from "stripe";
import { NEXT_PUBLIC_STRIPE_SECRET_KEY } from "../../../env";
const stripe = new Stripe(NEXT_PUBLIC_STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-03-31.basil",
});

interface checkoutController {
  getPaymentIntent: (req: Request, res: Response) => Promise<void>;
}

export const checkoutController: checkoutController = {
  getPaymentIntent: async (req: Request, res: Response) => {
    try {
      const { price } = req.body;
      console.log("🚀 ~ getPaymentIntent: ~ price:", price)
      const amount = parseInt(price);

      const { client_secret } = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
      });

      res.status(201).json({ client_secret });
    } catch (error) {
      res.status(400).json({
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  },
};
