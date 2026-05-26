"use client";

import { motion } from "framer-motion";

export default function Button({
  text,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) {
  // Premium Styles Configuration
  const variants = {
    primary: "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:bg-blue-500",
    secondary: "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white",
    danger: "bg-rose-600/10 text-rose-500 border border-rose-500/20 hover:bg-rose-600 hover:text-white",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
  };

  return (
    <motion.button
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`
        relative overflow-hidden px-6 py-3 rounded-2xl font-bold tracking-tight 
        transition-all duration-300 flex items-center justify-center gap-2
        ${variants[variant]} 
        ${className}
      `}
    >
      {/* 🌟 Subtle Shine Effect (Primary Only) */}
      {variant === "primary" && (
        <motion.div
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
        />
      )}

      {/* Button Content */}
      <span className="relative z-10">{text}</span>

      {/* Decorative Inner Border (Glass Effect) */}
      <div className="absolute inset-0 rounded-[inherit] border border-white/10 pointer-events-none" />
    </motion.button>
  );
}