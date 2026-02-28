"use client";

import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { BG_ELLIPSE_TOP, BG_ELLIPSE_BOTTOM } from "@/lib/assets";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden relative bg-navy">
      {/* Background decorative ellipses */}
      <Image
        src={BG_ELLIPSE_TOP}
        alt=""
        width={260}
        height={260}
        className="absolute pointer-events-none select-none w-[140px] sm:w-[200px] md:w-[260px] h-auto"
        style={{ top: 0, right: 0, zIndex: 0, opacity: 0.9 }}
      />
      <Image
        src={BG_ELLIPSE_BOTTOM}
        alt=""
        width={320}
        height={320}
        className="absolute pointer-events-none select-none w-[160px] sm:w-[220px] md:w-[320px] h-auto"
        style={{ bottom: 0, right: "60px", zIndex: 0, opacity: 0.8 }}
      />

      {/* Sidebar — static on desktop, overlay on mobile */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content area */}
      <main className="flex-1 md:m-6 md:rounded-[26px] overflow-auto relative z-10 flex flex-col bg-content-bg">
        <Header onMenuOpen={() => setSidebarOpen(true)} />
        <div className="flex-1 px-4 md:px-14 pb-10 pt-6">{children}</div>
      </main>
    </div>
  );
}
