"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: LucideIcon;
  label?: string;
  error?: string;
}

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  icon: Icon,
  label,
  error,
}: InputProps) {
  return (
    <div className="w-full space-y-2 group">
      {/* 🏷️ Premium Floating-style Label */}
      {label && (
        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-focus-within:text-blue-500 transition-colors duration-300 ml-1">
          {label}
        </label>
      )}

      <div className="relative">
        {/* 🎨 Animated Glow Ring */}
        <motion.div
          initial={false}
          animate={{
            opacity: value ? 1 : 0.5,
            scale: 1,
          }}
          className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"
        />

        {/* 🛠️ Input Container */}
        <div className="relative flex items-center">
          {Icon && (
            <div className="absolute left-4 text-gray-500 group-focus-within:text-blue-500 transition-colors duration-300">
              <Icon size={18} strokeWidth={2} />
            </div>
          )}

          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`
              w-full bg-[#0b0f1a]/60 backdrop-blur-xl border rounded-2xl py-4 pr-4 
              ${Icon ? "pl-12" : "pl-5"}
              text-white placeholder:text-gray-600 outline-none transition-all duration-300
              ${
                error
                  ? "border-rose-500/50 ring-4 ring-rose-500/10"
                  : "border-white/10 focus:border-blue-500/50 focus:bg-[#0b0f1a]/80"
              }
            `}
          />
        </div>

        {/* ⚠️ Error State Message */}
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1.5 ml-1 text-[11px] font-medium text-rose-500 flex items-center gap-1"
          >
            <span className="h-1 w-1 rounded-full bg-rose-500" />
            {error}
          </motion.p>
        )}
      </div>
    </div>
  );
}