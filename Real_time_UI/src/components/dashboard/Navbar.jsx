"use client";

import React, { useState, useEffect } from "react";
import { User, Bell, Search, Command } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-[50] flex w-full items-center justify-between px-8 py-4 transition-all duration-300 ${
        scrolled 
          ? "bg-[#030712]/70 backdrop-blur-md border-b border-white/5" 
          : "bg-transparent"
      }`}
    >
      {/* Left: Breadcrumbs / Title */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-500">
          <span>Platform</span>
          <span>/</span>
          <span className="text-blue-500">Overview</span>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-white">
          Admin Dashboard
        </h2>
      </div>

      {/* Middle: Integrated Search (Premium SaaS Touch) */}
      <div className="hidden md:flex relative group w-96">
        <div className="absolute inset-y-0 left-3 flex items-center text-gray-500 group-focus-within:text-blue-500 transition-colors">
          <Search size={18} />
        </div>
        <input
          type="text"
          placeholder="Search analytics..."
          className="w-full rounded-xl border border-white/10 bg-white/5 py-2 pl-10 pr-12 text-sm text-white outline-none ring-blue-500/20 transition-all focus:border-blue-500/50 focus:ring-4"
        />
        <div className="absolute inset-y-0 right-3 flex items-center gap-1">
          <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-gray-500">
            <Command size={10} className="inline mr-0.5" /> K
          </kbd>
        </div>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative rounded-full p-2 text-gray-400 hover:bg-white/5 hover:text-white transition-all">
          <Bell size={20} />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-[#030712]" />
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-white">Iqra Mushtaq</p>
            <p className="text-[10px] font-medium uppercase tracking-tighter text-gray-500">Super Admin</p>
          </div>
          <button className="group relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-0.5 transition-all hover:border-blue-500/50">
            <div className="flex h-full w-full items-center justify-center rounded-[inherit] bg-gradient-to-tr from-blue-600 to-purple-600 text-white">
              <User size={20} />
            </div>
            {/* Status Indicator */}
            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#030712] bg-emerald-500" />
          </button>
        </div>
      </div>
    </nav>
  );
}