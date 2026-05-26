"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import {
  Sparkles,
  Rocket,
  ShieldCheck,
  Code2,
  Cpu,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const techStack = [
    { name: "Next.js 14", desc: "High-performance SSR", icon: <Rocket size={20} /> },
    { name: "TypeScript", desc: "Type-safe architecture", icon: <Code2 size={20} /> },
    { name: "Tailwind CSS", desc: "Modern UI system", icon: <Sparkles size={20} /> },
    { name: "Agentic AI", desc: "Smart AI experiences", icon: <Cpu size={20} /> },
  ];

  return (
    <div className={`min-h-screen transition-all duration-700 font-sans ${
      isDark ? 'bg-[#020617] text-white' : 'bg-white text-slate-900'
    }`}>
      
      <section className="relative overflow-hidden px-6 pt-48 pb-32 md:px-10 lg:px-20">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none opacity-50" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none opacity-40" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10 text-center lg:text-left"
            >
              <div className={`inline-flex items-center gap-3 rounded-full border px-6 py-2.5 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-3xl ${
                isDark ? 'border-blue-500/20 bg-blue-500/10 text-blue-400' : 'border-blue-200 bg-blue-50 text-blue-600'
              }`}>
                <ShieldCheck size={16} /> Neural Architecture
              </div>

              <div className="space-y-6">
                <h1 className="text-6xl font-black leading-[0.9] sm:text-7xl xl:text-8xl italic uppercase tracking-tighter">
                  The <span className="text-blue-600 not-italic">Nexus</span> <br /> Blueprint
                </h1>
                <p className={`mx-auto max-w-xl text-lg md:text-xl leading-relaxed font-medium ${
                  isDark ? 'text-slate-500' : 'text-slate-400'
                } lg:mx-0`}>
                  We are engineering a future where intelligence is decentralized, autonomous, and seamlessly integrated into the human experience.
                </p>
              </div>

              <div className="flex flex-col items-center gap-6 sm:flex-row lg:items-start">
                <button className="group relative flex items-center gap-3 rounded-2xl bg-blue-600 px-10 py-5 font-black text-xs uppercase tracking-widest text-white shadow-2xl shadow-blue-600/30 transition-all hover:bg-blue-500 active:scale-95">
                  Explore Ecosystem <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className={`relative overflow-hidden rounded-[3rem] border p-12 backdrop-blur-3xl transition-all ${
                isDark 
                  ? 'border-white/10 bg-[#0a0f29]/80 shadow-[0_30px_60px_rgba(0,0,0,0.5)]' 
                  : 'border-slate-200 bg-white shadow-2xl shadow-slate-200'
              }`}>
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-3xl font-black italic uppercase tracking-tighter">Core Stack</h2>
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <div className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-100'}`} />
                  </div>
                </div>

                <div className="space-y-4">
                  {techStack.map((tech, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 10 }}
                      className={`flex items-center justify-between rounded-2xl border p-6 transition-all ${
                        isDark ? 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05]' : 'border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg'
                      }`}
                    >
                      <div className="flex items-center gap-5">
                        <div className={`p-3 rounded-xl ${isDark ? 'bg-blue-600/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                          {tech.icon}
                        </div>
                        <div>
                          <h3 className="font-black text-sm uppercase tracking-tight">{tech.name}</h3>
                          <p className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                            {tech.desc}
                          </p>
                        </div>
                      </div>
                      <div className={`h-2 w-2 rounded-full ${isDark ? 'bg-white/5' : 'bg-slate-200'}`} />
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Interior Glow */}
                <div className="absolute -bottom-20 -right-20 h-40 w-40 bg-blue-600/10 blur-[60px]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}