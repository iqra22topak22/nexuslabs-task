"use client";

import React, { useState, useEffect } from "react";
import { User, Bell, Search, Command } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function DashboardNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-[50] flex w-full items-center justify-between px-4 sm:px-8 py-4 transition-all duration-500 border-b ${
        scrolled 
          ? isDark
            ? "bg-slate-950/70 border-white/5 backdrop-blur-md shadow-lg shadow-black/10" 
            : "bg-white/80 border-slate-200/80 backdrop-blur-md shadow-sm shadow-slate-900/5"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* Left: Breadcrumbs & Adaptive Title */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          <span>Platform</span>
          <span className="opacity-60">/</span>
          <span className="text-blue-600 dark:text-blue-400">Overview</span>
        </div>
        <h2 className={`text-base sm:text-lg font-black tracking-tight uppercase italic mt-0.5 transition-colors duration-500 ${
          isDark ? "text-white" : "text-slate-900"
        }`}>
          Admin Dashboard
        </h2>
      </div>

      {/* Middle: Integrated Premium Search */}
      <div className="hidden md:flex relative group w-80 lg:w-96 mx-4">
        <div className={`absolute inset-y-0 left-3 flex items-center pointer-events-none transition-colors ${
          isDark ? "text-slate-500 group-focus-within:text-blue-400" : "text-slate-400 group-focus-within:text-blue-600"
        }`}>
          <Search size={16} />
        </div>
        <input
          type="text"
          placeholder="Search global analytics..."
          className={`w-full rounded-xl border py-2 pl-9 pr-12 text-xs font-medium outline-none transition-all ring-blue-600/10 focus:ring-4 ${
            isDark 
              ? "border-white/10 bg-white/5 text-white placeholder-slate-600 focus:border-blue-500/50" 
              : "border-slate-200 bg-slate-100 text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:bg-white shadow-inner"
          }`}
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <kbd className={`flex items-center gap-0.5 rounded border px-1.5 py-0.5 text-[9px] font-bold tracking-wide transition-colors ${
            isDark ? "border-white/10 bg-white/5 text-slate-500" : "border-slate-200 bg-white text-slate-400 shadow-sm"
          }`}>
            <Command size={9} strokeWidth={2.5} /> K
          </kbd>
        </div>
      </div>

      {/* Right: Actions & Workspace Profile */}
      <div className="flex items-center gap-4 sm:gap-5">
        {/* Alerts / Notifications */}
        <button className={`relative rounded-xl p-2.5 border transition-all duration-300 ${
          isDark 
            ? "border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:bg-white/5" 
            : "border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:shadow-sm"
        }`}>
          <Bell size={18} />
          <span className={`absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-blue-500 ring-2 ${
            isDark ? "ring-slate-950" : "ring-white"
          }`} />
        </button>

        {/* Profile Section */}
        <div className={`flex items-center gap-3 pl-4 border-l ${
          isDark ? "border-white/10" : "border-slate-200"
        }`}>
          <div className="text-right hidden sm:block">
            <p className={`text-xs font-black uppercase tracking-wide ${isDark ? "text-white" : "text-slate-900"}`}>
              Iqra Mushtaq
            </p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mt-0.5">
              Super Admin
            </p>
          </div>
          
          <button className={`group relative h-9 w-9 overflow-hidden rounded-xl border p-0.5 transition-all ${
            isDark ? "border-white/10 bg-white/5 hover:border-blue-500/50" : "border-slate-200 bg-slate-100 hover:border-blue-600"
          }`}>
            <div className="flex h-full w-full items-center justify-center rounded-[inherit] bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/10">
              <User size={16} strokeWidth={2.5} />
            </div>
            {/* Status Live Dot */}
            <div className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 bg-emerald-500 ${
              isDark ? "border-slate-950" : "border-white"
            }`} />
          </button>
        </div>
      </div>
    </nav>
  );
}