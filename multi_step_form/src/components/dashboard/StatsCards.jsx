"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, ShoppingBag, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatsCards() {
  const cards = [
    { 
      title: "Total Users", 
      value: "1,200", 
      change: "+12.5%", 
      isUp: true, 
      icon: <Users size={20} />,
      color: "blue" 
    },
    { 
      title: "Total Sales", 
      value: "$15.4K", 
      change: "+18.2%", 
      isUp: true, 
      icon: <DollarSign size={20} />,
      color: "emerald" 
    },
    { 
      title: "Active Orders", 
      value: "320", 
      change: "-4.1%", 
      isUp: false, 
      icon: <ShoppingBag size={20} />,
      color: "purple" 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-2"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="relative group overflow-hidden rounded-3xl border border-white/5 bg-[#0b0f1a]/40 p-6 backdrop-blur-xl transition-all hover:bg-[#0b0f1a]/60 hover:border-white/10 shadow-2xl"
        >
          {/* Decorative Background Glow */}
          <div className="absolute -right-8 -top-8 h-24 w-24 bg-white/5 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500" />

          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-2xl bg-white/5 text-gray-400 group-hover:text-white transition-colors`}>
              {card.icon}
            </div>
            
            <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
              card.isUp ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
            }`}>
              {card.isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
              {card.change}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">{card.title}</h3>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold tracking-tight text-white">
                {card.value}
              </p>
              <span className="text-[10px] text-gray-600 font-medium uppercase tracking-tighter">vs last month</span>
            </div>
          </div>

          {/* Progress Bar (Visual Polish) */}
          <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`h-full rounded-full bg-gradient-to-r from-blue-600 to-transparent`}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}