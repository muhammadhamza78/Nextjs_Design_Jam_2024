"use client";
import { useState } from "react";

const Gift = () => {
  const [giftCardAmount, setGiftCardAmount] = useState<number | string>(""); // Define giftCardAmount as a number or string
  const [voucherCode, setVoucherCode] = useState("");
  const [appliedVoucher, setAppliedVoucher] = useState<boolean | null>(null);
  const [voucherMessage, setVoucherMessage] = useState("");
  const [totalAmount, setTotalAmount] = useState(100); // Example total amount before discount

  const giftCardOptions = [
    { id: 1, label: "$10 Gift Card", value: 10 },
    { id: 2, label: "$20 Gift Card", value: 20 },
    { id: 3, label: "$50 Gift Card", value: 50 },
  ];

  // Handle gift card selection
  const handleGiftCardSelect = (amount: number) => {  // Explicitly type 'amount' as 'number'
    setGiftCardAmount(amount);
  };

  // Handle voucher code submission
  const handleVoucherSubmit = () => {
    if (voucherCode === "DISCOUNT20") {
      setAppliedVoucher(true);
      setVoucherMessage("Voucher Applied: 20% off!");
      setTotalAmount((prevAmount) => prevAmount * 0.8); // Applying 20% discount
    } else {
      setAppliedVoucher(false);
      setVoucherMessage("Invalid voucher code.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Gift Card Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Select a Gift Card</h2>
        <div className="flex gap-4">
          {giftCardOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleGiftCardSelect(option.value)}
              className={`py-2 px-4 rounded-md text-white ${giftCardAmount === option.value ? 'bg-green-500' : 'bg-gray-400'} hover:bg-green-600`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-500">Selected Amount: ${giftCardAmount}</p>
      </div>

      {/* Voucher Code Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Apply a Voucher Code</h2>
        <input
          type="text"
          value={voucherCode}
          onChange={(e) => setVoucherCode(e.target.value)}
          placeholder="Enter voucher code"
          className="border border-gray-300 p-2 rounded-md w-full"
        />
        <button
          onClick={handleVoucherSubmit}
          className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
        >
          Apply Voucher
        </button>
        {voucherMessage && (
          <p className={`mt-2 text-sm ${appliedVoucher ? 'text-green-600' : 'text-red-600'}`}>
            {voucherMessage}
          </p>
        )}
      </div>

      {/* Total Amount */}
      <div className="text-lg font-semibold">
        <p>Total Amount: ${totalAmount}</p>
      </div>
    </div>
  );
};

export default Gift;
