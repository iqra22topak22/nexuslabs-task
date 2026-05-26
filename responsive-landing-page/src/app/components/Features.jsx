"use client";

import React from "react";
// Tip: Install lucide-react for these icons: npm install lucide-react
import { Zap, Monitor, Layout } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Lightning Fast",
      desc: "Optimized for speed with Edge-runtime delivery and sub-100ms latency.",
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      color: "from-blue-500/20",
    },
    {
      title: "Fully Responsive",
      desc: "Pixel-perfect layouts that adapt seamlessly from mobile to ultra-wide displays.",
      icon: <Monitor className="w-6 h-6 text-purple-500" />,
      color: "from-purple-500/20",
    },
    {
      title: "Effortless Setup",
      desc: "Get up and running in minutes with our intuitive CLI and documentation.",
      icon: <Layout className="w-6 h-6 text-emerald-500" />,
      color: "from-emerald-500/20",
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-[#030712]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-4">
            Capabilities
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Built for Modern Developers
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-8 transition-all hover:border-white/10 hover:bg-white/[0.07]"
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${f.color} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3">
                  {f.title}
                </h4>
                
                <p className="text-gray-400 leading-relaxed text-sm">
                  {f.desc}
                </p>
              </div>

              {/* Decorative "Spotlight" light follows the corner */}
              <div className="absolute -right-4 -bottom-4 h-24 w-24 bg-white/5 blur-2xl group-hover:bg-white/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}