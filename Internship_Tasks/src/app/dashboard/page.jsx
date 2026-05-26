"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ChevronRight, 
  Home, 
  LayoutDashboard, 
  Activity, 
  Settings, 
  Search,
  Bell,
  Sun,
  Moon,
  Menu,
  X
} from "lucide-react";

import Sidebar from "@/components/dashboard/Sidebar";
import StatsCards from "@/components/dashboard/StatsCards";
import SalesChart from "@/components/dashboard/SalesChart";
import UsersTable from "@/components/dashboard/UsersTable";
import { useTheme } from "@/components/ThemeProvider";

export default function DashboardPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    // FIX 1: Corrected string quotes and interpolation spacing right here
    <div className={`flex min-h-screen transition-colors duration-500 selection:bg-blue-500/30 overflow-x-hidden ${isDark ? 'bg-[#020617] text-slate-300' : 'bg-slate-50 text-slate-600'}`}>
      
      {/* 1. AMBIENT BACKGROUND SYSTEM */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute top-[-5%] right-[-5%] w-[600px] h-[600px] blur-[120px] rounded-full transition-opacity duration-1000 ${isDark ? 'bg-blue-600/[0.03]' : 'bg-blue-400/[0.08]'}`} />
        <div className={`absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] blur-[100px] rounded-full transition-opacity duration-1000 ${isDark ? 'bg-indigo-600/[0.03]' : 'bg-indigo-400/[0.08]'}`} />
      </div>

      {/* 2. FIXED SIDEBAR NAVIGATION */}
      <aside className={`fixed inset-y-0 left-0 z-50 hidden lg:block w-72 border-r backdrop-blur-xl transition-all ${isDark ? 'border-white/5 bg-[#020617]/50' : 'border-slate-200 bg-white/70'}`}>
        <Sidebar theme={isDark ? 'dark' : 'light'} />
      </aside>

      {/* 3. MAIN WORKSPACE */}
      <div className="flex-1 lg:ml-72 flex flex-col min-h-screen relative z-10 pt-20 md:pt-20">
        
        <main className="flex-1 p-8 space-y-10 max-w-7xl mx-auto w-full">
          
          {/* WELCOME SECTION */}
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-blue-500 mb-2"
              >
                <Activity size={14} />
                <span className="text-[10px] font-bold uppercase tracking-[.3em]">System Live</span>
              </motion.div>
              <h1 className={`text-4xl font-bold tracking-tight transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Executive <span className={`${isDark ? 'text-slate-500' : 'text-slate-400'} font-light`}>Overview</span>
              </h1>
            </div>
            
            <div className="flex gap-3">
              <button className={`px-5 py-2.5 border rounded-xl text-xs font-bold transition-all ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 shadow-sm'}`}>Download CSV</button>
              <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-600/20 active:scale-95 transition-all">Generate Report</button>
            </div>
          </section>

          {/* MAIN DATA GRID */}
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <StatsCards theme={isDark ? 'dark' : 'light'} />
            </motion.div>

            <div className="grid grid-cols-1 gap-8">
              {/* CHART CONTAINER */}
              <motion.div 
                className={`border rounded-[32px] p-8 backdrop-blur-sm shadow-2xl transition-all ${isDark ? 'bg-white/[0.02] border-white/5 shadow-black/20' : 'bg-white border-slate-200 shadow-slate-200/50'}`}
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className={`text-sm font-bold tracking-widest uppercase flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    <LayoutDashboard size={16} className="text-blue-500" /> Revenue Forecast
                  </h3>
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />
                  </div>
                </div>
                <SalesChart theme={isDark ? 'dark' : 'light'} />
              </motion.div>

              {/* TABLE CONTAINER */}
              <motion.div 
                className={`border rounded-[32px] p-2 overflow-hidden transition-all ${isDark ? 'bg-white/[0.01] border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}
              >
                {/* FIX 2: Removed broken Table tag here */}
                <UsersTable theme={isDark ? 'dark' : 'light'} />
              </motion.div>
            </div>
          </div>
        </main>

        <footer className={`p-8 text-center border-t transition-colors ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Protocol Nexus &copy; 2026 • Secure Infrastructure
          </p>
        </footer>
      </div>
    </div>
  );
}