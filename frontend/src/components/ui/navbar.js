import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [top, setTop] = useState(true);

  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 bg-opacity-70 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm rounded-xl w-full" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* <Logo /> */}
            <Link
              to="/"
              className="text-2xl md:text-2xl font-extrabold leading-tighter tracking-tighter"
            >
              Collabora
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">
                Cart
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link
              to="/dashboard"
              className="text-lg text-gray-600 hover:text-gray-900 px-5 py-3 transition duration-150 ease-in-out rounded-full"
            >
              Dashboard
            </Link>

            <Link
              to="/ItemSubmission"
              className="text-lg text-gray-600 hover:text-gray-900 px-5 py-3 transition duration-150 ease-in-out rounded-full"
            >
              Order
            </Link>
          </nav>
          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
