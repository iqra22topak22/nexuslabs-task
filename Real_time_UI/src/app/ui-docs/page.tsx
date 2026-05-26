"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Package, MousePointer2, CreditCard, Type, BellRing } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Toast from "@/components/ui/Toast";

export default function DocsPage() {
  const [showToast, setShowToast] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const sectionHeader = (icon: any, title: string) => (
    <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
      <div className="p-2 rounded-xl bg-blue-600/10 text-blue-500">
        {icon}
      </div>
      <h2 className="text-sm font-black uppercase tracking-[0.3em] text-gray-500">
        {title}
      </h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#030712] text-white p-8 md:p-20 relative overflow-hidden">
      
      {/* 🌌 Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Page Header */}
        <header className="mb-20">
          <div className="flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-widest mb-2">
            <Package size={14} />
            <span>Design System v1.0</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter">
            Component <span className="text-blue-600">Library</span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl text-lg leading-relaxed">
            A collection of high-performance, premium UI components built with 
            Tailwind CSS and Framer Motion for your Agentic AI projects.
          </p>
        </header>

        <div className="space-y-24">
          
          {/* 🔘 BUTTONS SECTION */}
          <section>
            {sectionHeader(<MousePointer2 size={18} />, "Interactive Elements")}
            <div className="flex flex-wrap gap-6 items-center bg-white/[0.02] p-10 rounded-[32px] border border-white/5">
              <Button text="Primary Action" variant="primary" />
              <Button text="Secondary" variant="secondary" />
              <Button text="Danger Zone" variant="danger" />
              <Button text="Ghost Button" variant="ghost" />
            </div>
          </section>

          {/* 💳 CARDS SECTION */}
          <section>
            {sectionHeader(<CreditCard size={18} />, "Data Containers")}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card 
                title="RAG Pipeline" 
                description="Monitor your Retrieval-Augmented Generation performance in real-time." 
              />
              <Card 
                title="Agentic Reasoning" 
                description="View the decision-making logs of your deployed AI agents." 
              />
            </div>
          </section>

          {/* ⌨️ INPUTS SECTION */}
          <section>
            {sectionHeader(<Type size={18} />, "Form Controls")}
            <div className="max-w-md bg-white/[0.02] p-10 rounded-[32px] border border-white/5">
              <Input 
                label="Search Database"
                placeholder="Enter query..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </section>

          {/* 🔔 FEEDBACK SECTION */}
          <section>
            {sectionHeader(<BellRing size={18} />, "Feedback & Alerts")}
            <div className="bg-white/[0.02] p-10 rounded-[32px] border border-white/5">
              <Button 
                text="Trigger System Toast" 
                variant="primary" 
                onClick={() => setShowToast(true)} 
              />
            </div>
          </section>

        </div>

        {/* Floating Toast Component */}
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          message="Component Library is ready for production 🚀"
          type="success"
        />

        {/* Footer info */}
        <footer className="mt-32 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs font-medium uppercase tracking-widest">
            Handcrafted by Iqra Mushtaq • 2026
          </p>
        </footer>
      </div>
    </div>
  );
}