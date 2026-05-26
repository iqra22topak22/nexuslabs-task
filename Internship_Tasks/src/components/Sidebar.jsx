"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Settings,
  X,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Sidebar({ open, setOpen }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const menuItems = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "About", href: "/about", icon: <User size={18} /> },
    { name: "Services", href: "/services", icon: <Briefcase size={18} /> },
    { name: "Settings", href: "/settings", icon: <Settings size={18} /> },
  ];

  // Structural orchestrations
  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 240,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      x: "-100%",
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 280,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 200, damping: 25 } 
    },
    exit: { opacity: 0, x: -8, transition: { duration: 0.15 } }
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Backdrop Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] bg-slate-950/40 dark:bg-[#020617]/70 backdrop-blur-md"
          />

          {/* Sidebar Drawer Container */}
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed top-0 left-0 z-[110] h-full w-72 border-r p-6 shadow-2xl backdrop-blur-2xl transition-colors duration-700 ${
              isDark
                ? "border-white/[0.06] bg-slate-950/90 shadow-black/60 text-slate-300"
                : "border-slate-200 bg-white/95 shadow-slate-900/10 text-slate-800"
            }`}
          >
            {/* Upper Drawer Branding Line */}
            <div className="mb-12 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 font-black text-white shadow-md shadow-blue-600/20">
                  I
                </div>
                <h2 className={`text-lg font-black tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>
                  Iqra<span className="text-blue-500 font-light">.dev</span>
                </h2>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(false)}
                className={`rounded-xl p-2 border transition-all ${
                  isDark
                    ? "text-slate-400 border-white/5 hover:bg-white/5 hover:text-white"
                    : "text-slate-500 border-slate-100 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <X size={16} />
              </motion.button>
            </div>

            {/* Middle Nav Matrix */}
            <nav className="space-y-1.5">
              {menuItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`group relative flex items-center justify-between rounded-xl p-3 font-medium text-sm transition-all ${
                      isDark
                        ? "text-slate-400 hover:bg-white/[0.03] hover:text-white"
                        : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`transition-colors duration-300 ${
                        isDark ? "text-slate-500 group-hover:text-blue-400" : "text-slate-400 group-hover:text-blue-600"
                      }`}>
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </div>

                    <ChevronRight
                      size={14}
                      className="transform -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-blue-500"
                    />

                    {/* Edge Left Vertical Neon Pillar */}
                    <div className="absolute left-0 h-5 w-[3px] rounded-r-full bg-blue-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Floating Profile Module */}
            <div className="absolute bottom-8 left-6 right-6">
              <div className={`flex items-center gap-3.5 rounded-2xl border p-4 backdrop-blur-md transition-all ${
                isDark
                  ? "border-white/[0.04] bg-white/[0.02]"
                  : "border-slate-200/60 bg-slate-50/80"
              }`}>
                <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-md shadow-blue-500/10" />
                <div className="overflow-hidden">
                  <p className={`text-xs font-bold truncate ${isDark ? "text-white" : "text-slate-900"}`}>
                    Iqra Mushtaq
                  </p>
                  <p className="text-[10px] font-medium tracking-wider uppercase text-slate-400 dark:text-slate-500 mt-0.5">
                    AI Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}