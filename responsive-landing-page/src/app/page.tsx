"use client";

import { useState } from "react";

// Section Components
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

// UI Components
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Accordion from "./components/Accordion";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>

      {/* 🔘 TOP ACTION BUTTONS */}
      <div className="p-5 space-x-3">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Open Modal
        </button>

        <button
          onClick={() => setSidebarOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Open Sidebar
        </button>
      </div>

      {/* 🏠 MAIN WEBSITE SECTIONS */}
      <Hero />
      <Features />
      <Testimonials />

      {/* 📑 ACCORDION SECTION */}
      <div className="my-10">
        <Accordion />
      </div>

      {/* 📦 FOOTER */}
      <Footer />

      {/* 🪟 UI OVERLAYS (Modal + Sidebar) */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

    </div>
  );
}