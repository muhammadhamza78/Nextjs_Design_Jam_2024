"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Important for App Directory
import Link from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/content/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { cart } = useCart();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Pages", path: "/pages" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  // Navigate to Cart Page
  const goToCart = () => {
    router.push("/cart");
  };

  return (
    <nav className="bg-white shadow-sm border-b-2">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-4 relative">
        <div className="w-full flex items-center justify-between md:justify-start md:w-auto">
          <Link href="/" className="text-2xl font-bold text-blue-950 md:mr-10 lg:mr-16">
            Hekto
          </Link>

          <div className="flex items-center space-x-4 md:hidden">
            <button onClick={() => setSearchOpen(!searchOpen)} className="focus:outline-none relative p-2">
              <FaSearch className="text-2xl text-gray-600" />
            </button>
            <button className="text-3xl focus:outline-none p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="md:hidden w-full absolute top-full left-0 z-10 bg-white p-4 border-b">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
              <button className="bg-pink-600 text-white px-3 py-2 rounded-md hover:bg-pink-700">
                <FaSearch />
              </button>
            </div>
          </div>
        )}

        <div className={`w-full md:w-auto ${menuOpen ? "block" : "hidden"} md:block transition-all duration-300 ease-in-out md:mx-auto`}>
          <ul className="flex flex-col md:flex-row items-center gap-10 space-y-4 md:space-y-0 md:space-x-6 text-center">
            {navItems.map((item) => (
              <li key={item.name} className="w-full md:w-auto">
                <Link href={item.path} className="block py-2 md:py-0 hover:text-pink-600 transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button onClick={goToCart} className="p-2 text-gray-600 hover:text-pink-600 focus:outline-none transition-colors relative">
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-pink-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-48 lg:w-64 focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
          <button className="p-2 text-gray-600 hover:text-pink-600 focus:outline-none transition-colors">
            <FaSearch className="text-2xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}