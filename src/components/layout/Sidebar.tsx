"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import {
  ICON_HOME,
  ICON_PERMISSIONS,
  ICON_PARTNERS,
  ICON_PAYMENTS,
  ICON_LOGOUT,
} from "@/lib/assets";
import QuickActionsMenu from "./QuickActionsMenu";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "ראשי", href: "/dashboard", icon: ICON_HOME },
  { label: "מורשי גישה", href: "/dashboard/permissions", icon: ICON_PERMISSIONS },
  { label: "חשבון שותפים", href: "/dashboard/partners", icon: ICON_PARTNERS },
  { label: "תשלומים", href: "/dashboard/payments", icon: ICON_PAYMENTS },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [qaOpen, setQaOpen] = useState(false);
  const qaWrapperRef = useRef<HTMLDivElement>(null);

  const closeQa = useCallback(() => setQaOpen(false), []);
  useOutsideClick(qaWrapperRef, closeQa, qaOpen);

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 right-0 w-[280px] z-[60] flex flex-col bg-navy
          transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 md:flex-shrink-0 md:z-20
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ minHeight: "100vh" }}
      >
        {/* Logo + close button */}
        <div className="px-6 pt-8 pb-6 flex items-center justify-between">
          <button
            className="md:hidden text-white/70 hover:text-white p-1 transition-colors"
            onClick={onClose}
            aria-label="סגור תפריט"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <HostifyLogo />
        </div>

        {/* Nav items */}
        <nav className="flex flex-col gap-2 px-4 flex-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isActive ? "nav-active" : "hover:bg-white/5"}`}
              >
                <span
                  className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl"
                  style={{ background: isActive ? "rgba(0, 110, 255, 0.25)" : "rgba(255, 255, 255, 0.07)" }}
                >
                  <Image src={item.icon} alt="" width={20} height={20} className="object-contain" />
                </span>
                <span className={`text-[17px] font-polin ${isActive ? "text-white" : "text-white/70"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom actions */}
        <div className="px-4 pb-8 flex flex-col gap-2">
          {/* Quick actions */}
          <div ref={qaWrapperRef} className="relative">
            {qaOpen && <QuickActionsMenu onClose={() => setQaOpen(false)} />}
            <button
              className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition-all w-full"
              aria-expanded={qaOpen}
              aria-haspopup="menu"
              onClick={() => setQaOpen((prev) => !prev)}
            >
              <span
                className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full relative"
                style={{
                  background: "linear-gradient(135deg, #006eff 0%, #0044cc 100%)",
                  boxShadow: "0 0 20px rgba(0, 110, 255, 0.6)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1V15" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M1 8H15" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-white/70 text-[17px] font-bold">פעולות מהירות</span>
            </button>
          </div>

          {/* Logout */}
          <Link
            href="/login"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition-all w-full"
          >
            <span
              className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl"
              style={{ background: "rgba(255, 255, 255, 0.07)" }}
            >
              <Image src={ICON_LOGOUT} alt="" width={20} height={20} className="object-contain" />
            </span>
            <span className="text-white/70 text-[17px] font-bold">יציאה</span>
          </Link>
        </div>
      </aside>
    </>
  );
}

function HostifyLogo() {
  return (
    <div className="flex items-center gap-2" dir="ltr">
      <HostifyHIcon />
      <span
        className="text-white font-extrabold text-[26px] tracking-wide"
        style={{ fontFamily: "var(--font-polin)" }}
      >
        ostify
      </span>
    </div>
  );
}

function HostifyHIcon({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="8" width="10" height="28" rx="2.5" fill="#006eff" />
      <rect x="2" y="2" width="10" height="8" rx="2.5" fill="#006eff" opacity="0.55" />
      <rect x="26" y="2" width="10" height="34" rx="2.5" fill="#006eff" />
      <rect x="2" y="15" width="34" height="10" rx="2.5" fill="#006eff" />
      <rect x="12" y="2" width="14" height="8" rx="2.5" fill="#006eff" opacity="0.35" />
    </svg>
  );
}
