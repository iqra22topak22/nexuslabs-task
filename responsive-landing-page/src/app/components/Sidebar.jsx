"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Settings, X, ChevronRight } from "lucide-react";

export default function Sidebar({ open, setOpen }) {
  const menuItems = [
    { name: "Home", icon: <Home size={20} /> },
    { name: "About", icon: <User size={20} /> },
    { name: "Services", icon: <Briefcase size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* High-End Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] bg-[#030712]/60 backdrop-blur-sm"
          />

          {/* Premium Sidebar Container */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 z-[110] h-full w-72 border-r border-white/10 bg-[#0b0f1a]/90 p-6 shadow-2xl backdrop-blur-xl"
          >
            {/* Header Area */}
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
                  I
                </div>
                <h2 className="text-xl font-bold tracking-tight text-white">Iqra.dev</h2>
              </div>
              <button 
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation List */}
            <nav className="space-y-2">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative flex items-center justify-between rounded-xl p-3 text-gray-400 transition-all hover:bg-white/5 hover:text-white cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 group-hover:text-blue-500 transition-colors">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <ChevronRight size={16} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  
                  {/* Active Indicator Hover Effect */}
                  <div className="absolute left-0 h-6 w-1 rounded-r-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </nav>

            {/* Bottom Profile/Status Area */}
            <div className="absolute bottom-8 left-6 right-6">
              <div className="rounded-2xl bg-white/5 p-4 border border-white/5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                <div>
                  <p className="text-sm font-bold text-white">Iqra Mushtaq</p>
                  <p className="text-xs text-gray-500 font-medium tracking-tight">AI Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}