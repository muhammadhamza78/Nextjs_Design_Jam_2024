"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "New Furniture Collection Trends in 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    buttonText: "Shop Now",
    chairImage: "/sofa1.svg",
    lampImage: "/lamp1.svg",
  },
  {
    title: "Modern Chair Designs for Your Home",
    description:
      "Discover the latest modern furniture trends to elevate your living space.",
    buttonText: "Shop Now",
    chairImage: "/sofa2.png",
    lampImage: "/lamp1.svg",  },
  {
    title: "Elegant Furniture for Every Space",
    description:
      "Bring timeless elegance to your home with our exclusive furniture collection.",
    buttonText: "Shop Now",
    chairImage: "/sofa3.png", // Replace with another chair image
    lampImage: "/lamp1.svg", // Replace with another lamp image
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const current = slides[currentSlide];

  return (
    <section className="relative bg-[#F2F0FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:grid md:grid-cols-3 gap-10 overflow-hidden">
      {/* Left Column: Lamp */}
      <div className="flex justify-center items-start md:items-center relative">
        <div className="md:absolute md:top-[-80px] md:left-[-40px] z-10">
          <Image
            src={current.lampImage}
            alt="Lamp"
            width={387} // Fixed size for lamp
            height={387} // Fixed size for lamp
            className="object-contain"
          />
        </div>
      </div>

      {/* Center Column: Content (Title, Description, Button) */}
      <div className="max-w-lg text-left flex flex-col justify-center md:pl-10">
        <p className="text-sm text-pink-500 font-medium">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-indigo-950 leading-tight mt-2 text-left">
          New Furniture Collection<br />
          <span className="block text-3xl md:text-4xl">Trends in 2020</span>
        </h1>
        <p className="text-gray-600 text-xl text-sm mt-4 leading-relaxed">
          {current.description}
        </p>
        <Link
          href="#"
          className="inline-block bg-pink-500 text-white text-sm font-medium py-4 rounded-md mt-6 hover:bg-pink-600 transition-all duration-300 w-1/3 text-center"
        >
          {current.buttonText}
        </Link>
      </div>

      {/* Right Column: Chair Image */}
      <div className="flex justify-center items-center relative">
        <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
          <Image
            src={current.chairImage}
            alt="Furniture Chair"
            width={706}
            height={689}
            className="object-contain w-full h-auto md:opacity-100 opacity-70"
          />
          <div className="absolute inset-0 flex justify-center items-center text-white text-lg md:hidden">
            {current.title}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? "bg-pink-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
      >
        ❮
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
      >
        ❯
      </button>
    </section>
  );
}

export default Hero;
