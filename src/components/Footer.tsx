const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Green Pulse. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-green-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-500">
              Terms of Service
            </a>
            <a href="#" className="hover:text-green-500">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
