"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowLeft, ArrowRight, AlertCircle } from "lucide-react";

export default function StepTwo({ formData, setFormData, nextStep, prevStep }) {
  const [error, setError] = useState(false);

  const handleNext = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setError(true);
      return;
    }
    setError(false);
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white tracking-tight">Contact Information</h2>
        <p className="text-gray-500 text-sm mt-1">We'll use this email to send your account updates.</p>
      </div>

      <div className="space-y-6">
        {/* Input Group */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center text-gray-500 group-focus-within:text-blue-500 transition-colors">
            <Mail size={18} />
          </div>

          <input
            type="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={(e) => {
              if (error) setError(false);
              setFormData({ ...formData, email: e.target.value });
            }}
            className={`w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white outline-none transition-all duration-300 ${
              error
                ? "border-rose-500/50 ring-4 ring-rose-500/10"
                : "border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10"
            }`}
          />

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -bottom-6 left-0 flex items-center gap-1.5 text-rose-500 text-xs font-medium"
              >
                <AlertCircle size={12} />
                Please enter a valid email address
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 pt-2">
          <button
            onClick={prevStep}
            className="flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-6 py-4 font-semibold text-gray-400 transition-all hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <button
            onClick={handleNext}
            className="group relative flex-1 overflow-hidden rounded-2xl bg-blue-600 py-4 font-bold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] active:scale-[0.98]"
          >
            <div className="relative z-10 flex items-center justify-center gap-2">
              Next Step
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </div>
            
            {/* Animated Shine Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}