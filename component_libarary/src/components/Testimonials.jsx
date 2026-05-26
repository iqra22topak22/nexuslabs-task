"use client";

import React from "react";

export default function Testimonials() {
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

  return (
    <section className="relative overflow-hidden bg-[#030712] py-24">
      {/* Decorative Background Elements */}
      <div className="absolute left-1/2 top-0 h-[300px] w-full -translate-x-1/2 bg-blue-600/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-4">
            Wall of Love
          </h2>
          <h3 className="text-4xl font-bold text-white sm:text-5xl">
            Trusted by the best in the industry.
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-white/5 p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
            >
              {/* Quote Icon */}
              <div className="mb-6 text-4xl text-blue-500/30 font-serif group-hover:text-blue-500/60 transition-colors">
                “
              </div>

              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                {t.msg}
              </p>

              <div className="flex items-center gap-4">
                {/* Custom Avatar Gradient */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr ${t.color} text-sm font-bold text-white shadow-lg`}>
                  {t.initials}
                </div>
                
                <div className="text-left">
                  <h4 className="font-bold text-white tracking-wide">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Optional: Secondary CTA for trust */}
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            Join <span className="text-white font-semibold">500+</span> teams scaling their dreams.
          </p>
        </div>
      </div>
    </section>
  );
}