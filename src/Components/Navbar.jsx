import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { useAuth } from "../contexts/AuthContext";
import { logoutUser } from "./Firebase";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal"

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { currentUser } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const navItems = (
    <>
      <li><a className="px-3 py-1.5 sm:px-4 sm:py-2 font-semibold rounded-lg text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 transition-all duration-500 shadow-md mr-2 sm:mr-[20px] text-sm sm:text-base" href="/">Home</a></li>
      <li><a className="px-3 py-1.5 sm:px-4 sm:py-2 font-semibold rounded-lg text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 transition-all duration-500 shadow-md mr-2 sm:mr-[20px] text-sm sm:text-base" href="/uni">Multiverse</a></li>
      <li><a className="px-3 py-1.5 sm:px-4 sm:py-2 font-semibold rounded-lg text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 transition-all duration-500 shadow-md mr-2 sm:mr-[20px] text-sm sm:text-base" href="/Superhero">Super Hero's</a></li>
      <li><a className="px-3 py-1.5 sm:px-4 sm:py-2 font-semibold rounded-lg text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 transition-all duration-500 shadow-md mr-2 sm:mr-[20px] text-sm sm:text-base" href="/movie">New Movies</a></li>
      <li><a href="/contact" className="px-3 py-1.5 sm:px-4 sm:py-2 font-semibold rounded-lg text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 transition-all duration-500 shadow-md mr-2 sm:mr-[20px] text-sm sm:text-base">Contact</a></li>
      <li><a className="px-3 py-1.5 sm:px-4 sm:py-2 font-semibold rounded-lg text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 transition-all duration-500 shadow-md mr-2 sm:mr-[20px] text-sm sm:text-base" href="/about">About</a></li>
    </>
  );

  return (
    <div className={`w-full z-50 sticky top-0 transition-all duration-300 ${sticky ? "shadow-[0_2px_8px_rgba(255,255,255,0.3)]" : ""}`}>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
              {navItems}
              {!currentUser && (
                <>
                  <li>
                    <button 
                      onClick={() => document.getElementById('login_modal').showModal()}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 font-semibold rounded-lg text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 transition-all duration-500 shadow-md mt-2 text-sm sm:text-base"
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="px-3 py-1.5 sm:px-4 sm:py-2 font-semibold rounded-lg text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 transition-all duration-500 shadow-md mt-2 text-sm sm:text-base"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Logo */}
          <img src={logo} alt="logo" className="h-8 w-8 sm:h-10 sm:w-10 mr-2 ml-2 sm:ml-[15px]" />

          <a className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-green-400 to-blue-700 bg-clip-text text-transparent pl-[5px]">
            MultiverseDB
          </a>
        </div>

        <div className="navbar-end flex items-center gap-2">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems}
            </ul>
          </div>

          {/* Theme Toggle Button */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() => {
                const newTheme = theme === "light" ? "dark" : "light";
                setTheme(newTheme);
                localStorage.setItem("theme", newTheme);
                document.querySelector("html").setAttribute("data-theme", newTheme);
              }}
            />

            {/* Sun icon */}
            <svg className="swap-off h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* Moon icon */}
            <svg className="swap-on h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* Auth UI */}
          <AuthUI />
          <LoginModal />
        </div>
      </div>
    </div>
  );
}

// AuthUI component to handle login/logout/signup
const AuthUI = () => {
  const { currentUser } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      window.location.href = '/';
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div className="relative">
      {currentUser ? (
        <div>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-3 py-1.5 sm:px-4 sm:py-2 font-semibold rounded-lg text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 transition-all duration-500 shadow-md flex items-center text-sm sm:text-base"
          >
            <span className="mr-2">{currentUser.displayName || 'User'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-base-100 rounded-md shadow-lg py-1 z-50">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-base-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="hidden lg:flex space-x-2">
          <button 
            onClick={() => document.getElementById('login_modal').showModal()}
            className="min-w-[30px] text-center px-3 py-1.5 sm:px-4 sm:py-2 font-semibold rounded-lg text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 transition-all duration-500 shadow-md mr-2 sm:mr-[20px] text-sm sm:text-base"
          >
            Login
          </button>
          <Link
            to="/signup"
            className="min-w-[80px] sm:min-w-[100px] text-center px-3 py-1.5 sm:px-4 sm:py-2 font-semibold rounded-lg text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 transition-all duration-500 shadow-md mr-2 sm:mr-[20px] text-sm sm:text-base"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;