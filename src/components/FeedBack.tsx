"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const FeedBack = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleStarClick = (rate) => {
    setRating(rate);
    setError(""); // Reset error when user selects a rating
  };

  const handleSubmit = () => {
    if (rating === 0) {
      setError("Please select a rating.");
      return;
    }
    if (comment.trim() === "") {
      setError("Please provide a comment.");
      return;
    }

    // Simulating feedback submission
    setFeedbackSubmitted(true);
    setError("");
    console.log("Feedback Submitted:", { rating, comment });
    // Reset fields after submission
    setRating(0);
    setComment("");
  };

  return (
    <div className="max-w-md w-full mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">
        Customer Feedback
      </h2>

      {/* Rating Section */}
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-semibold">Rate Your Experience</h3>
        <div className="flex justify-center sm:justify-start gap-2 mt-2">
          {[1, 2, 3, 4, 5].map((rate) => (
            <FaStar
              key={rate}
              size={24} // Reduced size for better mobile compatibility
              className={`cursor-pointer ${
                rate <= rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => handleStarClick(rate)}
            />
          ))}
        </div>
      </div>

      {/* Comment Section */}
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-semibold">Your Feedback</h3>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="4"
          placeholder="Write your comments here..."
          className="w-full border border-gray-300 p-2 rounded-md mt-2 text-sm sm:text-base"
        ></textarea>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

      {/* Submit Button */}
      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white py-2 px-4 sm:px-6 rounded-md hover:bg-blue-700 w-full sm:w-auto"
        >
          Submit Feedback
        </button>
      </div>

      {/* Success Message */}
      {feedbackSubmitted && (
        <p className="mt-4 text-green-600 font-semibold text-center">
          Thank you for your feedback!
        </p>
      )}
    </div>
  );
};

export default FeedBack;
