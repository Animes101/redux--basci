import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h2 className="text-xl font-bold mb-3">MyApp</h2>
            <p className="text-gray-400">
              A simple React app built with modern tools like Tailwind CSS and React Router.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/login" className="hover:text-white">Login</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <p className="text-gray-400">Email: support@myapp.com</p>
            <p className="text-gray-400">Phone: +880 1234 567890</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;