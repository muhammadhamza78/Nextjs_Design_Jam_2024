"use client";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <header className="bg-violet-700 text-white">
      {/* Top Bar */}
      <div className="py-2 text-sm">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          {/* Desktop Top Bar */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href="mailto:mhhasanul@gmail.com"
                className="flex items-center gap-2 hover:text-gray-200"
              >
                <AiOutlineMail />
                <span className="hidden lg:inline">mhhasanul@gmail.com</span>
              </a>
              <a
                href="tel:1234567890"
                className="flex items-center gap-2 hover:text-gray-200"
              >
                <MdPhone />
                <span className="hidden lg:inline">(12345)67890</span>
              </a>
            </div>
            <div className="flex items-center gap-4 lg:gap-6">
              <div
                className="relative cursor-pointer flex items-center gap-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setLanguageDropdown(!languageDropdown);
                  setCurrencyDropdown(false);
                }}
              >
                <span className="text-sm">English</span>
                <IoIosArrowDown className="text-xs" />
                {languageDropdown && (
                  <div className="absolute top-full mt-2 bg-white text-black rounded shadow-md z-10">
                    {["English", "Spanish", "French", "German"].map((lang) => (
                      <div
                        key={lang}
                        className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div
                className="relative cursor-pointer flex items-center gap-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrencyDropdown(!currencyDropdown);
                  setLanguageDropdown(false);
                }}
              >
                <span className="text-sm">USD</span>
                <IoIosArrowDown className="text-xs" />
                {currencyDropdown && (
                  <div className="absolute top-full mt-2 bg-white text-black rounded shadow-md z-10">
                    {["USD", "EUR", "GBP"].map((curr) => (
                      <div
                        key={curr}
                        className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
                      >
                        {curr}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <a href="/login" className="hover:text-gray-200 flex items-center gap-2">
                <FiUser /> Login
              </a>
              <a href="/wishlist" className="hover:text-gray-200 flex items-center gap-2">
                <FaRegHeart /> Wishlist
              </a>
              <a href="/cart" className="hover:text-gray-200">
                <IoCartOutline size="18px" />
              </a>
            </div>
          </div>

          {/* Mobile Section */}
          <div className="md:hidden">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <a href="mailto:mhhasanul@gmail.com" className="flex items-center gap-2">
                  <AiOutlineMail />
                  <span className="text-sm">mhhasanul@gmail.com</span>
                </a>
                <a href="tel:1234567890" className="flex items-center gap-2">
                  <MdPhone />
                  <span className="text-sm">(12345)67890</span>
                </a>
              </div>
              <button
                className="text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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

            {isMobileMenuOpen && (
              <div className="bg-violet-800 text-white p-4 rounded mt-2 space-y-4">
                <div
                  className="flex items-center justify-between"
                  onClick={() => {
                    setLanguageDropdown(!languageDropdown);
                    setCurrencyDropdown(false);
                  }}
                >
                  <span>Language</span>
                  <IoIosArrowDown />
                </div>
                {languageDropdown && (
                  <div className="bg-white text-black p-2 rounded">
                    {["English", "Spanish", "French", "German"].map((lang) => (
                      <div
                        key={lang}
                        className="hover:bg-gray-200 p-2 cursor-pointer"
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                )}
                <div
                  className="flex items-center justify-between"
                  onClick={() => {
                    setCurrencyDropdown(!currencyDropdown);
                    setLanguageDropdown(false);
                  }}
                >
                  <span>Currency</span>
                  <IoIosArrowDown />
                </div>
                {currencyDropdown && (
                  <div className="bg-white text-black p-2 rounded">
                    {["USD", "EUR", "GBP"].map((curr) => (
                      <div
                        key={curr}
                        className="hover:bg-gray-200 p-2 cursor-pointer"
                      >
                        {curr}
                      </div>
                    ))}
                  </div>
                )}
                <br />
                <a href="/login" className="hover:text-gray-300">
                  Login
                </a><br /><br />
                <a href="/wishlist" className="hover:text-gray-300">
                  Wishlist
                </a><br /><br />
                <a href="/cart" className="hover:text-gray-300">
                  Cart
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
