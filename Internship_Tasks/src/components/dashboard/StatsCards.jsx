"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, ShoppingBag, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function StatsCards() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const cards = [
    { 
      title: "Total Users", 
      value: "1,200", 
      change: "+12.5%", 
      isUp: true, 
      icon: Users,
      progress: "78%",
      color: {
        bgLight: "bg-blue-50 text-blue-600",
        bgDark: "bg-blue-500/10 text-blue-400",
        bar: "from-blue-600 to-blue-400",
        glow: "group-hover:bg-blue-500/10"
      }
    },
    { 
      title: "Total Sales", 
      value: "$15.4K", 
      change: "+18.2%", 
      isUp: true, 
      icon: DollarSign,
      progress: "64%",
      color: {
        bgLight: "bg-emerald-50 text-emerald-600",
        bgDark: "bg-emerald-500/10 text-emerald-400",
        bar: "from-emerald-600 to-emerald-400",
        glow: "group-hover:bg-emerald-500/10"
      }
    },
    { 
      title: "Active Orders", 
      value: "320", 
      change: "-4.1%", 
      isUp: false, 
      icon: ShoppingBag,
      progress: "45%",
      color: {
        bgLight: "bg-purple-50 text-purple-600",
        bgDark: "bg-purple-500/10 text-purple-400",
        bar: "from-purple-600 to-purple-400",
        glow: "group-hover:bg-purple-500/10"
      }
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
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 px-2"
    >
      {cards.map((card, index) => {
        const IconComponent = card.icon;

        return (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
            className={`relative group overflow-hidden rounded-[2rem] border p-6 transition-all duration-500 ${
              isDark 
                ? "bg-slate-900/20 border-white/5 hover:bg-slate-900/40 hover:border-white/10" 
                : "bg-white border-slate-200/80 hover:shadow-xl hover:shadow-slate-200/40 hover:border-slate-300"
            }`}
          >
            {/* Contextual Radial Ambient Glow */}
            <div className={`absolute -right-10 -top-10 h-28 w-28 blur-3xl rounded-full transition-colors duration-700 ${
              isDark ? "bg-white/[0.02]" : "bg-slate-100"
            } ${card.color.glow}`} />

            {/* Interactive Card Action Row */}
            <div className="flex items-center justify-between mb-5 relative z-10">
              <div className={`p-3 rounded-xl transition-all duration-300 ${
                isDark ? card.color.bgDark : card.color.bgLight
              }`}>
                <IconComponent size={18} strokeWidth={2.5} />
              </div>
              
              <div className={`flex items-center gap-0.5 px-2 py-1 rounded-md text-[10px] font-black tracking-wider uppercase ${
                card.isUp 
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" 
                  : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
              }`}>
                {card.isUp ? <ArrowUpRight size={12} strokeWidth={2.5} /> : <ArrowDownRight size={12} strokeWidth={2.5} />}
                {card.change}
              </div>
            </div>

            {/* Typography Stack */}
            <div className="relative z-10">
              <h3 className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}>
                {card.title}
              </h3>
              
              <div className="flex items-baseline gap-2">
                <p className={`text-3xl font-black tracking-tight transition-colors duration-300 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  {card.value}
                </p>
                <span className={`text-[9px] font-bold uppercase tracking-widest ${
                  isDark ? "text-slate-600" : "text-slate-400"
                }`}>
                  vs last month
                </span>
              </div>
            </div>

            {/* Fluid Custom Accent Progress Metrics */}
            <div className={`mt-5 h-1.5 w-full rounded-full overflow-hidden relative z-10 ${
              isDark ? "bg-white/5" : "bg-slate-100"
            }`}>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: card.progress }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                className={`h-full rounded-full bg-gradient-to-r ${card.color.bar}`}
              />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}