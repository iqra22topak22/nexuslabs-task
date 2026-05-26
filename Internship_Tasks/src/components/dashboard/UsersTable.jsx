"use client";

import { motion } from "framer-motion";
import { MoreHorizontal, ChevronLeft, ChevronRight, Mail, User as UserIcon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const users = [
  { id: "01", name: "Ali", email: "ali@gmail.com", role: "Admin", status: "Active" },
  { id: "02", name: "Ahmed", email: "ahmed@gmail.com", role: "Editor", status: "Away" },
  { id: "03", name: "Sara", email: "sara@gmail.com", role: "Viewer", status: "Active" },
];

export default function UsersTable() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`w-full overflow-hidden rounded-[2rem] border transition-all duration-500 backdrop-blur-xl ${
      isDark 
        ? "border-white/5 bg-slate-900/20 shadow-2xl" 
        : "border-slate-200/80 bg-white shadow-sm shadow-slate-200/40"
    }`}>
      
      {/* Table Header Section */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 border-b transition-colors ${
        isDark ? "border-white/5" : "border-slate-100"
      }`}>
        <div className="space-y-1">
          <h2 className={`text-base sm:text-lg font-black tracking-tight uppercase italic transition-colors ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            Users Directory
          </h2>
          <p className={`text-xs sm:text-sm font-medium transition-colors ${
            isDark ? "text-slate-500" : "text-slate-400"
          }`}>
            Manage your team members and permissions
          </p>
        </div>
        <button className="self-start sm:self-auto rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20">
          Add User
        </button>
      </div>

      {/* Overflow Scroll Management Area */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className={`border-b text-[10px] font-black uppercase tracking-widest transition-colors ${
              isDark 
                ? "border-white/5 bg-white/[0.01] text-slate-500" 
                : "border-slate-100 bg-slate-50/70 text-slate-400"
            }`}>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className={`divide-y transition-colors ${
            isDark ? "divide-white/5" : "divide-slate-100"
          }`}>
            {users.map((user, index) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.05 }}
                className={`group transition-colors ${
                  isDark ? "hover:bg-white/[0.02]" : "hover:bg-slate-50/50"
                }`}
              >
                {/* User ID Token */}
                <td className={`px-6 py-4 text-xs font-bold ${
                  isDark ? "text-slate-500" : "text-slate-400"
                }`}>
                  #{user.id}
                </td>

                {/* Identity Cell */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 ${
                      isDark 
                        ? "bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white" 
                        : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                    }`}>
                      <UserIcon size={16} strokeWidth={2.5} />
                    </div>
                    <div className="space-y-0.5">
                      <div className={`text-sm font-black transition-colors ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}>
                        {user.name}
                      </div>
                      <div className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                        isDark ? "text-slate-500" : "text-slate-400"
                      }`}>
                        <Mail size={12} strokeWidth={2} /> {user.email}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Role Descriptor */}
                <td className={`px-6 py-4 text-xs font-bold uppercase tracking-wider ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}>
                  {user.role}
                </td>

                {/* Micro Status Badging Block */}
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${
                    user.status === "Active" 
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" 
                      : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                  }`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      user.status === "Active" ? "bg-emerald-500" : "bg-amber-500"
                    }`} />
                    {user.status}
                  </span>
                </td>

                {/* Options Action Panel */}
                <td className="px-6 py-4 text-right">
                  <button className={`rounded-xl p-2 border transition-all duration-300 ${
                    isDark 
                      ? "border-transparent text-slate-500 hover:bg-white/5 hover:text-white" 
                      : "border-transparent text-slate-400 hover:bg-slate-100 hover:text-slate-900"
                  }`}>
                    <MoreHorizontal size={16} strokeWidth={2.5} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Structured Adaptive Pagination Footer */}
      <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 border-t p-6 transition-colors ${
        isDark ? "border-white/5" : "border-slate-100"
      }`}>
        <p className={`text-xs font-bold uppercase tracking-wide ${
          isDark ? "text-slate-500" : "text-slate-400"
        }`}>
          Showing <span className={isDark ? "text-white" : "text-slate-900"}>1-3</span> of{" "}
          <span className={isDark ? "text-white" : "text-slate-900"}>24</span> nodes
        </p>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className={`flex flex-1 sm:flex-none items-center justify-center gap-1 rounded-xl border px-3 py-1.5 text-xs font-black uppercase tracking-wide transition-all duration-300 ${
            isDark 
              ? "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white" 
              : "border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
          }`}>
            <ChevronLeft size={14} strokeWidth={2.5} /> Prev
          </button>
          <button className={`flex flex-1 sm:flex-none items-center justify-center gap-1 rounded-xl border px-3 py-1.5 text-xs font-black uppercase tracking-wide transition-all duration-300 ${
            isDark 
              ? "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white" 
              : "border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
          }`}>
            Next <ChevronRight size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}