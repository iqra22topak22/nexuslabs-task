"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Users, Settings, ChevronRight, LayoutGrid } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Sidebar() {
  const [active, setActive] = useState("Home");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const menuItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Users", icon: Users, href: "/users" },
    { name: "Settings", icon: Settings, href: "/ui-docs" },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 z-40 hidden md:flex h-screen w-72 border-r p-6 flex-col transition-colors duration-500 ${
      isDark ? "bg-slate-950 border-white/5" : "bg-white border-slate-200/80"
    }`}>
      {/* Platform Branding/Identifier Node */}
      <div className="flex items-center gap-3 px-2 pt-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
          <LayoutGrid size={18} strokeWidth={2.5} />
        </div>
        <div>
           <span className={`font-black tracking-tighter text-xl uppercase italic transition-colors duration-500 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Nexus<span className="text-blue-600 not-italic font-light">Labs</span>
            </span>
        </div>
      </div>

      {/* Main Navigation Tree */}
      <nav className="flex-1 space-y-1.5 pt-12">
        {menuItems.map((item) => {
          const isActive = active === item.name;
          const IconComponent = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              className="relative block outline-none group"
            >
              {/* Layout-Isolated Spring Pill */}
              {isActive && (
                <motion.div
                  layoutId="sidebarActivePill"
                  className={`absolute inset-0 rounded-xl border ${
                    isDark 
                      ? "bg-blue-600/[0.08] border-blue-500/20" 
                      : "bg-blue-50/70 border-blue-100"
                  }`}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}

              {/* Functional Interaction Row */}
              <div className={`relative flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? isDark ? "text-white" : "text-blue-600"
                  : isDark 
                    ? "text-slate-500 hover:text-slate-200 hover:bg-white/[0.02]" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}>
                <div className="flex items-center gap-3.5">
                  <span className={`transition-colors duration-300 ${
                    isActive 
                      ? "text-blue-500" 
                      : isDark ? "group-hover:text-slate-300" : "group-hover:text-slate-700"
                  }`}>
                    <IconComponent size={18} strokeWidth={isActive ? 2.5 : 2} />
                  </span>
                  <span className={`font-bold uppercase tracking-wider text-xs transition-all ${
                    isActive ? "tracking-wide" : ""
                  }`}>
                    {item.name}
                  </span>
                </div>

                {/* Micro Chevron Notification */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight size={14} strokeWidth={3} className="text-blue-500" />
                  </motion.div>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer System Status & Profile Node */}
      <div className={`mt-auto pt-4 border-t transition-colors ${
        isDark ? "border-white/5" : "border-slate-200/60"
      }`}>
        <Link href="/users" className={`flex items-center gap-3 p-2 rounded-2xl transition-all duration-300 group ${
          isDark ? "hover:bg-white/5" : "hover:bg-slate-100/80 hover:shadow-sm"
        }`}>
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1.5px] shadow-md shadow-blue-600/10">
            <div className={`h-full w-full rounded-[10px] flex items-center justify-center font-black text-xs transition-colors ${
              isDark ? "bg-slate-950 text-white" : "bg-white text-slate-900"
            }`}>
              IM
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <p className={`text-xs font-black uppercase tracking-wide truncate ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Iqra Mushtaq
            </p>
            <p className="text-[9px] font-bold text-blue-500 uppercase tracking-widest mt-0.5">
              Pro Account
            </p>
          </div>
          
          <Settings 
            size={14} 
            className="text-slate-500 group-hover:rotate-45 transition-transform duration-500 ease-out" 
            strokeWidth={2.5}
          />
        </Link>
      </div>
    </div>
  );
}