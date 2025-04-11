export default function Contact(): React.ReactNode {
  return (
    <div className="container mx-auto max-w-4xl rounded-xl bg-white bg-gradient-to-r p-6 shadow-lg sm:p-8">
      <h2 className="mb-6 text-center text-3xl font-extrabold text-indigo-800 sm:mb-8 sm:text-5xl">
        Get in Touch
      </h2>
      <p className="mb-6 text-center text-base text-gray-700 sm:mb-8 sm:text-lg">
        Have questions or want to get involved? Reach out to us, and we&apos;ll
        be happy to assist you.
      </p>
      <form className="space-y-4 sm:space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-800"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:mt-2 sm:px-4 sm:py-2"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:mt-2 sm:px-4 sm:py-2"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-800"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:mt-2 sm:px-4 sm:py-2"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none sm:px-8 sm:py-3 sm:text-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
