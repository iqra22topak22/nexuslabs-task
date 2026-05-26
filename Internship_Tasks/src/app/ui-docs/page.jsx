"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MousePointer2, CreditCard, Type, 
  Layers, Radio
} from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Toast from "@/components/ui/Toast";
import { useTheme } from "@/components/ThemeProvider";

export default function DocsPage() {
  const [showToast, setShowToast] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Automatically clears the feedback notification after layout placement triggers
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleTestTrigger = (e) => {
    e.preventDefault();
    setShowToast(true);
  };

  const sectionHeader = (icon, title) => (
    <div className={`flex items-center gap-4 mb-8 border-l-2 ${isDark ? 'border-blue-600' : 'border-blue-500'} pl-6`}>
      <div className={`p-2.5 rounded-xl transition-colors ${
        isDark ? 'bg-blue-600/10 text-blue-500 ring-1 ring-blue-500/20' : 'bg-blue-50 text-blue-600 ring-1 ring-blue-200'
      }`}>
        {icon}
      </div>
      <h2 className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
        {title}
      </h2>
    </div>
  );

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ease-in-out overflow-x-hidden relative ${
      isDark ? 'bg-slate-950 text-slate-300' : 'bg-slate-50 text-slate-800'
    }`}>
      
      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute top-[-10%] left-[-10%] h-[700px] w-[700px] rounded-full blur-[150px] transition-opacity duration-1000 ${
          isDark ? 'bg-blue-600/[0.03]' : 'bg-blue-400/[0.06]'
        }`} />
        <div className={`absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[120px] transition-opacity duration-1000 ${
          isDark ? 'bg-indigo-600/[0.02]' : 'bg-indigo-400/[0.05]'
        }`} />
      </div>

      {/* 2. SYSTEM SPECIFICATION HUB */}
      <div className="relative z-10 flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        
        {/* Hero Section */}
        <header className="mb-24 relative px-2">
          <div className="flex items-center gap-2.5 text-blue-500 font-black text-[10px] uppercase tracking-[0.35em] mb-4">
            <Layers size={13} strokeWidth={2.5} />
            <span>Foundations & Elements</span>
          </div>
          
          <h1 className={`text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none mb-6 uppercase italic transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Core <span className="text-blue-600 not-italic">UI</span>
          </h1>
          
          <div className="max-w-xl">
            <p className={`text-base sm:text-lg font-medium leading-relaxed tracking-tight border-l pl-6 transition-colors ${
              isDark ? 'text-slate-500 border-white/10' : 'text-slate-400 border-slate-200'
            }`}>
              A high-fidelity client-side design system custom engineered for <span className={isDark ? 'text-white' : 'text-slate-900'}>Agentic AI Workflows</span> and runtime interfaces.
            </p>
          </div>
        </header>

        {/* Component Specification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Sticky Navigation Bar */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-36 h-fit space-y-6">
            <div className="space-y-3 px-2">
              <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">System Inventory</p>
              <nav className="flex flex-col gap-1">
                {['Interactions', 'Containers', 'Inputs & Fields'].map((nav) => (
                  <span 
                    key={nav} 
                    className={`py-2 px-3 text-xs font-bold tracking-tight border border-transparent rounded-xl transition-all ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {nav}
                  </span>
                ))}
              </nav>
            </div>
          </aside>

          {/* Interactive Library Sandbox View */}
          <div className="lg:col-span-9 space-y-24">
            
            {/* Buttons Layout Sheet */}
            <section className="space-y-4">
              {sectionHeader(<MousePointer2 size={15} strokeWidth={2.5} />, "Interactive Elements")}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 sm:p-8 rounded-[2.5rem] border backdrop-blur-xl transition-all ${
                isDark ? 'bg-slate-900/20 border-white/5' : 'bg-white border-slate-200/80 shadow-xl shadow-slate-200/20'
              }`}>
                <Button text="Primary Action" variant="primary" onClick={handleTestTrigger} />
                <Button text="Secondary" variant="secondary" onClick={handleTestTrigger} />
                <Button text="Danger Zone" variant="danger" onClick={handleTestTrigger} />
                <Button text="Ghost Interface" variant="ghost" onClick={handleTestTrigger} />
              </div>
            </section>

            {/* Containers Layout Sheet */}
            <section className="space-y-4">
              {sectionHeader(<CreditCard size={15} strokeWidth={2.5} />, "Data Containers")}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card 
                  title="RAG Pipeline" 
                  description="Retrieval-Augmented Generation performance matrix arrays." 
                  theme={isDark ? 'dark' : 'light'} 
                />
                <Card 
                  title="Agentic Reasoner" 
                  description="Heuristic inference decision-making streams for vector agents." 
                  theme={isDark ? 'dark' : 'light'}
                />
              </div>
            </section>

            {/* Inputs Layout Sheet */}
            <section className="space-y-4">
              {sectionHeader(<Type size={15} strokeWidth={2.5} />, "Inputs & Fields")}
              <div className={`p-6 sm:p-8 rounded-[2.5rem] border backdrop-blur-xl transition-all ${
                isDark ? 'bg-slate-900/20 border-white/5' : 'bg-white border-slate-200/80 shadow-xl shadow-slate-200/20'
              }`}>
                <form onSubmit={handleTestTrigger} className="space-y-4 max-w-md">
                  <Input 
                    placeholder="Enter runtime prompt parameter..." 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <div className="flex justify-end">
                    <Button text="Submit Token" variant="primary" type="submit" />
                  </div>
                </form>
              </div>
            </section>

          </div>
        </div>

        {/* 3. SIGNATURE SYSTEM FOOTER */}
        <footer className={`mt-32 pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-6 border-dashed px-2 ${
          isDark ? 'border-white/5' : 'border-slate-200'
        }`}>
          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xs italic shadow-md shadow-blue-500/10">
              IM
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.35em] text-slate-500">
              Handcrafted by Iqra Mushtaq • 2026
            </p>
          </div>

          <div className={`flex items-center gap-2 px-3 py-1 rounded-full border self-start md:self-auto ${
            isDark ? 'bg-blue-500/5 border-blue-500/10' : 'bg-blue-50 border-blue-100'
          }`}>
            <Radio size={11} strokeWidth={3} className="text-blue-500 animate-pulse" />
            <span className="text-[8px] font-black uppercase tracking-widest text-blue-500">
              Sync Stable
            </span>
          </div>
        </footer>
      </div>

      {/* Global Interface State Elements */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        message="System: Core Sandbox Sync Complete 🚀"
        type="success"
      />
    </div>
  );
}