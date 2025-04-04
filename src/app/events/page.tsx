export default function Events() {
  return (
    <div className="container mx-auto rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-4xl font-bold text-green-700">
        Upcoming Events
      </h2>
      <p className="mb-8 text-center text-lg text-gray-700">
        Join us in our mission to create a sustainable future. Explore our
        events and be part of the change.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="transform rounded-lg border p-6 shadow-md transition-transform hover:scale-105">
          <h3 className="mb-3 text-2xl font-semibold text-gray-900">Event 1</h3>
          <p className="mb-4 text-gray-700">
            Discover the details of our first event and how you can contribute.
          </p>
          <button className="rounded bg-green-600 px-5 py-2 text-white hover:bg-green-700">
            Learn More
          </button>
        </div>
        <div className="transform rounded-lg border p-6 shadow-md transition-transform hover:scale-105">
          <h3 className="mb-3 text-2xl font-semibold text-gray-900">Event 2</h3>
          <p className="mb-4 text-gray-700">
            Get involved in our second event and make a difference.
          </p>
          <button className="rounded bg-green-600 px-5 py-2 text-white hover:bg-green-700">
            Learn More
          </button>
        </div>
        <div className="transform rounded-lg border p-6 shadow-md transition-transform hover:scale-105">
          <h3 className="mb-3 text-2xl font-semibold text-gray-900">Event 3</h3>
          <p className="mb-4 text-gray-700">
            Learn more about our third event and its impact on the environment.
          </p>
          <button className="rounded bg-green-600 px-5 py-2 text-white hover:bg-green-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
