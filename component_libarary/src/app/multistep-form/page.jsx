"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepOne from "@/components/forms/StepOne";
import StepTwo from "@/components/forms/StepTwo";
import StepThree from "@/components/forms/StepThree";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  // Load saved data on mount
  useEffect(() => {
    const saved = localStorage.getItem("formData");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // Sync data to localStorage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Progress percentage calculation
  const progress = (step / 3) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030712] p-4 relative overflow-hidden">
      
      {/* 🌌 Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-[480px] z-10">
        
        {/* ✨ Progress Indicator */}
        <div className="mb-8 px-2">
          <div className="flex justify-between items-end mb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Step 0{step}</span>
              <h1 className="text-white font-bold text-lg">
                {step === 1 && "Start Onboarding"}
                {step === 2 && "Contact Details"}
                {step === 3 && "Review & Submit"}
              </h1>
            </div>
            <span className="text-xs font-medium text-gray-500">{Math.round(progress)}% Complete</span>
          </div>
          
          {/* Progress Bar Track */}
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-400 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            />
          </div>
        </div>

        {/* 🪄 Form Glass Card */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0f1a]/60 backdrop-blur-2xl shadow-2xl p-8 md:p-10">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: "circOut" }}
            >
              {step === 1 && (
                <StepOne
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                />
              )}

              {step === 2 && (
                <StepTwo
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}

              {step === 3 && (
                <StepThree
                  formData={formData}
                  prevStep={prevStep}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <div className="w-16 h-16 border-t-2 border-r-2 border-white rounded-tr-2xl" />
          </div>
        </div>

        {/* Footer Help Text */}
        <p className="mt-6 text-center text-xs text-gray-600 font-medium">
          Need help? <span className="text-blue-500 cursor-pointer hover:underline">Contact Support</span>
        </p>
      </div>
    </div>
  );
}