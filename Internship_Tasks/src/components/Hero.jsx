"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={`relative min-h-[95vh] w-full flex flex-col justify-center items-center overflow-hidden transition-colors duration-700 ${
      isDark ? "bg-slate-950" : "bg-white"
    }`}>
      {/* Premium Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className={`absolute top-[-15%] left-[-10%] h-[600px] sm:h-[1000px] w-[600px] sm:w-[1000px] rounded-full blur-[130px] transition-all duration-1000 ${
          isDark ? "bg-blue-600/10" : "bg-blue-400/15"
        }`} />
        <div className={`absolute bottom-[-15%] right-[-10%] h-[500px] sm:h-[800px] w-[500px] sm:w-[800px] rounded-full blur-[110px] transition-all duration-1000 ${
          isDark ? "bg-purple-600/5" : "bg-purple-400/10"
        }`} />
        
        {/* Dynamic Grid Overlay */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${
          isDark ? "opacity-[0.15]" : "opacity-[0.07]"
        }`} 
        style={{
          backgroundImage: `linear-gradient(to right, ${isDark ? '#ffffff' : '#000000'} 1px, transparent 1px), linear-gradient(to bottom, ${isDark ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 flex flex-col items-center">
        {/* Animated Protocol Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`mb-6 sm:mb-8 flex items-center gap-2.5 rounded-full border px-5 py-2 backdrop-blur-2xl transition-all duration-500 ${
            isDark
              ? "border-white/10 bg-white/5 hover:border-white/20"
              : "border-slate-200 bg-slate-50 hover:border-slate-300 shadow-sm"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-[0.25em] ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}>
            v4.0 Protocol Active
          </span>
        </motion.div>

        {/* High-Impact Headline Layout */}
        <div className="text-center space-y-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`font-black tracking-tight leading-[0.95] italic uppercase ${
              isDark ? "text-white" : "text-slate-900"
            }`}
            style={{ fontSize: "clamp(2.5rem, 8.5vw, 6.5rem)" }}
          >
            Agentic <br />
            <span className="text-blue-600 not-italic font-light">Intelligence.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-normal leading-relaxed transition-colors duration-500 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Deploy high-fidelity autonomous systems with sub-millisecond latency and military-grade encryption models.
          </motion.p>
        </div>

        {/* Action Button Set */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 sm:mt-12 flex flex-col items-center gap-4 sm:gap-5 sm:flex-row w-full sm:w-auto"
        >
          <button
            onClick={scrollToFeatures}
            className="group relative flex h-14 w-full sm:w-auto items-center justify-center overflow-hidden rounded-xl bg-blue-600 px-10 font-bold text-xs uppercase tracking-widest text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 active:scale-98"
          >
            <span className="relative z-10 flex items-center gap-2">
              Initialize Deployment
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </button>

          <button className={`h-14 w-full sm:w-auto px-8 rounded-xl font-bold text-xs uppercase tracking-widest border transition-all ${
            isDark 
              ? "border-white/5 text-slate-400 hover:text-white hover:bg-white/5" 
              : "border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 shadow-sm"
          }`}>
            View Neural Map
          </button>
        </motion.div>

        {/* Dynamic Social Proof Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          whileHover={{ opacity: 0.8 }}
          transition={{ duration: 0.5 }}
          className={`mt-20 sm:mt-28 flex flex-col items-center gap-5 transition-all ${
            isDark ? "grayscale invert" : "grayscale"
          }`}
        >
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500">Powered by Enterprise Orchestration</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-lg sm:text-xl font-black italic tracking-tighter opacity-60 selection:bg-transparent">
            <span>GPT-4o</span>
            <span>CLAUDE-3</span>
            <span>GEMINI-1.5</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}