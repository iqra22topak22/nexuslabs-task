"use client";

import React from 'react';
import { Layout, Code, Monitor, Zap, ArrowRight } from 'lucide-react';
import { useTheme } from "@/components/ThemeProvider";

// Placed outside the component body to maintain clean memory allocation and prevent layout re-evaluation
const SERVICES_DATA = [
  {
    title: "Web Development",
    description: "Building high-performance, scalable web apps with the latest frameworks.",
    icon: Code,
    colorClass: "text-blue-500",
  },
  {
    title: "UI/UX Design",
    description: "Crafting visually stunning and user-centric interfaces with premium aesthetics.",
    icon: Layout,
    colorClass: "text-purple-500",
  },
  {
    title: "Dashboard Development",
    description: "Complex data visualization and management tools built for clarity and speed.",
    icon: Monitor,
    colorClass: "text-indigo-500",
  },
  {
    title: "Real-Time Applications",
    description: "Low-latency systems powered by WebSockets and live data synchronization.",
    icon: Zap,
    colorClass: "text-amber-500",
  },
];

export default function ServicesPage() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 selection:bg-blue-500/30 overflow-x-hidden relative ${
      isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* 1. BACKGROUND AMBIENT GLOWS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute top-[-5%] left-[-10%] w-[600px] h-[600px] blur-[150px] rounded-full transition-opacity duration-1000 ${
          isDarkMode ? 'bg-blue-600/[0.03]' : 'bg-blue-400/[0.06]'
        }`} />
        <div className={`absolute top-[20%] right-[-10%] w-[500px] h-[500px] blur-[130px] rounded-full transition-opacity duration-1000 ${
          isDarkMode ? 'bg-purple-600/[0.02]' : 'bg-purple-400/[0.05]'
        }`} />
      </div>

      {/* 2. MAIN INTERACTIVE CONTENT */}
      <main className="relative z-10 flex-grow max-w-6xl mx-auto pt-32 sm:pt-40 pb-20 px-4 sm:px-6">
        
        {/* Header Hero Section */}
        <div className="text-center mb-16 sm:mb-24 space-y-6 sm:space-y-8">
          <div className="inline-flex items-center">
            <span className={`px-4 py-1 text-[10px] font-black tracking-[0.25em] uppercase rounded-full border transition-all ${
              isDarkMode 
                ? 'text-blue-400 bg-blue-500/10 border-blue-500/20' 
                : 'text-blue-600 bg-blue-50 border-blue-200/80'
            }`}>
              Our Expertise
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.95]">
            Premium <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r transition-all duration-500 ${
              isDarkMode 
                ? 'from-white via-blue-100 to-slate-500' 
                : 'from-slate-950 via-blue-600 to-indigo-600'
            }`}>
              Solutions.
            </span>
          </h1>
          
          <p className={`max-w-xl mx-auto text-base sm:text-lg font-medium transition-colors ${
            isDarkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            We transform complex ideas into digital realities with precision engineering and world-class design languages.
          </p>
        </div>

        {/* Dynamic Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                className={`group relative p-8 sm:p-10 rounded-[2.5rem] border transition-all duration-500 cursor-pointer ${
                  isDarkMode 
                    ? 'border-white/5 bg-slate-900/20 hover:bg-slate-900/40 hover:border-white/10' 
                    : 'border-slate-200/80 bg-white hover:shadow-2xl hover:shadow-blue-500/5 hover:border-blue-200/60'
                }`}
              >
                {/* Icon Shell Wrapper */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-500 group-hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-slate-900 border-white/10 group-hover:border-blue-500/50' 
                    : 'bg-slate-50 border-slate-100 group-hover:border-blue-300'
                }`}>
                  <IconComponent className={`w-6 h-6 ${service.colorClass}`} strokeWidth={2.2} />
                </div>

                {/* Service Interactive Title */}
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight italic mb-3 flex items-center gap-2.5">
                  <span>{service.title}</span>
                  <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" strokeWidth={2.5} />
                </h2>
                
                {/* Description Text */}
                <p className={`leading-relaxed text-sm sm:text-base font-semibold transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-slate-400 group-hover:text-slate-300' 
                    : 'text-slate-500 group-hover:text-slate-700'
                }`}>
                  {service.description}
                </p>

                {/* Animated Glass Glow Bottom bar */}
                <div className="absolute bottom-8 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}