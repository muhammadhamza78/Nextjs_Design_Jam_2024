import React from "react";
import { FaFacebook, FaGithub , FaLinkedin } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";

function Footer() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow"></div>

      {/* Footer Section */}
      <footer className="text-gray-600 body-font bg-[#EEEFFB]">
        <div className="container px-5 py-1 mx-auto mt-[40px]">
          <div className="flex flex-wrap md:text-left text-center order-first mt-8">
            {/* First Column */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black tracking-widest text-4xl mb-3">
                Hekto
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-52 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <input
                    type="text"
                    id="footer-field"
                    placeholder="Enter Email Address"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Sign-Up
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-8 md:text-left text-center ">
                Contact Info
                <br className="lg:block hidden " /><br />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            {/* Second Column */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-10">
              <h2 className="title-font font-bold text-black tracking-widest text-2xl mb-3">
              Catagories
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Laptops & Computers</a>
                </li><br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                  Laptops & Computers
                  </a>
                </li><br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Smart Phones & Tablets</a>
                </li><br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                  Video Games & Consoles
                  </a>
                </li><br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Waterproof Headphones
                  </a>
                </li><br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    WooCommerce Pages
                  </a>
                </li>
              </nav>
            </div>
            {/* Third Column */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-10">
              <h2 className="title-font font-bold text-black tracking-widest text-2xl mb-3">
              Customer Care
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">My Account</a>
                </li><br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Discount</a>
                </li><br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Returns</a>
                </li><br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Orders History
                  </a>
                </li><br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Order Tracking
                  </a>
                </li>
              </nav>
            </div>

            {/* Fourth Column */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black tracking-widest text-2xl mb-3">
                Pages
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Blog</a>
                </li><br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Browse the Shop
                  </a>
                </li><br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Category</a>
                </li><br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Pre-Built Pages
                  </a>
                </li><br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Visual Composer Elements
                  </a>
                </li><br />
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    WooCommerce Pages
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-[#E7E4F8]">
          <div className="container px-5 py-1 -mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 px-16">
              © 2024 Hekto —
              <a
                href="https://twitter.com/knyttnev"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @Right Reserved
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start mx-24">
              <div className="text-3xl text-gray-900 mx-2 p-2">
                <FaFacebook />
              </div>
              <div className="text-3xl text-gray-900 mx-2 p-2">
                <RxInstagramLogo />
              </div>
              <div className="text-3xl text-gray-900 mx-2 p-2">
                <FaLinkedin />
              </div>
              <div className="text-3xl text-gray-900 mx-2 p-2">
                <FaGithub  />
              </div>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
