"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Trash2, Zap, Cpu, Clock, LayoutGrid } from "lucide-react";

export default function RealtimeUI() {
  const [notifications, setNotifications] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEntry = {
        id: Date.now(),
        message: `Protocol Sync ${count}: Operational data packet received.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        priority: count % 5 === 0 ? "Critical" : "Standard"
      };

      setNotifications((prev) => [newEntry, ...prev].slice(0, 6));
      setCount((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [count]);

  const clearNotifications = () => {
    setNotifications([]);
    setCount(1);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 p-6 md:p-16 relative flex justify-center overflow-hidden">
      
      {/* 🌌 Background "Aura" */}
      <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-2xl relative z-10">
        
        {/* Navigation / Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/5 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-500 font-bold text-[10px] uppercase tracking-[0.4em]">
              <Cpu size={14} className="animate-pulse" />
              <span>Neural Link Active</span>
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic">
              Live <span className="text-blue-600">Feed</span>
            </h1>
          </div>

          <button 
            onClick={clearNotifications}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-rose-500/5 border border-rose-500/10 text-rose-500 hover:bg-rose-500/20 hover:border-rose-500/40 transition-all duration-300 active:scale-95 group"
          >
            <Trash2 size={16} className="group-hover:rotate-12 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Purge All</span>
          </button>
        </header>

        {/* Notifications Feed */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {notifications.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center py-28 rounded-[40px] border border-dashed border-white/10 bg-white/[0.01]"
              >
                <div className="p-5 rounded-full bg-white/5 text-slate-700 mb-4">
                  <LayoutGrid size={40} strokeWidth={1} />
                </div>
                <p className="text-sm font-medium tracking-widest text-slate-500 uppercase">System Idle. Awaiting Signal...</p>
              </motion.div>
            ) : (
              notifications.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 30, transition: { duration: 0.2 } }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/5 bg-[#0b0f1a]/50 p-6 backdrop-blur-2xl hover:bg-[#0b0f1a]/80 hover:border-blue-500/20 transition-all"
                >
                  <div className="flex items-start gap-5">
                    {/* Icon Housing */}
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                      item.priority === 'Critical' ? 'bg-rose-500/10 text-rose-500' : 'bg-blue-600/10 text-blue-500'
                    }`}>
                      {item.priority === 'Critical' ? <Zap size={22} /> : <Bell size={22} />}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${
                           item.priority === 'Critical' ? 'text-rose-500/80' : 'text-blue-500/80'
                        }`}>
                          {item.priority} Status
                        </span>
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <Clock size={10} />
                          <span className="text-[10px] font-mono">{item.timestamp}</span>
                        </div>
                      </div>
                      <p className="text-sm font-bold text-slate-200 leading-relaxed truncate">
                        {item.message}
                      </p>
                    </div>
                  </div>

                  {/* High-end decorative accent */}
                  <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Hardware Meta Footer */}
        <footer className="mt-12 flex items-center justify-between px-4 text-slate-700">
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em]">
               <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
               Signal Online
             </div>
             <div className="text-[9px] font-black uppercase tracking-[0.3em]">
               Refresh: 3s
             </div>
          </div>
          <span className="text-[9px] font-mono tracking-tighter opacity-50">NODE_X_v2.0</span>
        </footer>
      </div>
    </div>
  );
}