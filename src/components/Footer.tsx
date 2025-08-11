// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Tagline */}
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold flex items-center">
              <span className="text-lime-400 mr-1">Dr</span>
              <span>Jay</span>
            </a>
            <p className="text-gray-400 mt-2">
              Building Solutions That Transform Ideas Into Reality
            </p>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dr-jeremiah-richard/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 hover:bg-lime-400/20 text-gray-300 hover:text-lime-400 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* Contact Number */}
              <a
                href="tel:+18622307479"
                className="w-10 h-10 bg-gray-900 hover:bg-lime-400/20 text-gray-300 hover:text-lime-400 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.1 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.83.37 1.63.72 2.37a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.88 6.88l1.27-1.27a2 2 0 0 1 2.11-.45c.74.35 1.54.6 2.37.72A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>

              {/* Schedule Link */}
              <a
                href="https://calendly.com/doctor-jay/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 hover:bg-lime-400/20 text-gray-300 hover:text-lime-400 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              © {currentYear} Dr Jay. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
