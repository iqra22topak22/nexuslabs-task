"use client";

import React from 'react';
import { 
  Bell, 
  Lock, 
  User, 
  Globe, 
  ChevronRight, 
  Moon, 
  Sun,
  ArrowLeft,
  Settings,
  LogOut
} from 'lucide-react';
import { useTheme } from "@/components/ThemeProvider";

const SECTIONS_CONFIG = [
  { id: 'profile', label: 'Account Profile', icon: User, colorClass: 'text-blue-500 bg-blue-500/10' },
  { id: 'security', label: 'Security & Privacy', icon: Lock, colorClass: 'text-purple-500 bg-purple-500/10' },
  { id: 'notifications', label: 'Notifications', icon: Bell, colorClass: 'text-amber-500 bg-amber-500/10' },
  { id: 'language', label: 'Language & Region', icon: Globe, colorClass: 'text-emerald-500 bg-emerald-500/10' },
];

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const handleBackNavigation = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 selection:bg-blue-500/30 overflow-x-hidden relative ${
      isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* 1. BACKGROUND DECOR */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] transition-opacity duration-1000 ${
          isDarkMode ? 'bg-indigo-600/[0.03]' : 'bg-blue-400/[0.05]'
        }`} />
        <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[130px] transition-opacity duration-1000 ${
          isDarkMode ? 'bg-blue-600/[0.02]' : 'bg-indigo-400/[0.04]'
        }`} />
      </div>

      {/* 2. CONFIGURATION CONTROL INTERFACE */}
      <main className="relative z-10 flex-grow w-full max-w-3xl mx-auto pt-24 sm:pt-32 pb-20 px-4 sm:px-6">
        
        {/* Navigation Breadcrumb Line */}
        <div className="mb-10 px-2">
          <button 
            onClick={handleBackNavigation}
            className="flex items-center gap-3 text-blue-500 group transition-transform active:translate-x-[-2px]"
          >
            <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
              <ArrowLeft size={14} strokeWidth={2.5} />
            </div>
            <span className="text-[10px] font-black tracking-[0.2em] uppercase">Return to Dashboard</span>
          </button>
        </div>

        {/* Header Section */}
        <header className="mb-12 px-2 flex items-end justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-6xl font-black tracking-tighter uppercase italic leading-none">
              Settings
            </h1>
            <p className={`text-sm font-semibold transition-colors ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Configure your agentic environment parameters and authorization tokens.
            </p>
          </div>
          
          <Settings 
            size={56} 
            strokeWidth={1.2} 
            className={`opacity-5 animate-[spin_12s_linear_infinite] shrink-0 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`} 
          />
        </header>

        <div className="space-y-8">
          
          {/* Theme Preference Settings Group */}
          <section className="space-y-3">
            <h2 className={`text-[10px] font-black uppercase tracking-[0.25em] ml-4 transition-colors ${
              isDarkMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              Preference
            </h2>
            
            <div className={`rounded-[2.5rem] border transition-all ${
              isDarkMode 
                ? 'bg-slate-900/20 border-white/5' 
                : 'bg-white border-slate-200/80 shadow-xl shadow-slate-200/20'
            }`}>
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-colors border ${
                      isDarkMode 
                        ? 'bg-slate-900 border-white/10 text-yellow-400' 
                        : 'bg-blue-50 border-blue-100 text-blue-600'
                    }`}>
                      {isDarkMode ? <Moon size={22} strokeWidth={2.2} /> : <Sun size={22} strokeWidth={2.2} />}
                    </div>
                    
                    <div className="space-y-0.5">
                      <h3 className="text-lg sm:text-xl font-black uppercase italic tracking-tight">Interface Theme</h3>
                      <p className={`text-xs sm:text-sm transition-colors ${
                        isDarkMode ? 'text-slate-500' : 'text-slate-400'
                      }`}>
                        Set to <span className="text-blue-500 font-black tracking-wide">{isDarkMode ? 'DEEP SPACE' : 'CLOUD WHITE'}</span>
                      </p>
                    </div>
                  </div>

                  {/* Custom Toggle Track */}
                  <button 
                    onClick={toggleTheme}
                    aria-label="Toggle structural interface theme mode"
                    className={`relative w-16 sm:w-20 h-9 sm:h-10 rounded-full transition-colors duration-300 p-1 border shrink-0 ${
                      isDarkMode ? 'bg-blue-600 border-blue-400/20' : 'bg-slate-200 border-slate-300'
                    }`}
                  >
                    <div className={`w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                      isDarkMode ? 'translate-x-7 sm:translate-x-10' : 'translate-x-0'
                    }`}>
                      <div className={`w-0.5 h-2.5 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-slate-300'}`} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Account System Configuration Tree */}
          <section className="space-y-3">
            <h2 className={`text-[10px] font-black uppercase tracking-[0.25em] ml-4 transition-colors ${
              isDarkMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              Account
            </h2>
            
            <div className={`rounded-[2.5rem] border overflow-hidden transition-all ${
              isDarkMode 
                ? 'bg-slate-900/20 border-white/5' 
                : 'bg-white border-slate-200/80 shadow-xl shadow-slate-200/20'
            }`}>
              {SECTIONS_CONFIG.map((item, index) => {
                const IconComponent = item.icon;
                
                return (
                  <button 
                    key={item.id}
                    className={`w-full flex items-center justify-between p-6 sm:p-7 transition-colors group active:scale-[0.995] ${
                      index !== SECTIONS_CONFIG.length - 1 
                        ? (isDarkMode ? 'border-b border-white/5' : 'border-b border-slate-100') 
                        : ''
                    } hover:bg-blue-500/[0.02]`}
                  >
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${item.colorClass}`}>
                        <IconComponent size={16} strokeWidth={2.5} />
                      </div>
                      <span className="text-base sm:text-lg font-black uppercase tracking-tighter italic">
                        {item.label}
                      </span>
                    </div>
                    
                    <div className={`p-1.5 rounded-full transition-colors ${
                      isDarkMode ? 'bg-white/5 group-hover:bg-white/10' : 'bg-slate-100 group-hover:bg-slate-200'
                    }`}>
                      <ChevronRight size={16} strokeWidth={2.5} className={isDarkMode ? 'text-slate-500' : 'text-slate-400'} />
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Action Trigger Node Footer */}
          <footer className="pt-8 flex flex-col items-center gap-6">
            <button className={`flex items-center gap-2.5 px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all border active:scale-95 shadow-md ${
              isDarkMode 
                ? 'border-rose-500/20 text-rose-400 bg-rose-500/5 hover:bg-rose-500/10' 
                : 'border-slate-200 text-slate-600 bg-white hover:text-rose-600 hover:border-rose-200 shadow-slate-200/40'
            }`}>
              <LogOut size={14} strokeWidth={2.5} />
              <span>Sign out from CORE.AI</span>
            </button>
            
            <span className="text-[9px] font-black text-slate-500 tracking-[0.35em] uppercase opacity-40">
              System Ver 2.0.4 • Build 2026
            </span>
          </footer>

        </div>
      </main>
    </div>
  );
}