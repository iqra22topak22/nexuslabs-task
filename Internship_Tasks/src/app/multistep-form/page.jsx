"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import StepOne from "@/components/forms/StepOne";
import StepTwo from "@/components/forms/StepTwo";
import StepThree from "@/components/forms/StepThree";
import { useTheme } from "@/components/ThemeProvider";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Hydrate form data safely from localStorage after mount
  useEffect(() => {
    const saved = localStorage.getItem("formData");
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed parsing localStorage form payload", e);
      }
    }
  }, []);

  // Sync state mutation logs directly into storage nodes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const progress = (step / 3) * 100;

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 selection:bg-blue-500/30 overflow-hidden relative ${
      isDark ? "bg-slate-950 text-slate-300" : "bg-slate-50 text-slate-600"
    }`}>
      
      {/* 1. AMBIENT ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full blur-[150px] transition-opacity duration-1000 ${
          isDark ? "bg-blue-600/[0.03]" : "bg-blue-400/[0.06]"
        }`} />
        <div className={`absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full blur-[130px] transition-opacity duration-1000 ${
          isDark ? "bg-indigo-600/[0.03]" : "bg-indigo-400/[0.06]"
        }`} />
      </div>

      {/* 2. MAIN FORM INTERFACE */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 relative z-10 my-auto">
        <div className="w-full max-w-[500px]">
          
          {/* Progress Header */}
          <header className="mb-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-[0.25em] mb-3 transition-all ${
                isDark 
                  ? "bg-blue-500/10 border-blue-500/20 text-blue-400" 
                  : "bg-blue-50 border-blue-200 text-blue-600"
              }`}
            >
              <span className={`w-1 h-1 rounded-full animate-pulse ${
                isDark ? "bg-blue-400" : "bg-blue-600"
              }`} />
              Phase {step} / 3
            </motion.div>
            
            <h2 className={`text-2xl sm:text-3xl font-black tracking-tight uppercase italic transition-colors ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              {step === 1 && "Create Identity"}
              {step === 2 && "Setup Security"}
              {step === 3 && "Final Validation"}
            </h2>
          </header>

          {/* Form Glass Card */}
          <div className="relative group">
            {/* Outer Decorative Ambient Glow */}
            <div className={`absolute -inset-1 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000 pointer-events-none ${
              isDark 
                ? "bg-gradient-to-r from-blue-600/10 to-indigo-600/10" 
                : "bg-gradient-to-r from-blue-400/5 to-indigo-400/5"
            }`} />
            
            <div className={`relative border rounded-[2.5rem] transition-all duration-500 backdrop-blur-2xl overflow-hidden ${
              isDark 
                ? "bg-slate-900/40 border-white/5 shadow-2xl shadow-black/40" 
                : "bg-white border-slate-200/80 shadow-xl shadow-slate-200/50"
            }`}>
              
              {/* Internal Progress Fill Line */}
              <div className={`absolute top-0 left-0 w-full h-[3px] transition-colors ${
                isDark ? "bg-white/5" : "bg-slate-100"
              }`}>
                <motion.div 
                  className="h-full bg-blue-600 rounded-r-full shadow-[0_0_12px_rgba(37,99,235,0.5)]"
                  animate={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                />
              </div>

              {/* Step Content Mount Area */}
              <div className="p-8 sm:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 16, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -16, filter: "blur(4px)" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {step === 1 && (
                      <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />
                    )}
                    {step === 2 && (
                      <StepTwo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
                    )}
                    {step === 3 && (
                      <StepThree formData={formData} prevStep={prevStep} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Contextual System Footer */}
          <div className="mt-6 flex justify-between items-center px-2">
            <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase tracking-wide">
              <HelpCircle size={13} strokeWidth={2.5} className="text-blue-500" />
              <span>Verified via Protocol Nexus</span>
            </div>
            <span className="text-[9px] font-mono font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
              v1.0.4
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavLink({ href, icon: Icon, label, active = false, isDark, onClick }) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider w-full md:w-auto transition-all duration-300 ${
        active 
          ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" 
          : isDark 
            ? "text-slate-400 hover:text-white hover:bg-white/5"
            : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
      }`}
    >
      <Icon size={14} strokeWidth={2.5} />
      <span>{label}</span>
    </Link>
  );
}