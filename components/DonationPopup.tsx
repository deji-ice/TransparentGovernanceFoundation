"use client";

import { useState, useEffect } from "react";
import { FaTimes, FaCreditCard, FaRegCreditCard, FaLock } from "react-icons/fa";
import dynamic from "next/dynamic";

interface DonationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationPopup = ({ isOpen, onClose }: DonationPopupProps) => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const predefinedAmounts = ["100", "500", "1000", "5000", "10000"];

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsProcessing(true);

    try {
      const PaystackPop = (await import("@paystack/inline-js")).default;
      await new PaystackPop().newTransaction({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
        email,
        amount: parseFloat(amount) * 100,
        currency: "NGN",
        ref: `TGF_${Date.now()}_${Math.floor(Math.random() * 1000000)}`,
        onSuccess: (transaction: any) => {
          setIsProcessing(false);
          // Show success message before closing
          setTimeout(() => {
            onClose();
          }, 1500);
        },
        onCancel: () => {
          setIsProcessing(false);
          setErrorMessage("Payment cancelled");
        },
      });
    } catch (error) {
      console.error("Payment error:", error);
      setIsProcessing(false);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full p-6 md:p-8 transform transition-all duration-300 scale-100">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 
                   transition-colors duration-200 rounded-full p-2 hover:bg-gray-100"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-16 h-16 bg-green-100 
                        rounded-full mb-4 text-green-600"
          >
            <FaRegCreditCard className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Make a Donation
          </h2>
          <p className="text-gray-600">
            Your support helps us promote transparency in governance
          </p>
        </div>

        {errorMessage && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handlePayment} className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {predefinedAmounts.map((preset) => (
              <button
                type="button"
                key={preset}
                onClick={() => setAmount(preset)}
                className={`py-3 px-4 rounded-lg border-2 flex items-center justify-center transition-all duration-300
                  ${
                    amount === preset
                      ? "border-green-600 bg-green-50 text-green-700 shadow-sm"
                      : "border-gray-200 hover:border-green-600 hover:bg-green-50/50"
                  }`}
              >
                ₦{parseInt(preset).toLocaleString()}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                ₦
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter custom amount"
                required
                min="100"
                className="w-full pl-8 pr-4 py-3 border-2 bg-white border-gray-200 rounded-lg 
                         focus:border-green-600 focus:ring-0 transition-colors"
              />
            </div>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border-2 bg-white border-gray-200 rounded-lg 
                       focus:border-green-600 focus:ring-0 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isProcessing || !amount || !email}
            className={`w-full py-4 rounded-lg flex items-center justify-center gap-2 
                     transition-all duration-300 ${
                       isProcessing || !amount || !email
                         ? "bg-gray-400 cursor-not-allowed"
                         : "bg-green-600 hover:bg-green-700 hover:shadow-lg active:scale-[0.99]"
                     } text-white`}
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <FaLock className="w-4 h-4" />
                Proceed to Payment
              </>
            )}
          </button>

          <span className="text-sm text-center text-gray-500 flex items-center justify-center gap-1">
            <FaLock className="w-3 h-3" />
            <p className="text-xs">
              {" "}
              Secured by Paystack. You will receive a receipt via email.
            </p>
          </span>
        </form>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(DonationPopup), {
  ssr: false,
});
