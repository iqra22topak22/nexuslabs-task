"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, X, BellRing } from "lucide-react";
import { useEffect } from "react";

export default function Toast({
  message,
  show,
  onClose,
  type = "success", // success | error | info
  duration = 5000,
}) {
  // Auto-hide logic for a premium "set and forget" experience
  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  const variants = {
    success: {
      icon: <CheckCircle2 className="text-emerald-500" size={20} />,
      border: "border-emerald-500/20",
      glow: "bg-emerald-500/10",
    },
    error: {
      icon: <AlertCircle className="text-rose-500" size={20} />,
      border: "border-rose-500/20",
      glow: "bg-rose-500/10",
    },
    info: {
      icon: <Info className="text-blue-500" size={20} />,
      border: "border-blue-500/20",
      glow: "bg-blue-500/10",
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)", transition: { duration: 0.2 } }}
          className="fixed top-6 right-6 z-[999] flex w-full max-w-sm items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f1a]/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        >
          {/* Ambient Background Glow based on Type */}
          <div className={`absolute -left-4 -top-4 h-16 w-16 blur-2xl ${variants[type].glow}`} />

          {/* Icon Section */}
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
            {variants[type].icon}
          </div>

          {/* Message Content */}
          <div className="flex-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
              Notification
            </h4>
            <p className="text-sm font-medium text-white">{message}</p>
          </div>

          {/* Close Action */}
          <button
            onClick={onClose}
            className="group rounded-lg p-1 text-gray-500 transition-colors hover:bg-white/5 hover:text-white"
          >
            <X size={16} />
          </button>

          {/* Progress Timer Bar */}
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: duration / 1000, ease: "linear" }}
            className={`absolute bottom-0 left-0 h-[2px] ${
              type === "success" ? "bg-emerald-500" : type === "error" ? "bg-rose-500" : "bg-blue-500"
            }`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}