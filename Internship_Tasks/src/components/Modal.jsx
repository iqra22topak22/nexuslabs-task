"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Modal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#030712]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f1a] p-8 shadow-2xl"
          >
            {/* Top Decorative Gradient */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                <span className="text-2xl">👋</span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white">
                Welcome Back
              </h2>
              
              <p className="mt-3 text-gray-400 leading-relaxed">
                This is a premium modal experience. Notice the subtle entrance spring, 
                the background blur, and the refined typography.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={onClose}
                  className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-[0.98]"
                >
                  Continue
                </button>
                
                <button
                  onClick={onClose}
                  className="w-full rounded-xl bg-white/5 py-3 font-semibold text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>

            {/* Background Glow Interior */}
            <div className="absolute -bottom-24 -left-24 h-48 w-48 bg-blue-600/10 blur-[80px]" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}