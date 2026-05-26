"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, LayoutPanelTop } from "lucide-react";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative bg-[#030712] min-h-screen selection:bg-blue-500/30">
      
      {/* 🚀 PREMIUM STICKY NAVBAR */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 px-6 py-4 ${
          scrolled 
            ? "bg-[#030712]/70 backdrop-blur-xl border-b border-white/5 py-3" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <LayoutPanelTop size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tighter">Iqra.dev</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Menu size={24} />
            </button>
            
            <button
              onClick={() => setModalOpen(true)}
              className="hidden md:block relative group overflow-hidden rounded-full bg-white px-6 py-2 text-sm font-bold text-black transition-all hover:bg-blue-500 hover:text-white"
            >
              <span className="relative z-10">Get Started</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 🏠 MAIN CONTENT AREA */}
      <div className="pt-20 md:pt-0">
        <Hero />
        
        <section className="relative z-10 -mt-20">
          <Features />
        </section>

        <section className="py-24 bg-gradient-to-b from-[#030712] via-[#0b0f1a] to-[#030712]">
          <Testimonials />
        </section>

        {/* 📑 FAQ / ACCORDION SECTION */}
        <section className="py-24 px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Common Questions</h2>
            <p className="text-gray-500">Everything you need to know about our workflow.</p>
          </div>
          <div className="space-y-4">
            <Accordion />
            {/* You can duplicate the Accordion component here for more questions */}
          </div>
        </section>

        <Footer />
      </div>

      {/* 🪟 UI OVERLAYS */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      {/* 🌌 GLOBAL BACKGROUND GLOWS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

    </main>
  );
}
