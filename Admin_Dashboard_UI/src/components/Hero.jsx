"use client";

import React from "react";

export default function Hero() {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#030712] selection:bg-blue-500/30">
      {/* Premium Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 px-6 flex flex-col items-center">
        {/* Modern Badge */}
        <div className="mb-8 flex animate-fade-in items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md transition-all hover:bg-white/10">
          <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
          <span className="text-sm font-medium text-blue-200/80 tracking-wide uppercase">
            New Version 4.0 is live
          </span>
        </div>

        {/* High-Impact Headline */}
        <h1 className="max-w-4xl bg-gradient-to-b from-white to-white/50 bg-clip-text text-center text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl lg:text-8xl">
          Build Your Future <br className="hidden sm:block" /> 
          <span className="text-blue-500">at Warp Speed.</span>
        </h1>

        {/* Elegant Subtext */}
        <p className="mt-8 max-w-2xl text-center text-lg leading-relaxed text-gray-400 sm:text-xl">
          The ultimate platform to learn, build, and scale your ideas. Join 10k+ 
          innovators crafting the next generation of digital products.
        </p>

        {/* Premium CTA Group */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={scrollToFeatures}
            className="group relative flex h-14 items-center justify-center overflow-hidden rounded-xl bg-blue-600 px-10 font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_40px_8px_rgba(37,99,235,0.3)] active:scale-95"
          >
            Get Started
            <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <button className="h-14 px-10 font-semibold text-gray-300 transition-colors hover:text-white">
            View Case Studies
          </button>
        </div>

        {/* Subtle Social Proof */}
        <div className="mt-20 flex flex-col items-center gap-6 opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center gap-8 text-2xl font-bold text-white sm:gap-12">
            <span>Stripe</span>
            <span>Linear</span>
            <span>Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
}