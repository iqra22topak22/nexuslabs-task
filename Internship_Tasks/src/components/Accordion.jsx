"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Code2, Cpu } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Accordion() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Using an index tracking model to support multiple scalable items smoothly
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is the core architecture?",
      answer: "React is a declarative, component-based user interface engine. It abstracts raw document modifications using a lightweight Virtual DOM parsing layer, executing batched state reconciliations to secure massive performance metrics across dense interactive trees.",
      icon: Code2
    },
    {
      question: "How is Agentic AI integrated?",
      answer: "Our engine pipes live interaction telemetry straight into downstream FastAPI processes. Adaptive components transform UI configurations contextually based on user workflows and runtime behavioral heuristics.",
      icon: Cpu
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 px-4 sm:px-0 my-12">
      {faqData.map((item, idx) => {
        const isOpen = openIndex === idx;
        const IconComponent = item.icon || HelpCircle;

        return (
          <div 
            key={idx}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              isOpen 
                ? isDark
                  ? "border-blue-500/30 bg-slate-900/60 shadow-[0_0_30px_rgba(59,130,246,0.1)]" 
                  : "border-blue-200 bg-white shadow-xl shadow-blue-500/5"
                : isDark
                  ? "border-white/5 bg-white/[0.01] hover:bg-white/[0.03]"
                  : "border-slate-200 bg-white hover:border-slate-300 shadow-sm"
            }`}
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="flex w-full items-center justify-between p-4 sm:p-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-blue-600/20"
            >
              <div className="flex items-center gap-4">
                {/* Contextual Icon Badge */}
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
                  isOpen 
                    ? "bg-blue-600 border-blue-500 text-white" 
                    : isDark
                      ? "bg-white/5 border-white/10 text-slate-400"
                      : "bg-slate-50 border-slate-200 text-slate-600"
                }`}>
                  <IconComponent size={18} strokeWidth={2.5} />
                </div>
                
                <span className={`text-sm sm:text-base font-bold tracking-tight transition-colors ${
                  isOpen 
                    ? isDark ? "text-white" : "text-blue-600"
                    : isDark ? "text-slate-200" : "text-slate-800"
                }`}>
                  {item.question}
                </span>
              </div>

              {/* Smooth Animated Chevron */}
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={isOpen ? "text-blue-500" : isDark ? "text-slate-600" : "text-slate-400"}
              >
                <ChevronDown size={18} strokeWidth={2.5} />
              </motion.div>
            </button>

            {/* Content Transition Layer */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-4 sm:px-5 pb-5 sm:pb-6 pt-0">
                    {/* Visual Interface Separator */}
                    <div className={`mb-4 h-[1px] w-full ${
                      isDark 
                        ? "bg-gradient-to-r from-blue-500/30 via-transparent to-transparent" 
                        : "bg-gradient-to-r from-blue-500/20 via-transparent to-transparent"
                    }`} />
                    
                    <p className={`text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-300 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}>
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}