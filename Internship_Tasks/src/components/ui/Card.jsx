"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Card({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#0b0f1a]/40 p-8 backdrop-blur-xl transition-all duration-500 hover:bg-[#0b0f1a]/60 hover:border-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      {/* 🌌 Ambient Decorative Background Glow */}
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-600/10 blur-[50px] transition-colors duration-500 group-hover:bg-blue-600/20" />

      {/* Header with Icon & Action */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-blue-500 transition-transform duration-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
          {icon || <ArrowUpRight size={24} />}
        </div>
        
        {/* Subtle "New" or Status Badge */}
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 group-hover:text-blue-400 transition-colors">
          Featured
        </span>
      </div>

      {/* Content Hierarchy */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-blue-50 transition-colors">
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-gray-500 group-hover:text-gray-400 transition-colors">
          {description}
        </p>
      </div>

      {/* Interactive Bottom Detail */}
      <div className="mt-8 flex items-center gap-2 overflow-hidden">
        <div className="h-[2px] w-8 bg-blue-600 transition-all duration-500 group-hover:w-full group-hover:opacity-20" />
        <span className="whitespace-nowrap text-xs font-bold text-blue-500 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
          Learn More
        </span>
      </div>

      {/* Internal Glass Highlight (Bottom Edge) */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}