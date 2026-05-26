"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Send, User, Mail, ShieldCheck } from "lucide-react";

export default function StepThree({ formData, prevStep }) {
  
  const handleSubmit = () => {
    // Premium Success Interaction
    console.log("Submitting:", formData);
    localStorage.removeItem("formData");
    // Ideally, you'd trigger a success state/confetti here
    alert("✨ Application Submitted Successfully!");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full"
    >
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 mb-4">
          <ShieldCheck size={28} />
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Final Review</h2>
        <p className="text-gray-500 text-sm mt-1">Double check your details before we finalize.</p>
      </div>

      {/* Review Card */}
      <motion.div 
        variants={itemVariants}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 mb-8 shadow-2xl"
      >
        <div className="space-y-6">
          {/* Data Row: Name */}
          <div className="flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-blue-400 transition-colors">
                <User size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Full Name</p>
                <p className="text-lg font-medium text-white">{formData.name || "Not provided"}</p>
              </div>
            </div>
            <CheckCircle2 size={16} className="text-emerald-500/50" />
          </div>

          <div className="h-[1px] w-full bg-gradient-to-r from-white/5 via-white/10 to-white/5" />

          {/* Data Row: Email */}
          <div className="flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-blue-400 transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</p>
                <p className="text-lg font-medium text-white">{formData.email || "Not provided"}</p>
              </div>
            </div>
            <CheckCircle2 size={16} className="text-emerald-500/50" />
          </div>
        </div>

        {/* Decorative corner glow */}
        <div className="absolute -right-12 -bottom-12 h-24 w-24 bg-blue-500/10 blur-2xl" />
      </motion.div>

      {/* Footer Actions */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={prevStep}
          className="order-2 sm:order-1 flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-white/5 px-6 py-4 font-semibold text-gray-400 transition-all hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>

        <button
          onClick={handleSubmit}
          className="order-1 sm:order-2 group relative w-full flex-1 overflow-hidden rounded-2xl bg-blue-600 py-4 font-bold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-[0.98]"
        >
          <div className="relative z-10 flex items-center justify-center gap-2">
            Confirm & Submit
            <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </button>
      </motion.div>

      {/* Trust Badge */}
      <p className="mt-8 text-center text-[10px] text-gray-600 font-medium uppercase tracking-[0.2em]">
        🔒 Secure End-to-End Encryption
      </p>
    </motion.div>
  );
}