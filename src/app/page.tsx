export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="xs:h-[300px] -mt-4 flex h-[500px] items-center justify-center bg-cover bg-fixed bg-center text-center text-white sm:h-[400px] md:-mt-8 lg:-mt-12"
        style={{ backgroundImage: "url('./hero-image.jpg')" }}
      >
        <div className="bg-opacity-50 xs:p-4 rounded-lg bg-black p-8 sm:p-6">
          <h2 className="xs:text-2xl mb-4 text-4xl font-bold sm:text-3xl">
            Join Us in Making a Difference
          </h2>
          <p className="xs:text-sm mb-6 text-lg sm:text-base">
            Promoting sustainability, conservation, and climate action for a
            better future.
          </p>
          <a
            href="#donate"
            className="xs:px-2 xs:py-1 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700 sm:px-3 sm:py-1"
          >
            Donate Now
          </a>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="xs:py-6 bg-gray-100 py-12 sm:py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="xs:text-xl mb-6 text-3xl font-bold sm:text-2xl">
            Upcoming Events
          </h3>
          <div className="xs:grid-cols-1 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="xs:p-3 rounded-lg bg-white p-6 shadow-md sm:p-4">
              <h4 className="xs:text-base mb-2 text-xl font-bold sm:text-lg">
                Tree Plantation Drive
              </h4>
              <p className="xs:text-xs text-gray-600 sm:text-sm">
                Join us in planting trees to restore our environment.
              </p>
            </div>
            <div className="xs:p-3 rounded-lg bg-white p-6 shadow-md sm:p-4">
              <h4 className="xs:text-base mb-2 text-xl font-bold sm:text-lg">
                Beach Cleanup
              </h4>
              <p className="xs:text-xs text-gray-600 sm:text-sm">
                Help us clean our beaches and protect marine life.
              </p>
            </div>
            <div className="xs:p-3 rounded-lg bg-white p-6 shadow-md sm:p-4">
              <h4 className="xs:text-base mb-2 text-xl font-bold sm:text-lg">
                Climate Action Workshop
              </h4>
              <p className="xs:text-xs text-gray-600 sm:text-sm">
                Learn how to take meaningful action against climate change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section
        id="donate"
        className="xs:py-6 bg-green-600 py-12 text-white sm:py-8"
      >
        <div className="container mx-auto px-4 text-center">
          <h3 className="xs:text-xl mb-6 text-3xl font-bold sm:text-2xl">
            Support Our Mission
          </h3>
          <p className="xs:text-xs mb-6 sm:text-sm">
            Your donations help us organize events, support volunteers, and
            drive impactful initiatives.
          </p>
          <a
            href="/donate"
            className="xs:px-2 xs:py-1 rounded bg-white px-4 py-2 text-green-600 hover:bg-gray-200 sm:px-3 sm:py-1"
          >
            Donate Now
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="xs:py-6 bg-white py-12 sm:py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="xs:text-xl mb-6 text-3xl font-bold sm:text-2xl">
            Contact Us
          </h3>
          <p className="xs:text-xs mb-4 text-gray-700 sm:text-sm">
            Have questions or want to get involved? Reach out to us!
          </p>
          <a
            href="/contact"
            className="xs:px-2 xs:py-1 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700 sm:px-3 sm:py-1"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
