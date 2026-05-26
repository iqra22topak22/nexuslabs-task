"use client";

import React from "react";
import { ArrowUp, Mail, Globe, Cpu } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className={`relative pt-24 pb-12 overflow-hidden transition-colors duration-500 ${
      isDark ? "bg-slate-950" : "bg-slate-50"
    }`}>
      {/* Premium Gradient Divider */}
      <div className={`absolute top-0 left-0 w-full h-[1px] transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
          : "bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
      }`} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16">

          {/* Brand Section */}
          <div className="space-y-5">
            <h2 className={`text-xl font-black uppercase tracking-tight italic transition-colors duration-500 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Iqra<span className="text-blue-600 not-italic font-light">.dev</span>
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-500 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
              Crafting high-performance Agentic AI solutions and premium production-grade web ecosystems.
            </p>
            <div className="flex gap-3">
              {[Cpu, Globe, Mail].map((Icon, idx) => (
                <div 
                  key={idx}
                  className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isDark
                      ? "bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                      : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:shadow-sm"
                  }`}
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className={`text-xs font-black uppercase tracking-widest mb-6 transition-colors duration-500 ${
              isDark ? "text-slate-300" : "text-slate-800"
            }`}>
              Navigation
            </h4>
            <ul className={`space-y-3.5 text-xs font-medium transition-colors duration-500 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
              {["Projects", "Skills", "Experience"].map((item) => (
                <li key={item} className="hover:text-blue-600 transition-colors cursor-pointer w-fit">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise Track */}
          <div>
            <h4 className={`text-xs font-black uppercase tracking-widest mb-6 transition-colors duration-500 ${
              isDark ? "text-slate-300" : "text-slate-800"
            }`}>
              Expertise
            </h4>
            <ul className={`space-y-3.5 text-xs font-medium transition-colors duration-500 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
              {["Next.js 16 Framework", "Agentic AI Architectures", "FastAPI Pipelines"].map((item) => (
                <li key={item} className="hover:text-blue-600 transition-colors cursor-pointer w-fit">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h4 className={`text-xs font-black uppercase tracking-widest mb-6 transition-colors duration-500 ${
              isDark ? "text-slate-300" : "text-slate-800"
            }`}>
              Newsletter
            </h4>
            <div className={`flex items-center rounded-xl border p-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-600/20 ${
              isDark
                ? "bg-white/[0.03] border-white/10 focus-within:border-blue-500/50"
                : "bg-white border-slate-200 focus-within:border-blue-500 shadow-inner"
            }`}>
              <input
                type="email"
                placeholder="Enter workspace email"
                className={`bg-transparent border-none text-xs px-3 py-2.5 outline-none w-full font-medium transition-colors duration-500 ${
                  isDark ? "text-white placeholder-slate-600" : "text-slate-900 placeholder-slate-400"
                }`}
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] uppercase tracking-wider px-4 py-2.5 rounded-lg font-bold shadow-md shadow-blue-600/10 transition-all active:scale-95">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className={`flex flex-col sm:flex-row justify-between items-center pt-8 border-t transition-colors duration-500 gap-4 ${
          isDark ? "border-white/5" : "border-slate-200/60"
        }`}>
          <p className={`text-[10px] uppercase tracking-[0.2em] font-medium text-center sm:text-left transition-colors duration-500 ${
            isDark ? "text-slate-600" : "text-slate-400"
          }`}>
            © 2026 Iqra Mushtaq | Built with Absolute Precision
          </p>

          <button
            onClick={scrollToTop}
            className={`group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${
              isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Scroll to Top
            <ArrowUp size={12} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}