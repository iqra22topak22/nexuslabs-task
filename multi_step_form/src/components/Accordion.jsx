"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Info } from "lucide-react";

export default function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      <div 
        className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
          open 
            ? "border-blue-500/30 bg-white/5 shadow-[0_0_20px_rgba(59,130,246,0.1)]" 
            : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between p-5 text-left outline-none"
        >
          <div className="flex items-center gap-4">
            {/* Context Icon */}
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
              open ? "bg-blue-600 border-blue-400 text-white" : "bg-white/5 border-white/10 text-gray-400"
            }`}>
              <Info size={20} />
            </div>
            
            <span className={`text-lg font-semibold tracking-tight transition-colors ${
              open ? "text-white" : "text-gray-300"
            }`}>
              What is React?
            </span>
          </div>

          {/* Animated Chevron */}
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={open ? "text-blue-500" : "text-gray-500"}
          >
            <ChevronDown size={22} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div className="px-5 pb-6 pt-0">
                {/* Visual Divider */}
                <div className="mb-4 h-[1px] w-full bg-gradient-to-r from-blue-500/50 via-transparent to-transparent" />
                
                <p className="text-gray-400 leading-relaxed">
                  React is a declarative, component-based JavaScript library for building 
                  user interfaces. It enables developers to create complex UIs from isolated 
                  pieces of code called components, ensuring high performance through its 
                  Virtual DOM implementation.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}