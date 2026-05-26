"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Trash2, Zap, Cpu, Radio } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function RealtimeUI() {
  const [notifications, setNotifications] = useState([]);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // FIXED: Removed the local interval tracking bug by isolating the loop lifecycle safely from continuous state updates
  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setNotifications((prev) => {
        // Compute internal counts internally without forcing a hook re-mount cycle
        const currentCount = prev.length > 0 ? prev[0].payloadIndex + 1 : 1;
        
        const newEntry = {
          id: Date.now(),
          payloadIndex: currentCount,
          message: `Protocol Sync ${currentCount}: Operational data packet received.`,
          timestamp,
          priority: currentCount % 5 === 0 ? "Critical" : "Standard",
        };
        
        return [newEntry, ...prev].slice(0, 6);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center transition-colors duration-500 selection:bg-blue-500/30 overflow-x-hidden relative ${
      isDark ? "bg-slate-950 text-slate-300" : "bg-slate-50 text-slate-600"
    }`}>
      
      {/* 1. ATMOSPHERIC ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[150px] transition-opacity duration-1000 ${
          isDark ? "bg-blue-600/[0.03]" : "bg-blue-400/[0.06]"
        }`} />
        <div className={`absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full blur-[130px] transition-opacity duration-1000 ${
          isDark ? "bg-indigo-600/[0.03]" : "bg-indigo-400/[0.06]"
        }`} />
      </div>

      {/* 2. MAIN MONITORING HUB */}
      <main className="w-full max-w-2xl relative z-10 pt-24 pb-20 px-4 sm:px-6">
        
        <header className="flex items-end justify-between mb-12 px-2">
          <div className="space-y-2">
            <motion.div 
              initial={{ opacity: 0, x: -8 }} 
              animate={{ opacity: 1, x: 0 }}
              className={`flex items-center gap-2 font-black text-[9px] uppercase tracking-[0.3em] ${
                isDark ? "text-blue-500" : "text-blue-600"
              }`}
            >
              <Radio size={13} strokeWidth={3} className="animate-pulse" />
              <span>Frequency 142.8 MHz</span>
            </motion.div>
            
            <h1 className={`text-4xl sm:text-5xl font-black tracking-tighter uppercase leading-none transition-colors ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Live <span className={`${isDark ? "text-slate-700" : "text-slate-300"} font-light italic not-uppercase`}>Stream</span>
            </h1>
          </div>

          <button 
            onClick={clearNotifications}
            className={`group flex items-center gap-1.5 px-4 py-2 border rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 active:scale-95 ${
              isDark 
                ? "bg-white/5 border-white/5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/20" 
                : "bg-white border-slate-200 text-slate-500 hover:text-rose-600 hover:bg-rose-50 hover:border-rose-200 shadow-sm"
            }`}
          >
            <Trash2 size={13} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" />
            <span>Purge</span>
          </button>
        </header>

        {/* 3. NOTIFICATION LIST WIREFRAME */}
        <div className="space-y-4 relative min-h-[350px]">
          <div className={`absolute left-6 top-0 bottom-0 w-[1px] transition-colors ${
            isDark 
              ? "bg-gradient-to-b from-blue-500/20 via-white/5 to-transparent" 
              : "bg-gradient-to-b from-blue-500/30 via-slate-200 to-transparent"
          }`} />

          <AnimatePresence mode="popLayout">
            {notifications.length === 0 ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className={`py-24 flex flex-col items-center justify-center rounded-[2.5rem] border backdrop-blur-sm transition-all ${
                  isDark ? "border-white/5 bg-slate-900/10" : "border-slate-200 bg-white/50"
                }`}
              >
                <div className={`p-5 rounded-2xl border mb-4 shadow-inner transition-colors ${
                  isDark ? "bg-slate-900 border-white/5 text-slate-700" : "bg-slate-50 border-slate-100 text-slate-300"
                }`}>
                  <Cpu size={36} strokeWidth={1.5} />
                </div>
                <p className={`text-[10px] font-black tracking-[0.3em] uppercase transition-colors ${
                  isDark ? "text-slate-600" : "text-slate-400"
                }`}>
                  Synchronizing Core Link...
                </p>
              </motion.div>
            ) : (
              notifications.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  className="group relative ml-4 pl-10"
                >
                  {/* Timeline Node point indicator */}
                  <div className={`absolute left-[7px] top-[26px] w-2.5 h-2.5 rounded-full border-2 z-20 transition-all ${
                    isDark ? "border-slate-950" : "border-slate-50"
                  } ${item.priority === "Critical" ? "bg-rose-500 shadow-[0_0_8px_#f43f5e]" : "bg-blue-500"}`} />

                  <div className={`relative overflow-hidden rounded-3xl border p-5 backdrop-blur-xl transition-all duration-300 ${
                    isDark 
                      ? "bg-slate-900/30 border-white/5 hover:border-white/10 shadow-xl shadow-black/10" 
                      : "bg-white border-slate-200/80 hover:border-blue-200 shadow-lg shadow-slate-200/30"
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        item.priority === "Critical" 
                          ? (isDark ? "bg-rose-500/10 text-rose-400" : "bg-rose-50 text-rose-600") 
                          : (isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600")
                      }`}>
                        {item.priority === "Critical" ? <Zap size={16} strokeWidth={2.5} /> : <Bell size={16} strokeWidth={2.5} />}
                      </div>
                      
                      <div className="flex-1 space-y-0.5">
                        <div className="flex justify-between items-center">
                          <span className={`text-[9px] font-black uppercase tracking-wider ${
                            item.priority === "Critical" ? "text-rose-500" : "text-blue-500"
                          }`}>
                            {item.priority} Packet
                          </span>
                          <span className={`text-[10px] font-mono font-medium ${
                            isDark ? "text-slate-600" : "text-slate-400"
                          }`}>
                            {item.timestamp}
                          </span>
                        </div>
                        <p className={`text-sm font-bold tracking-tight transition-colors ${
                          isDark ? "text-slate-200 group-hover:text-white" : "text-slate-700 group-hover:text-slate-950"
                        }`}>
                          {item.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* 4. DIAGNOSTIC DIAGRAM INFO FOOTER */}
        <footer className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-dashed pt-6 transition-colors border-slate-200 dark:border-white/5 px-2">
          <div className="flex gap-8 self-start sm:self-auto">
            <DiagnosticItem label="Uptime" value="99.98%" isDark={isDark} />
            <DiagnosticItem label="Latency" value="12ms" isDark={isDark} />
            <DiagnosticItem label="Load" value="0.02" isDark={isDark} />
          </div>
          
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full border self-start sm:self-auto transition-colors ${
            isDark ? "bg-emerald-500/5 border-emerald-500/10" : "bg-emerald-50 border-emerald-200/60"
          }`}>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className={`text-[9px] font-black uppercase tracking-widest ${
              isDark ? "text-emerald-400/90" : "text-emerald-600"
            }`}>
              Master Node
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Global scope export representation for isolated rendering structures
function DiagnosticItem({ label, value, isDark }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className={`text-[8px] font-black uppercase tracking-widest ${
        isDark ? "text-slate-600" : "text-slate-400"
      }`}>
        {label}
      </span>
      <span className={`text-[11px] font-mono font-bold ${
        isDark ? "text-slate-400" : "text-slate-600"
      }`}>
        {value}
      </span>
    </div>
  );
}