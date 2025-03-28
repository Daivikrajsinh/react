import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <svg
                className="h-8 w-8 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">DV </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/signin"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;