"use client";
import Button from "@/components/ui/Button";
import { RootState } from "@/redux/store";
import ReduxProvider from "@/services/ReduxProvider";
import { useSelector } from "react-redux";

export default function DonateNow() {
  return (
    <ReduxProvider>
      <DonateContent />
    </ReduxProvider>
  );
}

function DonateContent() {
  const { name, email } = useSelector((state: RootState) => state.userSlice);

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Make a Donation</h1>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-6">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            Donor Information
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="text-lg font-medium">{name || "Anonymous"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-lg font-medium">{email}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-600">
            Your contribution helps us create lasting environmental impact.
            Choose your donation amount and proceed securely with Stripe.
          </p>
        </div>

        <div className="flex justify-center">
          <Button />
        </div>
      </div>
    </div>
  );
}
