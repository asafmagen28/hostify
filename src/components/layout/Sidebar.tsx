"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ICON_HOME,
  ICON_PERMISSIONS,
  ICON_PARTNERS,
  ICON_PAYMENTS,
  ICON_LOGOUT,
  ICON_PLUS_H,
  ICON_PLUS_V,
} from "@/lib/assets";

const navItems = [
  { label: "ראשי", href: "/dashboard", icon: ICON_HOME },
  { label: "מורשי גישה", href: "/dashboard/permissions", icon: ICON_PERMISSIONS },
  { label: "חשבון שותפים", href: "/dashboard/partners", icon: ICON_PARTNERS },
  { label: "תשלומים", href: "/dashboard/payments", icon: ICON_PAYMENTS },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[280px] flex-shrink-0 flex flex-col relative z-10" style={{ minHeight: "100vh" }}>
      {/* Logo */}
      <div className="px-6 pt-8 pb-6 flex justify-end">
        <HostifyLogo />
      </div>

      {/* Nav items */}
      <nav className="flex flex-col gap-[50px] px-4 flex-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-[20px] h-[60px] px-[10px] transition-all relative ${
                isActive ? "nav-active" : "hover:bg-white/5 rounded-[14px]"
              }`}
            >
              {/* Icon container */}
              <span
                className="size-[37px] rounded-[7px] p-[6px] flex-shrink-0 flex items-center justify-center"
                style={{
                  background: isActive
                    ? "rgba(255,255,255,0.15)"
                    : "rgba(255,255,255,0.2)",
                }}
              >
                <img src={item.icon} alt="" className="size-[25px] object-contain" />
              </span>
              {/* Label */}
              <span
                className="font-polin text-[22px] text-[#e1f0ff]"
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="px-4 pb-8 flex flex-col gap-4">
        {/* Quick actions */}
        <div className="flex items-center justify-between px-[10px] py-3">
          <span className="font-polin text-[22px] text-[#e1f0ff]">פעולות מהירות</span>
          {/* Blue glowing plus button */}
          <button
            className="size-[41px] rounded-[20.5px] flex items-center justify-center p-[10.25px]"
            style={{
              background: "#006eff",
              boxShadow: "0px 0px 28.472px 0px #006eff",
            }}
            aria-label="פעולות מהירות"
          >
            <div className="relative size-[20.5px]">
              <img src={ICON_PLUS_H} alt="" className="absolute inset-0 w-full h-full object-contain" />
              <img src={ICON_PLUS_V} alt="" className="absolute inset-0 w-full h-full object-contain" />
            </div>
          </button>
        </div>

        {/* Logout */}
        <button className="flex items-center gap-[20px] px-[10px] py-3 rounded-[14px] hover:bg-white/5 transition-all w-full">
          <span
            className="size-[37px] rounded-[7px] p-[6px] flex-shrink-0 flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            <img src={ICON_LOGOUT} alt="" className="size-[25px] object-contain" />
          </span>
          <span className="font-polin text-[22px] text-[#e1f0ff]">יציאה</span>
        </button>
      </div>
    </aside>
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
      {/* Left pillar - shorter, starts lower (stepped design) */}
      <rect x="2" y="8" width="10" height="28" rx="2.5" fill="#006eff" />
      {/* Small top-left accent square */}
      <rect x="2" y="2" width="10" height="8" rx="2.5" fill="#006eff" opacity="0.55" />
      {/* Right pillar - full height */}
      <rect x="26" y="2" width="10" height="34" rx="2.5" fill="#006eff" />
      {/* Crossbar */}
      <rect x="2" y="15" width="34" height="10" rx="2.5" fill="#006eff" />
      {/* Step accent - top of left pillar connects to crossbar area */}
      <rect x="12" y="2" width="14" height="8" rx="2.5" fill="#006eff" opacity="0.35" />
    </svg>
  );
}
