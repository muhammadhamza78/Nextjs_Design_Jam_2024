"use client";
import { useState } from "react";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOrderTracking = async () => {
    if (!orderId) {
      setError("Please enter a valid order ID.");
      return;
    }

    setLoading(true);
    setError(null);
    setOrderStatus(null);

    try {
      // Simulate an API request to track the order status
      const response = await fetch(`/api/trackOrder/${orderId}`);
      if (!response.ok) {
        throw new Error("Order not found");
      }
      const data = await response.json();
      setOrderStatus(data.status);
    } catch {
      setError("Failed to track the order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-3xl font-semibold text-center mb-6">Order Tracking</h2>

      <div className="mb-4">
        <label htmlFor="order-id" className="block text-lg font-medium mb-2">
          Enter Your Order ID:
        </label>
        <input
          id="order-id"
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Order ID"
        />
      </div>

      <button
        onClick={handleOrderTracking}
        className="w-full bg-blue-600 text-white py-2 rounded-lg"
        disabled={loading}
      >
        {loading ? "Tracking..." : "Track Order"}
      </button>

      {error && <div className="mt-4 text-red-600">{error}</div>}

      {orderStatus && (
        <div className="mt-6 p-4 border rounded-lg bg-white shadow-md">
          <h3 className="text-xl font-bold mb-2">Order Status:</h3>
          <p>{orderStatus}</p>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
