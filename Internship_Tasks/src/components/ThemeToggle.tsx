"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

// Assuming types exist in your ThemeProvider, adjust path if needed
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  // Prevent server-side hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-xl bg-transparent" />;
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative w-10 h-10 rounded-xl border flex items-center justify-center overflow-hidden backdrop-blur-md transition-colors duration-500 shadow-sm ${
        isDark
          ? "bg-white/[0.03] border-white/10 hover:bg-white/[0.08] hover:border-white/20 shadow-black/40"
          : "bg-slate-100/80 border-slate-200 hover:bg-slate-200/80 hover:border-slate-300"
      }`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ y: 15, opacity: 0, rotate: -40 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -15, opacity: 0, rotate: 40 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]"
          >
            <Sun size={18} strokeWidth={2.5} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: 15, opacity: 0, rotate: 40 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -15, opacity: 0, rotate: -40 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-indigo-600 drop-shadow-[0_0_8px_rgba(79,70,229,0.15)]"
          >
            <Moon size={18} strokeWidth={2.5} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}