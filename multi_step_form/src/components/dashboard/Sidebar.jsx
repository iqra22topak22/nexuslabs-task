"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Users, Settings, ChevronRight, LayoutGrid } from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", icon: <Home size={20} /> },
    { name: "Users", icon: <Users size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="h-screen w-72 bg-[#030712] border-r border-white/5 p-6 flex flex-col">
      {/* Brand Logo Area */}
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)]">
          <LayoutGrid size={22} className="text-white" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-white uppercase tracking-[0.1em]">
          Nexus<span className="text-blue-500">.</span>
        </h1>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = active === item.name;

          return (
            <div
              key={item.name}
              onClick={() => setActive(item.name)}
              className="relative group cursor-pointer"
            >
              {/* Active Background Glow */}
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 rounded-xl bg-blue-600/10 border border-blue-500/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <div className={`relative flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 ${
                isActive ? "text-white" : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
              }`}>
                <div className="flex items-center gap-4">
                  <span className={`transition-colors duration-300 ${isActive ? "text-blue-500" : "group-hover:text-gray-300"}`}>
                    {item.icon}
                  </span>
                  <span className="font-medium tracking-wide text-sm">{item.name}</span>
                </div>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <ChevronRight size={14} className="text-blue-500" />
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Footer / User Profile Area */}
      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="flex items-center gap-3 p-2 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 p-[2px]">
            <div className="h-full w-full rounded-full bg-[#030712] flex items-center justify-center">
              <span className="text-xs font-bold text-white">IM</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-white leading-none">Iqra Mushtaq</p>
            <p className="text-[11px] text-gray-500 mt-1 font-medium">Pro Plan</p>
          </div>
          <Settings size={16} className="text-gray-600 group-hover:rotate-90 transition-transform duration-500" />
        </div>
      </div>
    </div>
  );
}