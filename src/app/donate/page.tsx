export default function Donate() {
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
        <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
          Donate Now
        </button>
      </div>
    </div>
  );
}
