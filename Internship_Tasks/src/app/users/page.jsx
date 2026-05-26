"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users as UsersIcon, Search, Filter, MoreVertical, 
  MapPin, Plus, Download, LayoutDashboard,
  FileText, Component, Activity, Command, Menu, X 
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const mockUsers = [
  { id: 1, name: "Sarah Chen", email: "sarah.chen@example.com", role: "Admin", status: "Active", location: "San Francisco, CA", avatar: "SC" },
  { id: 2, name: "Marcus Johnson", email: "marcus.j@example.com", role: "Editor", status: "Active", location: "New York, NY", avatar: "MJ" },
  { id: 3, name: "Elena Rodriguez", email: "elena.r@example.com", role: "Viewer", status: "Inactive", location: "Austin, TX", avatar: "ER" },
  { id: 4, name: "James Wilson", email: "james.w@example.com", role: "Editor", status: "Active", location: "Seattle, WA", avatar: "JW" },
  { id: 5, name: "Priya Sharma", email: "priya.s@example.com", role: "Admin", status: "Active", location: "London, UK", avatar: "PS" },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sidebarLinks = [
    { name: "Nexus Home", href: "/", icon: Command },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Users", href: "/users", icon: UsersIcon, active: true },
    { name: "Forms", href: "/multistep-form", icon: FileText },
    { name: "UI Docs", href: "/ui-docs", icon: Component },
    { name: "Live Feed", href: "/realtime-ui", icon: Activity },
  ];

  // Helper component to avoid repeating the menu mapping block
  const SidebarContent = () => (
    <>
      <nav className="space-y-2 flex-1 pt-12">
        {sidebarLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`flex items-center justify-between p-3 rounded-2xl transition-all group ${
              link.active 
              ? (isDark ? "bg-blue-600/10 text-blue-400 border border-blue-500/20" : "bg-blue-50 text-blue-600 border border-blue-200")
              : (isDark ? "hover:bg-white/5 text-slate-500 hover:text-slate-200" : "hover:bg-gray-100 text-slate-500 hover:text-slate-900")
            }`}
          >
            <div className="flex items-center gap-3">
              <link.icon size={18} className={link.active ? "text-blue-400" : "opacity-50"} />
              <span className="text-[11px] font-black uppercase tracking-widest">{link.name}</span>
            </div>
            {link.active && <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />}
          </Link>
        ))}
      </nav>

      <div className={`p-4 border rounded-[24px] transition-colors ${
        isDark ? "bg-white/[0.02] border-white/5" : "bg-gray-100 border-gray-200"
      }`}>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">System Status</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className={`text-xs font-bold uppercase ${isDark ? "text-slate-300" : "text-slate-700"}`}>Operational</span>
        </div>
      </div>
    </>
  );

  return (
    <div className={`flex min-h-screen transition-colors duration-500 font-sans selection:bg-blue-500/30 pt-20 relative ${
      isDark ? "bg-[#020617] text-slate-300" : "bg-slate-50 text-slate-900"
    }`}>
      
      {/* HAMBURGER TRIGGER BUTTON FOR MOBILE SCREENS */}
      <div className="lg:hidden fixed top-24 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-3 border rounded-2xl shadow-xl transition-all backdrop-blur-md active:scale-95 ${
            isDark 
              ? "bg-slate-900/80 border-white/10 text-white hover:bg-slate-800" 
              : "bg-white/80 border-slate-200 text-slate-900 hover:bg-slate-50"
          }`}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE DRAWER PORTAL HUD */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Ambient Backdrop Overlay layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Sliding Panel Layer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed left-0 top-0 bottom-0 w-72 z-40 flex flex-col p-6 pt-36 border-r transition-colors duration-500 lg:hidden ${
                isDark ? "border-white/5 bg-[#020617]" : "border-gray-200 bg-white"
              }`}
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
      
      {/* DESKTOP PREMIUM SIDEBAR NAV */}
      <aside className={`w-72 border-r sticky top-20 h-[calc(100vh-5rem)] hidden lg:flex flex-col p-6 transition-colors duration-500 ${
        isDark ? "border-white/5 bg-[#020617]" : "border-gray-200 bg-white"
      }`}>
        <SidebarContent />
      </aside>

      {/* MAIN REGISTRY INTERFACE CONTAINER */}
      <main className="flex-1 p-8 lg:p-12 relative pt-36 lg:pt-12 overflow-hidden">
        {/* Dynamic Glows */}
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] blur-[120px] pointer-events-none transition-opacity duration-1000 ${
          isDark ? "bg-blue-600/5" : "bg-blue-400/10"
        }`} />

        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-8 bg-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">Core Network</span>
              </div>
              <h1 className={`text-5xl font-black tracking-tighter italic uppercase transition-colors ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                User <span className="text-blue-600 not-italic">Registry</span>
              </h1>
            </motion.div>

            <div className="flex gap-3">
              <button className={`p-3 border rounded-2xl transition-all ${
                isDark ? "bg-white/5 border-white/10 hover:bg-white/10 text-slate-400" : "bg-white border-slate-200 hover:bg-slate-50 text-slate-600"
              }`}>
                <Download size={20} />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-600/20 transition-all active:scale-95">
                <Plus size={16} /> Add Member
              </button>
            </div>
          </header>

          {/* Search & Statistics Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
            <div className="lg:col-span-3 relative group">
              <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Query Registry..."
                className={`w-full pl-14 pr-6 py-4 border rounded-2xl placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all font-medium ${
                  isDark ? "bg-white/[0.02] border-white/5 text-white focus:bg-white/[0.04]" : "bg-white border-slate-200 text-slate-900 focus:bg-slate-50"
                }`}
              />
            </div>
            <button className={`flex items-center justify-center gap-3 px-6 py-4 border rounded-2xl transition ${
              isDark ? "bg-white/5 border-white/10 hover:bg-white/10 text-slate-300" : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700 shadow-sm"
            }`}>
              <Filter size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest">Filters</span>
            </button>
          </div>

          {/* Table Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`border rounded-[32px] overflow-hidden backdrop-blur-sm shadow-2xl transition-colors ${
              isDark ? "bg-white/[0.02] border-white/5" : "bg-white border-slate-200 shadow-slate-200/50"
            }`}
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className={`border-b ${isDark ? "border-white/5 bg-white/[0.01]" : "border-slate-100 bg-slate-50"}`}>
                    <th className="text-left px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Identity</th>
                    <th className="text-left px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Access Level</th>
                    <th className="text-left px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Heartbeat</th>
                    <th className="text-left px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Location</th>
                    <th className="px-8 py-5"></th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${isDark ? "divide-white/5" : "divide-slate-100"}`}>
                  {mockUsers.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())).map((user, idx) => (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`group transition-colors ${isDark ? "hover:bg-white/[0.03]" : "hover:bg-blue-50/50"}`}
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-[18px] bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-blue-600/10 group-hover:scale-110 transition-transform">
                            {user.avatar}
                          </div>
                          <div>
                            <p className={`font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>{user.name}</p>
                            <p className="text-[11px] text-slate-500 font-medium tracking-tight italic">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className={`inline-flex items-center px-3 py-1 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
                          user.role === 'Admin' 
                          ? (isDark ? "bg-blue-500/10 border-blue-500/20 text-blue-400" : "bg-blue-50 border-blue-200 text-blue-600")
                          : (isDark ? "bg-white/5 border-white/10 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-600")
                        }`}>
                          {user.role}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${user.status === "Active" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-slate-700"}`} />
                          <span className={`text-[10px] font-black uppercase tracking-widest ${user.status === "Active" ? "text-emerald-500" : "text-slate-600"}`}>
                            {user.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                          <MapPin size={14} className="opacity-40" />
                          {user.location}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="p-2 hover:bg-white/10 rounded-xl transition-all text-slate-600 hover:text-white">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Table Footer */}
            <div className="p-6 border-t border-white/5 bg-white/[0.01] flex items-center justify-between">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">Showing {mockUsers.length} total entries</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition">Prev</button>
                <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition">Next</button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}