"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { BG_ELLIPSE_TOP, BG_ELLIPSE_BOTTOM } from "@/lib/assets";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="flex h-screen overflow-hidden relative"
      style={{ backgroundColor: "#001c51" }}
    >
      {/* Background decorative ellipses */}
      <img
        src={BG_ELLIPSE_TOP}
        alt=""
        className="absolute pointer-events-none select-none"
        style={{ top: 0, right: 0, width: "260px", zIndex: 0, opacity: 0.9 }}
      />
      <img
        src={BG_ELLIPSE_BOTTOM}
        alt=""
        className="absolute pointer-events-none select-none"
        style={{ bottom: 0, right: "60px", width: "320px", zIndex: 0, opacity: 0.8 }}
      />

      {/* Sidebar — static on desktop, overlay on mobile */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content area — light blue rounded card (margin/rounding only on md+) */}
      <main
        className="flex-1 md:m-6 md:rounded-[26px] overflow-auto relative z-10 flex flex-col"
        style={{ backgroundColor: "#eff6ff" }}
      >
        {/* Header */}
        <Header onMenuOpen={() => setSidebarOpen(true)} />

        {/* Page content */}
        <div className="flex-1 px-4 md:px-14 pb-10">{children}</div>
      </main>
    </div>
  );
}
