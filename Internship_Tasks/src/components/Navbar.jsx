"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, X, Command, 
  LayoutDashboard, Info, Activity, Settings, Home
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Intelligence", href: "/dashboard", icon: LayoutDashboard },
  { name: "About Labs", href: "/about", icon: Info },
  { name: "Neural Feed", href: "/realtime-ui", icon: Activity },
  { name: "Registry", href: "/users", icon: Settings },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
      scrolled ? "py-4" : "py-8"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between p-2 pl-6 sm:pl-8 rounded-[2rem] transition-all duration-700 border ${
          scrolled
            ? isDark
              ? "bg-slate-950/40 border-white/10 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              : "bg-white/80 border-slate-200/60 backdrop-blur-2xl shadow-xl shadow-slate-900/5"
            : "bg-transparent border-transparent"
        }`}>
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform duration-500">
              <Command size={20} strokeWidth={2.5} />
            </div>
            <span className={`font-black tracking-tighter text-xl uppercase italic transition-colors duration-500 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Nexus<span className="text-blue-600 not-italic font-light">Labs</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? isDark 
                        ? "bg-white/10 text-white shadow-inner" 
                        : "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                      : isDark 
                        ? "text-slate-400 hover:text-white hover:bg-white/5" 
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl shadow-blue-600/20 transition-all active:scale-95"
            >
              Control Center
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 transition-all duration-500 rounded-xl border ${
                isDark 
                  ? "bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10" 
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Modal Integration */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Mobile Menu Dropdown Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full px-4 sm:px-6 pt-3"
          >
            <div className={`rounded-[2.5rem] border p-6 sm:p-8 shadow-2xl backdrop-blur-3xl transition-colors duration-500 ${
              isDark
                ? "bg-slate-950/95 border-white/10 shadow-black/60"
                : "bg-white/95 border-slate-200 shadow-slate-900/10"
            }`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center gap-5 p-4 rounded-[1.75rem] transition-all duration-300 ${
                        isActive
                          ? isDark 
                            ? "bg-white/10 text-white" 
                            : "bg-blue-50 text-blue-600 shadow-sm"
                          : isDark 
                            ? "hover:bg-white/[0.03] text-slate-400 hover:text-slate-200" 
                            : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <div className={`p-3 rounded-xl transition-all ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/10"
                          : isDark 
                            ? "bg-white/5 text-slate-400" 
                            : "bg-white text-slate-500 shadow-sm border border-slate-100"
                      }`}>
                        <link.icon size={20} />
                      </div>
                      <div className="overflow-hidden">
                        <p className="font-bold text-xs uppercase tracking-wider truncate">{link.name}</p>
                        <p className="text-[9px] font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500 mt-0.5">
                          Access Segment
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-between px-2">
                <div className="flex items-center gap-2.5">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse" />
                   <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 italic">
                     Neural Sync: 100%
                   </p>
                </div>
                <div className="flex gap-4 sm:hidden">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}