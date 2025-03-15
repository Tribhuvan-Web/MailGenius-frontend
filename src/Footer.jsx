import { Link } from "react-router-dom";

export default function Footer() {
  const handleEmailClick = () => {
    window.location.href = "mailto:tribhuvannath4567@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+918228904121";
  };

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MailGenius
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your smart email AI assistant powered by Gemini. Craft perfect
              responses in seconds with cutting-edge AI technology.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-blue-400 transition-all flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-blue-400 transition-all flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-all flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <button
                  onClick={handleEmailClick}
                  className="flex items-center hover:text-blue-400 transition-colors w-full group"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-blue-400 group-hover:animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  tribhuvannath4567@gmail.com
                </button>
              </li>
              <li>
                <button
                  onClick={handlePhoneClick}
                  className="flex items-center hover:text-blue-400 transition-colors w-full group"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-blue-400 group-hover:animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +91 8228904121
                </button>
              </li>
              <a
                href="https://maps.app.goo.gl/P8kmf1vGgdKes3zL9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-400 transition-colors group"
              >
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Kurthaul, Patna
                </li>
              </a>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">
              Follow me
            </h4>
            <div className="flex space-x-6">
              {[
                {
                  href: "https://leetcode.com/u/Tribhuvan_nath/",
                  icon: "M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 00-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.464 2.337-1.464 3.835 0 1.498.483 2.895 1.464 3.875l5.339 5.281c.982.979 2.337 1.462 3.834 1.462 1.498 0 2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM19.149 2.856l-2.609 2.636c-.514.515-1.365.497-1.9-.038-.535-.536-.553-1.387-.039-1.901l2.609-2.636c.981-.982 2.337-1.465 3.835-1.465s2.854.483 3.835 1.465l5.281 5.339c.983.982 1.464 2.337 1.464 3.835s-.482 2.853-1.464 3.834l-5.281 5.281c-.983.979-2.337 1.461-3.835 1.461s-2.853-.482-3.835-1.464l-5.281-5.281c-.482-.482-.723-1.127-.723-1.853s.241-1.357.723-1.835l4.319-4.38c.482-.481 1.127-.722 1.834-.722s1.354.241 1.835.723l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.535.553-1.386.039-1.9l-2.606-2.637a5.054 5.054 0 00-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-4.319 4.38c-.981.982-1.464 2.337-1.464 3.835s.483 2.853 1.464 3.834l10.101 10.101c.982.981 2.337 1.464 3.835 1.464s2.853-.483 3.835-1.464l5.339-5.281c1.963-1.963 1.963-5.708 0-7.671l-5.339-5.281c-1.962-1.963-5.708-1.963-7.671 0z",
                },
                {
                  href: "https://www.linkedin.com/in/tribhuvan-nath-sagar/",
                  icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                },
                {
                  href: "https://www.instagram.com/reyansh_singh_rajput__?igsh=dGd2amdpamVla2Rq",
                  icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={link.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MailGenius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
