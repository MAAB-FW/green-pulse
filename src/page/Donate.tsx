import Button from "@/components/ui/Button";

export default function Donate(): React.ReactNode {
  return (
    <div className="container mx-auto rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-6 text-center text-4xl font-extrabold text-gray-800">
        Donate
      </h2>
      <p className="mb-6 text-center text-lg text-gray-600">
        Support our mission by making a secure donation. Every contribution
        helps us drive impactful change.
      </p>
      <div className="flex justify-center">
        <Button />
      </div>
    </div>
  );
}
