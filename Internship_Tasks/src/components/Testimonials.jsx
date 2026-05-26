"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Testimonials() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const testimonials = [
    {
      name: "Ali Raza",
      role: "Software Engineer",
      msg: "The performance is unparalleled. It transformed how our team builds and deploys production-ready interfaces.",
      initials: "AR",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Sara Khan",
      role: "Product Designer",
      msg: "Absolutely loved the design language. The attention to detail in the components is something you rarely see.",
      initials: "SK",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Daniyal Ahmed",
      role: "Tech Lead",
      msg: "Finally, a platform that understands developer experience. Scalable, fast, and incredibly intuitive.",
      initials: "DA",
      color: "from-orange-500 to-red-500",
    },
  ];

  // Animation variants for smooth orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className={`relative overflow-hidden py-32 transition-colors duration-1000 ${
        isDark ? "bg-[#030712]" : "bg-slate-50"
      }`}
    >
      {/* ATMOSPHERIC LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {isDark && (
          <div className="absolute left-1/2 top-10 h-[400px] w-full max-w-7xl -translate-x-1/2 bg-indigo-500/5 blur-[130px]" />
        )}
        <div 
          className={`absolute inset-0 opacity-[0.012] ${isDark ? "invert-0" : "invert"}`} 
          style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '32px 32px' }}
        />
      </div>

      <div className="max-w-7xl relative z-10 mx-auto px-4 sm:px-6">
        {/* HEADER SECTION */}
        <div className="mb-20 text-center space-y-3">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] backdrop-blur-md ${
              isDark
                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                : "bg-blue-50 text-blue-600 border border-blue-100"
            }`}
          >
            Wall of Love
          </span>
          <h3
            className={`text-3xl sm:text-5xl font-black tracking-tighter transition-colors max-w-2xl mx-auto ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Trusted by the best builders in the industry
          </h3>
        </div>

        {/* CARDS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group relative flex flex-col justify-between rounded-[24px] border p-8 transition-all duration-500 backdrop-blur-xl ${
                isDark
                  ? "border-white/[0.04] bg-gradient-to-b from-white/[0.03] to-transparent hover:border-white/15 hover:bg-white/[0.06] shadow-2xl shadow-black/20"
                  : "border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
              }`}
            >
              <div>
                {/* Quote Icon */}
                <div
                  className={`mb-6 p-2.5 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                    isDark
                      ? "bg-white/[0.02] border-white/5 text-blue-400/40 group-hover:text-blue-400 group-hover:border-blue-500/20"
                      : "bg-slate-50 border-slate-100 text-blue-500/30 group-hover:text-blue-600 group-hover:border-blue-100"
                  }`}
                >
                  <Quote size={16} fill="currentColor" className="opacity-80" />
                </div>

                <p
                  className={`mb-8 text-[15px] leading-relaxed transition-colors duration-500 font-medium ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {t.msg}
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-4 border-t pt-6 transition-colors duration-500 border-slate-200/40 dark:border-white/[0.04]">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr ${t.color} text-xs font-black text-white shadow-md`}
                >
                  {t.initials}
                </div>

                <div className="text-left overflow-hidden">
                  <h4
                    className={`font-bold text-sm tracking-wide transition-colors duration-500 truncate ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium truncate">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Edge light gradient line on hover */}
              <div
                className="absolute bottom-0 left-6 right-6 h-[2px] w-0 transition-all duration-700 group-hover:w-[calc(100%-48px)] mx-auto rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* TRUST BANNER FOOTER */}
        <div className="mt-20 text-center">
          <p className="text-xs text-slate-400 tracking-wider font-medium">
            Join <span className={`font-black tracking-normal ${isDark ? "text-white" : "text-slate-900"}`}>500+</span> technology teams scaling operations.
          </p>
        </div>
      </div>
    </section>
  );
}