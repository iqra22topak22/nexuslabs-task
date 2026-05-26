"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  CartesianGrid,
  Defs,
  LinearGradient,
} from "recharts";
import { TrendingUp, Maximize2 } from "lucide-react";

const data = [
  { month: "Jan", sales: 400, growth: 12 },
  { month: "Feb", sales: 700, growth: 18 },
  { month: "Mar", sales: 500, growth: 15 },
  { month: "Apr", sales: 900, growth: 24 },
  { month: "May", sales: 850, growth: 22 },
  { month: "Jun", sales: 1100, growth: 30 },
];

// Premium Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-white/10 bg-[#0b0f1a]/90 p-4 shadow-2xl backdrop-blur-md">
        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-gray-500">{label}</p>
        <div className="flex items-center gap-3">
          <p className="text-xl font-bold text-white">${payload[0].value}</p>
          <span className="flex items-center text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
            +{payload[0].payload.growth}%
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export default function SalesChart() {
  return (
    <div className="group relative w-full rounded-3xl border border-white/5 bg-[#0b0f1a]/40 p-8 transition-all hover:bg-[#0b0f1a]/60 overflow-hidden">
      
      {/* Header Info */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xl font-bold tracking-tight text-white">Sales Analytics</h2>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
              <TrendingUp size={12} />
            </div>
          </div>
          <p className="text-sm text-gray-500">Monthly performance metrics & revenue</p>
        </div>
        
        <button className="rounded-xl bg-white/5 p-2.5 text-gray-400 hover:bg-white/10 hover:text-white transition-all">
          <Maximize2 size={18} />
        </button>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="rgba(255,255,255,0.03)" 
            />
            
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12, fontWeight: 500 }}
              dy={15}
            />
            
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />
            
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '4 4' }} />
            
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#3b82f6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorSales)"
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 bg-blue-600/10 blur-[100px] pointer-events-none" />
    </div>
  );
}