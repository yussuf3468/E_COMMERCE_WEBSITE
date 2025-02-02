import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      {/* Navbar Container */}
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          HodanHub
        </Link>

        {/* Search Bar (Large Screens) */}
        <div className="hidden md:flex flex-1 mx-4">
          <input
            type="text"
            className="w-full lg:w-2/3 px-4 py-2 rounded-l-md focus:outline-none text-gray-900"
            placeholder="Search for products..."
          />
          <button className="bg-yellow-500 px-4 py-2 rounded-r-md hover:bg-yellow-600">
            Search
          </button>
        </div>

       {/* Right Section (Icons) */}
       <div className="flex items-center gap-6">
          {/* Profile */}
    <Link to="/profile" className="flex items-center gap-1 hover:text-yellow-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 0c-3.5 0-7 1.5-7 4.5V19h14v-2.5c0-3-3.5-4.5-7-4.5z"
        />
      </svg>
      <span className="hidden lg:block text-sm">Hi, John</span>
    </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="relative hover:text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.879 4.396A2 2 0 007.757 9h8.486a2 2 0 001.878-1.604L19 3H5m3 9a4 4 0 100 8 4 4 0 000-8zm8 0a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
            {/* Cart Badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              2
            </span>
          </Link>
          <Link to="/notifications" className="relative hover:text-yellow-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 10V9a6 6 0 00-12 0v1a4.002 4.002 0 01-2 3.465V16h16v-2.535a4.002 4.002 0 01-2-3.465z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19c1.657 0 3-1.343 3-3H9c0 1.657 1.343 3 3 3z"
        />
      </svg>
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
        5
      </span>
    </Link>
    

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Search Bar (Mobile Screens) */}
      <div className="md:hidden bg-gray-800 px-4 py-2">
        <div className="flex items-center">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-900"
            placeholder="Search for products..."
          />
          <button className="bg-yellow-500 px-4 py-2 rounded-r-md hover:bg-yellow-600">
            Search
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col px-4 py-2 space-y-2 text-gray-300">
            <li>
              <Link to="/collection" className="block hover:text-yellow-500">
                Collection
              </Link>
            </li>
            <li>
              <Link to="/about" className="block hover:text-yellow-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-yellow-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
