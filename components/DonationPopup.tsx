"use client";
import { useState } from "react";
import { FaTimes, FaCreditCard, FaPaypal, FaRegCreditCard } from "react-icons/fa";

interface DonationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationPopup = ({ isOpen, onClose }: DonationPopupProps) => {
  const [amount, setAmount] = useState("");
  const predefinedAmounts = ["50", "100", "250", "500"];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full p-6 md:p-8">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Make a Donation</h2>
          <p className="text-gray-600">
            Your support helps us promote transparency in governance
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {predefinedAmounts.map((preset) => (
              <button
                key={preset}
                onClick={() => setAmount(preset)}
                className={`py-3 px-4 rounded-lg border-2 transition-all duration-300
                  ${amount === preset 
                    ? "border-green-600 bg-green-50 text-green-700" 
                    : "border-gray-200 hover:border-green-600"
                  }`}
              >
                ${preset}
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              $
            </div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter custom amount"
              className="w-full pl-8 pr-4 py-3 border-2 accents:bg-white bg-white border-gray-200 rounded-lg focus:border-green-600 focus:ring-0 transition-colors"
            />
          </div>

          <div className="space-y-3">
            <button className="w-full py-4 bg-green-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition-colors">
              <FaCreditCard className="w-5 h-5" />
              Donate with Card
            </button>
            <button className="w-full py-4 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
              <FaPaypal className="w-5 h-5" />
              Donate with PayPal
            </button>
          </div>

          <p className="text-sm text-center text-gray-500">
            Your donation is tax deductible. You will receive a receipt via email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationPopup;