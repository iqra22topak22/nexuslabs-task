"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { TrendingUp, Maximize2 } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const data = [
  { month: "Jan", sales: 400, growth: 12 },
  { month: "Feb", sales: 700, growth: 18 },
  { month: "Mar", sales: 500, growth: 15 },
  { month: "Apr", sales: 900, growth: 24 },
  { month: "May", sales: 850, growth: 22 },
  { month: "Jun", sales: 1100, growth: 30 },
];

// Custom Adaptive Tooltip
const CustomTooltip = ({ active, payload, label, isDark }) => {
  if (active && payload && payload.length) {
    return (
      <div className={`rounded-xl border p-4 shadow-2xl backdrop-blur-md transition-colors duration-300 ${
        isDark 
          ? "border-white/10 bg-slate-900/90" 
          : "border-slate-200 bg-white/95 shadow-slate-900/10"
      }`}>
        <p className={`mb-1 text-[10px] font-bold uppercase tracking-widest ${
          isDark ? "text-slate-500" : "text-slate-400"
        }`}>
          {label}
        </p>

        <div className="flex items-center gap-3">
          <p className={`text-lg font-black ${isDark ? "text-white" : "text-slate-900"}`}>
            ${payload[0].value}
          </p>

          <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
            +{payload[0].payload.growth}%
          </span>
        </div>
      </div>
    );
  }

  return null;
};

export default function SalesChart() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`group relative w-full overflow-hidden rounded-[2rem] border p-6 sm:p-8 transition-all duration-500 ${
      isDark 
        ? "border-white/5 bg-slate-900/20 hover:bg-slate-900/40" 
        : "border-slate-200/80 bg-white hover:shadow-xl hover:shadow-slate-200/40 shadow-sm"
    }`}>
      
      {/* Header Panel */}
      <div className="mb-8 flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h2 className={`text-base sm:text-lg font-black tracking-tight uppercase italic transition-colors ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Sales Analytics
            </h2>

            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <TrendingUp size={12} strokeWidth={2.5} />
            </div>
          </div>

          <p className={`text-xs sm:text-sm font-medium transition-colors ${
            isDark ? "text-slate-500" : "text-slate-400"
          }`}>
            Monthly performance metrics & revenue data
          </p>
        </div>

        <button className={`rounded-xl p-2.5 border transition-all duration-300 ${
          isDark 
            ? "border-white/5 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white" 
            : "border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900 shadow-sm"
        }`}>
          <Maximize2 size={16} strokeWidth={2.5} />
        </button>
      </div>

      {/* Recharts Wrapper Box */}
      <div className="h-[280px] w-full text-xs font-bold">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 15, left: -15, bottom: 0 }}
          >
            {/* Dynamic Vector Fill Gradient */}
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#2563eb"
                  stopOpacity={isDark ? 0.25 : 0.15}
                />
                <stop
                  offset="95%"
                  stopColor="#2563eb"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            {/* Structured Background Grid lines */}
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke={isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.05)"}
            />

            {/* X Axis Component */}
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: isDark ? "#475569" : "#94a3b8", fontSize: 11, fontWeight: 600 }}
              dy={12}
            />

            {/* Y Axis Component */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: isDark ? "#475569" : "#94a3b8", fontSize: 11, fontWeight: 600 }}
            />

            {/* Tooltip Core Engine */}
            <Tooltip
              content={<CustomTooltip isDark={isDark} />}
              cursor={{
                stroke: "#2563eb",
                strokeWidth: 1.5,
                strokeDasharray: "4 4",
              }}
            />

            {/* Render Area Vector Trace */}
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#2563eb"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#colorSales)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Decorative Glow Elements */}
      <div className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-[100px] transition-opacity duration-1000 ${
        isDark ? "bg-blue-600/10 opacity-100" : "bg-blue-400/10 opacity-50"
      }`} />
    </div>
  );
}