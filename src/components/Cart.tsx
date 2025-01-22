// src/components/Cart.tsx
import React from "react";
import { useCart } from "@/content/CartContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const totalPrice = cart.reduce(
    (sum, { product, quantity }) => sum + product.price * quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="p-4 text-center bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty.</h2>
        <p className="text-gray-500">Browse our products and add to your cart!</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white border rounded-lg shadow-md max-w-3xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">CART</h2>

      <h3 className="text-xl font-bold mb-4">Shopping Cart</h3>
      {cart.map(({ product, quantity }) => (
        <div
          key={product._id}
          className="flex flex-col sm:flex-row justify-between items-center mb-4 bg-gray-50 p-3 rounded-md"
        >
          {/* Product Details */}
          <div className="text-center sm:text-left">
            <p className="font-medium text-lg">{product.name}</p>
            <p className="text-gray-500 text-sm">
              ${product.price} × {quantity}
            </p>
          </div>

          {/* Quantity and Actions */}
          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <button
              className="p-1 text-gray-700 border rounded w-8 h-8 flex justify-center items-center"
              onClick={() => updateQuantity(product._id, quantity - 1)}
            >
              -
            </button>
            <span className="font-medium">{quantity}</span>
            <button
              className="p-1 text-gray-700 border rounded w-8 h-8 flex justify-center items-center"
              onClick={() => updateQuantity(product._id, quantity + 1)}
            >
              +
            </button>
            <button
              className="p-1 text-red-600 text-sm"
              onClick={() => removeFromCart(product._id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Total Price */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-lg font-semibold">Total Price:</p>
        <p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
      </div>

      {/* Checkout Button */}
      <div className="mt-4">
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-center font-medium hover:bg-blue-700 transition">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
