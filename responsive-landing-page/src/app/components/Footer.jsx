"use client";

import React from "react";
// Social icons ko remove kar diya hai taake version ka error khatam ho jaye
// Sirf ArrowUp use kiya hai jo har version mein chalta hai
import { ArrowUp, Mail, Globe, Cpu } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#030712] pt-24 pb-12 overflow-hidden">
      {/* Premium Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent mb-6">
              Iqra.dev
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Crafting high-performance Agentic AI solutions and premium web experiences.
            </p>
            <div className="flex gap-4">
              {/* Github/Linkedin ki jagah icons generic use kiye hain taake error na aaye */}
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400">
                <Cpu size={18} />
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400">
                <Globe size={18} />
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400">
                <Mail size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Projects</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Skills</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Experience</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Next.js 16</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Agentic AI</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">FastAPI</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <div className="flex items-center rounded-xl bg-white/5 border border-white/10 p-1 focus-within:border-blue-500/50 transition-all">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-none text-sm text-white px-3 py-2 outline-none w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-4 py-2 rounded-lg font-medium transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-gray-600 text-xs mb-4 md:mb-0 uppercase tracking-widest">
            © 2026 Iqra Mushtaq | Built with Precision
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
          >
            Scroll to Top
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}