import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
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
          <div className="shrink-0 mr-4">{/* <Logo /> */}</div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex text-left grow justify-between flex-wrap items-center">
              <li class="">
                <Link
                  to="/dashboard"
                  className="text-2xl md:text-2xl font-extrabold leading-tighter tracking-tighter mb-8"
                >
                  Collabora
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">
                    Cart
                  </span>
                </Link>
              </li>
              <li className="mr-auto">
                <Link
                  to="/dashboard"
                  className="text-lg text-left text-gray-600 hover:text-gray-900 px-12 py-3 flex transition duration-150 ease-in-out rounded-full"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
            <ul className="flex grow justify-end flex-wrap items-center"></ul>
          </nav>

          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
