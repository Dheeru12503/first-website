"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdCall } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { button } from "framer-motion/client";
import SignIn from "./SignIn";

const NavBar: React.FC = () => {
  const [isMediumMenuOpen, setMediumMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleMediumMenu = () => {
    setMediumMenuOpen(!isMediumMenuOpen);
  };

  const toggleSignIn = () => setShowSignIn(!showSignIn);

  return (
    <nav className="absolute pb-3 inset-x-0 top-0 z-[9999999999] w-full shadow-[inset_0px_150px_50px_-90px_rgba(255,255,255,1)]">
      <div>
        <div className="flex justify-between items-center p-4 mx-4 lg:mx-8 xl:mx-16 max-w-[1280px] lg:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-8rem)]">
          {/* Profile icon on the left for mobile view */}
            <CgProfile className=" md:hidden h-[24px] w-[24px] cursor-pointer" onClick={toggleSignIn} />
       

          {/* Logo centered in mobile view */}
          <img
            src="http://unitedestates.com/wp-content/uploads/2022/12/Untitled-design-6-1.png"
            alt="Logo"
            className="w-32 mx-auto md:mx-0"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center text-[14px]">
            <div className="hidden xl:flex space-x-4">
              {["Buy", "Sell", "Rent", "Off Plan", "Services", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-[#c96232] rounded-md border border-transparent hover:bg-[#0052b7] hover:text-white hover:border-blue-600 transition duration-200 ease-in-out px-4 py-2"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>

            <div className="flex items-center space-x-4">
              <span className="font-bold inline-flex items-center justify-center">
                <IoMdCall />
                +97142500089
              </span>

              <CgProfile
                className="h-[20px] w-[20px] cursor-pointer"
                onClick={toggleSignIn}
              />

              <div>
                <a
                  className="inline-block p-[10px] pl-[18px] pr-[18px] font-medium no-underline bg-[#135db7] text-white text-center whitespace-nowrap rounded-[5px]"
                  href="#"
                >
                  List Your Property
                </a>
              </div>
              {isMediumMenuOpen ? (
                <button
                  onClick={() => setMediumMenuOpen(false)}
                  className="lg:block xl:hidden flex items-center justify-center w-10 h-10 text-4xl text-[#db6a37] focus:outline-none hover:text-red-600 transition-colors duration-200"
                >
                  &times;
                </button>
              ) : (
                <button
                  onClick={toggleMediumMenu}
                  className="lg:block xl:hidden flex items-center justify-center w-10 h-10 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 text-[#db6a37]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Hamburger Icon for Medium screens (1024px to 1285px) */}
          {isMediumMenuOpen ? (
            <button
              onClick={() => setMediumMenuOpen(false)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-[#db6a37] text-4xl focus:outline-none hover:text-red-600 transition-colors duration-200"
            >
              &times;
            </button>
          ) : (
            <button
              onClick={toggleMediumMenu}
              className="md:hidden xl:hidden flex items-center justify-center w-10 h-10 focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-[#db6a37]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Medium Screen Menu Drawer (1024px to 1285px) */}
      {isMediumMenuOpen && (
        <div
          className={`lg:block xl:hidden bg-white w-[150px] absolute top-10 right-3 z-[999999] flex flex-col shadow-lg rounded-bl-md overflow-hidden transition-all duration-300 ease-in-out ${
            isMediumMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } translate-y-[4.3rem] rounded-[5px]`}
        >
          {/* Menu Items */}
          <div className="flex flex-col items-start pl-4 pb-4 space-y-2">
            {["Buy", "Sell", "Rent", "Off Plan", "Services", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-[#db6a37] hover:text-blue-600 py-2 text-lg  transition-colors duration-200"
                  onClick={() => setMediumMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      )}

      {showSignIn && <SignIn />}
    </nav>
  );
};

export default NavBar;
