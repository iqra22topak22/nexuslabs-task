"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Monitor, Layout } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Features() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const features = [
    {
      title: "Quantum Edge",
      desc: "Distributed reasoning across edge nodes with sub-100ms synchronization.",
      icon: Zap,
      styles: {
        darkBg: "group-hover:bg-blue-500/10",
        lightBg: "bg-blue-50/50 border-blue-100 text-blue-600",
        darkText: "text-blue-500",
        accent: "bg-blue-600"
      }
    },
    {
      title: "Neural Vision",
      desc: "Adaptive UI systems that evolve based on user behavioral heuristics.",
      icon: Monitor,
      styles: {
        darkBg: "group-hover:bg-purple-500/10",
        lightBg: "bg-purple-50/50 border-purple-100 text-purple-600",
        darkText: "text-purple-400",
        accent: "bg-purple-600"
      }
    },
    {
      title: "Mesh Logic",
      desc: "Redundant system architecture ensuring 99.99% uptime for critical tasks.",
      icon: Layout,
      styles: {
        darkBg: "group-hover:bg-emerald-500/10",
        lightBg: "bg-emerald-50/50 border-emerald-100 text-emerald-600",
        darkText: "text-emerald-400",
        accent: "bg-emerald-600"
      }
    },
  ];

  return (
    <section id="features" className={`relative py-24 sm:py-32 overflow-hidden transition-colors duration-700 ${
      isDark ? "bg-slate-950" : "bg-slate-50"
    }`}>
      {/* Background Atmosphere Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl blur-[130px] pointer-events-none select-none transition-opacity duration-1000 ${
        isDark ? "bg-blue-600/5 opacity-60" : "bg-blue-400/10 opacity-40"
      }`} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold tracking-[0.4em] text-blue-500 uppercase"
          >
            System Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] italic uppercase transition-colors ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Engineered for <br /><span className="text-blue-600 not-italic font-light">Dominance.</span>
          </motion.h3>
        </div>

        {/* Feature Grid Layer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => {
            const IconComponent = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-[2rem] border p-8 sm:p-10 transition-all duration-500 ${
                  isDark
                    ? "border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-slate-900/40 shadow-2xl shadow-black/40"
                    : "border-slate-200/80 bg-white hover:border-slate-300 shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
                }`}
              >
                {/* Feature Icon Container */}
                <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 ${
                  isDark
                    ? `bg-slate-900 border-white/10 ${f.styles.darkText} ${f.styles.darkBg}`
                    : f.styles.lightBg
                }`}>
                  <IconComponent size={20} strokeWidth={2} />
                </div>

                {/* Typography Block */}
                <h4 className={`text-xl font-black italic uppercase tracking-tight mb-3 transition-colors ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  {f.title}
                </h4>

                <p className={`leading-relaxed text-xs sm:text-sm font-medium transition-colors duration-300 ${
                  isDark ? "text-slate-500 group-hover:text-slate-400" : "text-slate-500 group-hover:text-slate-700"
                }`}>
                  {f.desc}
                </p>

                {/* Premium Interactive Accent Line */}
                <div className={`absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-500 ease-out group-hover:w-full ${f.styles.accent}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}