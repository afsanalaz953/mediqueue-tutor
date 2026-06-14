// components/ForgotPasswordModal.js
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendResetLink = async () => {
    if (!email) {
      setMessage("Please enter your email address");
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await authClient.forgetPassword({
        email,
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Password reset link sent to your email.");
        setTimeout(() => {
          onClose();
          setMessage("");
          setEmail("");
        }, 3000);
      }
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-bold mb-4">Reset Password</h3>
        <p className="text-sm text-gray-600 mb-4">
          Enter your email address and we will send you a password reset link.
        </p>
        <input
          type="email"
          placeholder="Your email"
          className="input border-2 w-full mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {message && (
          <p className={`text-sm mb-2 ${message.includes("sent") ? "text-green-600" : "text-red-500"}`}>
            {message}
          </p>
        )}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            onClick={handleSendResetLink}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </div>
      </div>
    </div>
  );
};