"use client";

import { useState } from "react";

export default function LoginPage() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-md w-full border border-border rounded-2xl p-8">

        {step === "phone" && (
          <>
            <h1 className="text-2xl font-semibold text-textPrimary mb-2">
              Verify your number
            </h1>

            <p className="text-textSecondary text-sm mb-6">
              We use your phone number only to keep listings genuine.
            </p>

            <input
              type="tel"
              placeholder="Enter mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-border rounded-xl px-4 py-3 mb-4 focus:outline-none"
            />

            <button
              onClick={() => setStep("otp")}
              className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              Send OTP
            </button>

            <p className="text-xs text-textSecondary mt-6 text-center">
              No spam. No marketing calls. Only rental communication.
            </p>
          </>
        )}

        {step === "otp" && (
          <>
            <h1 className="text-2xl font-semibold text-textPrimary mb-2">
              Enter verification code
            </h1>

            <p className="text-textSecondary text-sm mb-6">
              We sent a 6-digit code to <span className="font-medium">{phone}</span>
            </p>

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-border rounded-xl px-4 py-3 mb-4 focus:outline-none text-center tracking-widest"
            />

            <button
              className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              Verify & continue
            </button>

            <button
              onClick={() => setStep("phone")}
              className="w-full mt-4 text-sm text-textSecondary hover:underline"
            >
              Change phone number
            </button>
          </>
        )}

      </div>
    </div>
  );
}
