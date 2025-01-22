"use client";
import { useState } from "react";

const Discount = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  // const [isBlurred, setIsBlurred] = useState(false);

  // Toggle the visibility of the banner and blur effect
  const closeBanner = () => {
    setIsBannerVisible(false);
    // setIsBlurred(false);
  };

  // Show the banner and apply blur to the background
  const showBanner = () => {
    setIsBannerVisible(true);
    // setIsBlurred(true);
  };

  return (
    <div>
      {isBannerVisible && (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-violet-700 text-white p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center z-50 rounded-lg shadow-lg"
          style={{
            backdropFilter: "blur(10px)",
            width: "90%", // Ensure proper width on smaller screens
            maxWidth: "600px", // Prevent banner from stretching too much
          }}
        >
          <div className="flex items-start gap-4">
            <div className="text-center sm:text-left">
              <span className="block text-base sm:text-lg font-bold">
                🎉 Special Discount!
              </span>
              <p className="text-sm sm:text-base">
                Get 20% off on all products!
              </p>
            </div>
          </div>

          {/* Close Icon */}
          <button
            onClick={closeBanner}
            className="text-white text-xl sm:text-2xl font-semibold hover:text-gray-300 mt-2 sm:mt-0"
          >
            ×
          </button>
        </div>
      )}

      {/* Button to simulate showing the banner */}
      <button
        onClick={showBanner}
        className="fixed bottom-4 left-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg sm:bottom-10 sm:left-10"
      >
        Discount
      </button>
    </div>
  );
};

export default Discount;
