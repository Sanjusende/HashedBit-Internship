import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Term:', searchTerm);
    setSearchTerm('');
  };

  return (
    <>
      <nav className="bg-gray-800 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={() => scrollToSection('home')}
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="SS_Movies Logo"
            />
            <span className="self-center text-2xl font-semibold text-white">
              SS_Movies
            </span>
          </Link>

          {/* Desktop Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex items-center mx-4 md:w-1/3"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="block w-full p-2 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search movies..."
            />
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ml-2"
            >
              Search
            </button>
          </form>

          {/* Search Button for Mobile */}
          <div className="flex md:order-2">
            <button
              type="button"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
              onClick={toggleMenu}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              <span className="sr-only">Open main menu</span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? 'block' : 'hidden'
            }`}
            id="navbar-search"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-800">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white rounded md:bg-transparent hover:text-blue-400"
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400"
                  onClick={() => scrollToSection('movies')}
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400"
                  onClick={() => scrollToSection('about')}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile Search Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="md:hidden flex items-center mt-4 w-full"
            >
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className="block w-full p-2 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search movies..."
              />
              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ml-2"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
