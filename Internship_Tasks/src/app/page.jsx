"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ArrowRight, Activity, Cpu } from "lucide-react";

import { useTheme } from "@/components/ThemeProvider";

// Section Components
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

// UI Components
import Modal from "@/components/Modal";
import Sidebar from "@/components/Sidebar";
import Accordion from "@/components/Accordion";

export default function Home() {
  const { theme } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen selection:bg-blue-500/40 font-sans antialiased transition-colors duration-1000 original-style ${
        isDark ? "bg-[#030712] text-slate-400" : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* ATMOSPHERIC BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Abstract Grid Grid */}
        <div 
          className={`absolute inset-0 opacity-[0.015] ${isDark ? "invert-0" : "invert"}`} 
          style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '24px 24px' }}
        />
        {/* Glow Effects */}
        <div
          className={`absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] rounded-full blur-[160px] transition-all duration-1000 ${
            isDark ? "bg-blue-600/10 opacity-60" : "bg-blue-400/20 opacity-40"
          }`}
        />
        <div
          className={`absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[140px] transition-all duration-1000 ${
            isDark ? "bg-indigo-600/10 opacity-50" : "bg-indigo-400/15 opacity-30"
          }`}
        />
      </div>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <Hero />

        {/* INTERACTIVE HUB */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`p-[1px] rounded-[32px] transition-all duration-500 relative group overflow-hidden ${
              isDark
                ? "bg-gradient-to-b from-white/10 to-white/[0.02] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]"
                : "bg-gradient-to-b from-slate-200 to-slate-300/50 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.08)]"
            }`}
          >
            {/* Inner background skin */}
            <div
              className={`rounded-[31px] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 backdrop-blur-xl ${
                isDark ? "bg-slate-950/80" : "bg-white"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left w-full lg:w-auto">
                <div
                  className={`p-5 rounded-2xl transition-all duration-500 ${
                    isDark
                      ? "bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                      : "bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                  }`}
                >
                  <ShieldCheck size={40} className="animate-pulse" />
                </div>
                <div className="space-y-1.5">
                  <h3
                    className={`font-black uppercase italic tracking-tighter text-3xl sm:text-4xl transition-colors ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Neural <span className="text-blue-500 not-italic font-medium">Integrity</span>
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <p
                      className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-all ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Encryption Level: <span className="text-emerald-500 font-black">Military Grade</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons Container */}
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setModalOpen(true)}
                  className={`px-8 py-4.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all border ${
                    isDark
                      ? "bg-white/[0.03] border-white/10 hover:bg-white/[0.08] text-white shadow-xl"
                      : "bg-slate-100 border-slate-200/80 hover:bg-slate-200 text-slate-800 shadow-sm"
                  }`}
                >
                  Configure Nodes
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSidebarOpen(true)}
                  className={`px-8 py-4.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 group/btn text-white ${
                    isDark
                      ? "bg-blue-600 hover:bg-blue-500 shadow-blue-950/50"
                      : "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
                  }`}
                >
                  <span>Launch Simulator</span>
                  <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MAIN CAPABILITIES */}
        <Features />

        {/* EXPERIENCE FEEDBACK */}
        <Testimonials />

        {/* DOCUMENTATION SNIPPET */}
        <section className="py-32 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <header className="text-center mb-16 space-y-4">
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] backdrop-blur-md ${
                  isDark
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    : "bg-blue-50 text-blue-600 border border-blue-100"
                }`}
              >
                Deep Intel
              </span>
              <h2
                className={`text-4xl sm:text-6xl font-black tracking-tighter italic uppercase transition-colors ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Protocol <span className="text-blue-500 not-italic font-light">Briefing</span>
              </h2>
            </header>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`p-2 rounded-[32px] border backdrop-blur-3xl transition-all ${
                isDark
                  ? "bg-slate-950/40 border-white/[0.05] shadow-2xl"
                  : "bg-white/80 border-slate-200/60 shadow-xl"
              }`}
            >
              <Accordion />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* OVERLAY SYSTEM */}
      <AnimatePresence>
        {modalOpen && <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </div>
  );
}