"use client";

import { motion } from "framer-motion";
import { MoreHorizontal, ChevronLeft, ChevronRight, Mail, User as UserIcon } from "lucide-react";

const users = [
  { id: "01", name: "Ali", email: "ali@gmail.com", role: "Admin", status: "Active" },
  { id: "02", name: "Ahmed", email: "ahmed@gmail.com", role: "Editor", status: "Away" },
  { id: "03", name: "Sara", email: "sara@gmail.com", role: "Viewer", status: "Active" },
];

export default function UsersTable() {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-white/5 bg-[#0b0f1a]/40 backdrop-blur-xl shadow-2xl">
      
      {/* Table Header Section */}
      <div className="flex items-center justify-between p-6 border-b border-white/5">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white">Users Directory</h2>
          <p className="text-sm text-gray-500">Manage your team members and permissions</p>
        </div>
        <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]">
          Add User
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02] text-xs font-bold uppercase tracking-widest text-gray-500">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5">
            {users.map((user, index) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group transition-colors hover:bg-white/[0.03]"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-500">#{user.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 text-blue-400">
                      <UserIcon size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{user.name}</div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Mail size={12} /> {user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">{user.role}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                    user.status === "Active" 
                      ? "bg-emerald-500/10 text-emerald-500" 
                      : "bg-amber-500/10 text-amber-500"
                  }`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${user.status === "Active" ? "bg-emerald-500" : "bg-amber-500"}`} />
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-white/5 hover:text-white">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Premium Pagination Footer */}
      <div className="flex items-center justify-between border-t border-white/5 p-6">
        <p className="text-xs font-medium text-gray-500">
          Showing <span className="text-white font-bold">1-3</span> of <span className="text-white font-bold">24</span> users
        </p>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-gray-400 transition-all hover:bg-white/10 hover:text-white disabled:opacity-30">
            <ChevronLeft size={14} /> Prev
          </button>
          <button className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-gray-400 transition-all hover:bg-white/10 hover:text-white">
            Next <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}