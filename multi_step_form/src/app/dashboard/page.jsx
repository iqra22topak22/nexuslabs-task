"use client";

import { motion } from "framer-motion";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import StatsCards from "@/components/dashboard/StatsCards";
import SalesChart from "@/components/dashboard/SalesChart";
import UsersTable from "@/components/dashboard/UsersTable";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#030712] text-white selection:bg-blue-500/30 overflow-hidden">
      
      {/* 🚀 FIXED SIDEBAR SECTION */}
      {/* Keeping the sidebar fixed ensures the navigation is always accessible */}
      <aside className="fixed inset-y-0 left-0 z-[100] hidden lg:block">
        <Sidebar />
      </aside>

      {/* 🏠 MAIN CONTENT AREA */}
      {/* 
          - ml-72: Adds margin to account for the fixed sidebar width.
          - p-8: Increased padding for a more "expensive" spacious feel.
      */}
      <div className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        
        {/* STICKY NAVBAR */}
        <Navbar />

        <main className="flex-1 p-8 pt-4 space-y-8 max-w-7xl mx-auto w-full">
          
          {/* TOP STATS SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StatsCards />
          </motion.div>

          {/* GRID LAYOUT FOR CHARTS & TABLES */}
          <div className="grid grid-cols-1 gap-8">
            
            {/* ANALYTICS SECTION */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <SalesChart />
            </motion.div>

            {/* DATA GRID SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pb-12"
            >
              <UsersTable />
            </motion.div>
            
          </div>
        </main>
      </div>

      {/* 🌌 AMBIENT BACKGROUND GLOWS (The "Premium" Secret) */}
      {/* These subtle blurs make the dark background feel deep and high-end */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

    </div>
  );
}