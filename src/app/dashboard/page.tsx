"use client";

import { useState, useRef, useEffect } from "react";
import {
  ICON_SUN,
  LOGO_WORDPRESS,
  LOGO_GOOGLE_CLOUD,
  ICON_MANAGE_ARROW,
  ICON_PLAN_ARROW,
} from "@/lib/assets";
import ManageMenu from "@/components/layout/ManageMenu";

const stats = [
  { label: "סטטוס מנוי:", value: "פעיל", quota: null },
  { label: "שטח אחסון:", value: "0.26GB", quota: "2GB/" },
  { label: "תעבורה חודשית:", value: "0.26GB", quota: "20GB/" },
  { label: "אתרים:", value: "0", quota: "1/" },
  { label: "סביבות פיתוח:", value: "1", quota: "2/" },
  { label: "תיבת דואר:", value: "0", quota: null },
  { label: "מסדי נתונים:", value: "0", quota: null },
];

export default function DashboardPage() {
  const [manageOpen, setManageOpen] = useState(false);
  const manageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (manageOpen && manageWrapperRef.current && !manageWrapperRef.current.contains(e.target as Node)) {
        setManageOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setManageOpen(false);
    }
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [manageOpen]);

  return (
    <div>
      {/* Greeting row — sun comes AFTER text in DOM so RTL places it on the left */}
      <div className="flex items-center gap-[6px] mb-6">
        <img
          src={ICON_SUN}
          alt=""
          className="w-[52px] h-[40px] object-contain flex-shrink-0"
        />
        <h1
          className="font-polin text-navy"
          style={{ lineHeight: 1.1, paddingRight: "10px", paddingBottom: "6px", fontSize: "clamp(22px, 1.77vw, 34px)" }}
        >
          בוקר טוב,{" "}
          <span className="text-primary font-extrabold ">אלדד</span>
        </h1>
      </div>

      {/* Section title — Noto Sans Hebrew Bold per Figma */}
      <h2
        className="text-primary font-bold mb-[clamp(10px,1.85vh,20px)] mt-[clamp(16px,3.0vh,32px)]"
        style={{ fontSize: "clamp(18px,1.3vw,25px)", fontFamily: "var(--font-hebrew)", fontVariationSettings: "'wdth' 100" }}
      >
        חבילות אחסון
      </h2>

      {/* Hosting package card */}
      <div className="bg-white rounded-[27px] px-4 md:px-[28px] py-px shadow-sm flex flex-col" style={{ minHeight: "clamp(200px, 25vh, 270px)" }}>
        <div className="flex flex-col items-stretch flex-1 py-[clamp(14px,2.2vh,24px)]" style={{ gap: "clamp(20px, 3.8vh, 41px)" }}>
          {/* Card top row */}
          <div className="flex items-center gap-4">
            {/* Plan name */}
            <span className="font-extrabold text-navy text-[22px]">גוניור</span>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 md:gap-[18px]">
              <Badge>
                אחסון וורדפרס
                <img src={LOGO_WORDPRESS} alt="WordPress" className="w-4 h-4 object-contain" />

              </Badge>
              <Badge>
                Google cloud
                <img src={LOGO_GOOGLE_CLOUD} alt="Google Cloud" className="w-4 h-4 object-contain" />
              </Badge>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Manage button */}
            <div className="relative" ref={manageWrapperRef}>
              <button
                className="btn-primary flex items-center gap-2 px-[20px] py-[8px] rounded-[7px] text-white font-polin text-[18px] transition-opacity hover:opacity-90 cursor-pointer"
                onClick={() => setManageOpen((v) => !v)}
                aria-expanded={manageOpen}
                aria-haspopup="menu"
              >
                ניהול
                <img src={ICON_MANAGE_ARROW} alt="" className="w-2 h-2 object-contain brightness-0 invert rotate-90" />
              </button>
              {manageOpen && <ManageMenu onClose={() => setManageOpen(false)} />}
            </div>
          </div>

          {/* Divider */}
          <div
            className="w-full"
            style={{ height: "1px", background: "rgba(0,28,81,0.1)" }}
          />

          {/* Stats row — horizontal inline: value badge + /quota + label */}
          <div className="flex gap-2 md:gap-[15px] items-center justify-center flex-wrap">
            {stats.map((stat) => (
              <div key={stat.label} className="flex gap-[7px] items-center justify-center">
                <span className="font-polin text-[18px] text-muted">{stat.label}</span>
                {stat.quota && (
                  <span className="font-polin text-[18px] text-[#005492]">{stat.quota}</span>
                )}
                <span
                  className="bg-content-bg flex items-center justify-center text-primary font-polin text-[16px] h-[23px] px-[20px] py-[9px] rounded-[7px]"                >
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* לפרטי התכנית — centered footer with top border */}
        <div className="border-t border-l border-r border-[#b2b2b2] flex gap-4 sm:gap-[50px] items-center justify-center px-[30px] py-[8px] rounded-tl-[7px] rounded-tr-[7px] w-fit mx-auto">
          <button className="flex items-center gap-3 font-polin text-[14px] text-muted-alt hover:underline">
            לפרטי התכנית
            <img src={ICON_PLAN_ARROW} alt="" className="w-2 h-2 object-contain rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="flex items-center gap-1.5 font-polin text-[15px] text-primary w-[150px] bg-badge-bg rounded-[7px]"
      style={{
        height: "30px",
        padding: "4px 15px",
      }}
    >
      {children}
    </span>
  );
}
