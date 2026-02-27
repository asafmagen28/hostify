"use client";

import { useState, useRef, useEffect } from "react";
import {
  USER_AVATAR,
  ICON_BELL,
  ICON_INFO,
  ICON_CHEVRON_DOWN,
} from "@/lib/assets";
import ProfileMenu from "./ProfileMenu";
import NotificationsMenu from "./NotificationsMenu";

interface HeaderProps {
  onMenuOpen?: () => void;
}

export default function Header({ onMenuOpen }: HeaderProps) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const profileWrapperRef = useRef<HTMLDivElement>(null);
  const notifWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (profileOpen && profileWrapperRef.current && !profileWrapperRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
      if (notifOpen && notifWrapperRef.current && !notifWrapperRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setProfileOpen(false);
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [profileOpen, notifOpen]);

  return (
    <header className="flex items-center justify-end h-[60px] md:h-[79px] px-4 md:px-[54px] gap-3 md:gap-[50px] w-full mt-2 md:mt-[1.5vh]">
      {/* User section */}

      <div className="flex items-center gap-[6px]">
        <button
          className="flex items-center gap-[6px] transition-colors cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-150"
          aria-label="מרכז המידע"
        >
          <span
            className="size-[28px] md:size-[32px] rounded-[5px] p-[4px] flex items-center justify-center"
            style={{ background: "#e1f0ff" }}
          >
            <img src={ICON_INFO} alt="" className="size-[16px] md:size-[7px] md:h-[14px] object-contain" />
          </span>
          <span className="font-polin text-[13px] md:text-[14px] text-[#001c52] hidden md:inline">מרכז המידע</span>
        </button>
      </div>

      {/* Notifications bell — second in DOM = center */}
      <div ref={notifWrapperRef}>
        <button
          className={`relative flex items-center gap-[6px] cursor-pointer active:scale-95 transition-all duration-150 ${!notifOpen ? "hover:opacity-80" : ""}`}
          aria-label="הודעות והתראות"
          aria-expanded={notifOpen}
          aria-haspopup="menu"
          onClick={() => setNotifOpen((v) => !v)}
        >
          <div className="relative">
            <span
              className="size-[28px] md:size-[32px] rounded-[5px] p-[4px] flex items-center justify-center"
              style={{ background: "#e1f0ff" }}
            >
              <img src={ICON_BELL} alt="" className="size-[14px] md:size-[16px] object-contain" />
            </span>
            {/* Blue notification dot */}
            <span
              className="absolute -top-[3px] -right-[3px] size-[14px] md:size-[16px] rounded-full bg-[#006eff] border-[2px] border-white"
            />
            {notifOpen && <NotificationsMenu onClose={() => setNotifOpen(false)} />}
          </div>
          <span className="font-polin text-[13px] md:text-[14px] text-[#001c52] hidden md:inline">הודעות והתראות</span>
        </button>
      </div>

      {/* Info center — third in DOM = leftmost in RTL */}

      <div className="relative" ref={profileWrapperRef}>
        <button
          className={`flex items-center gap-[10px] md:gap-[12px] cursor-pointer active:scale-95 transition-all duration-150 ${!profileOpen ? "hover:opacity-80" : ""}`}
          onClick={() => setProfileOpen((v) => !v)}
          aria-expanded={profileOpen}
          aria-haspopup="menu"
        >
          {/* Avatar first → rightmost in RTL */}
          <div className="relative size-[36px] md:size-[40px] rounded-full overflow-visible">
            <div className="size-[36px] md:size-[40px] rounded-full overflow-hidden">
              <img src={USER_AVATAR} alt="eldad elhadad" className="w-full h-full object-cover" />
            </div>
            {profileOpen && <ProfileMenu onClose={() => setProfileOpen(false)} />}
          </div>

          {/* Name + username — hidden on mobile */}
          <div className="text-right hidden md:block">
            <div className="font-polin-bold text-[13px] md:text-[14px] text-[#001c52] font-extrabold">eldad elhadad</div>
            <div className="font-polin text-[12px] md:text-[13px] text-[#001c52] opacity-50">@username</div>
          </div>

          {/* Chevron last → leftmost in RTL — hidden on mobile */}
          <img
            src={ICON_CHEVRON_DOWN}
            alt=""
            className={`size-[8px] object-contain opacity-50 hidden md:block transition-transform duration-200 ${profileOpen ? "rotate-90" : "rotate-0"}`}
          />
        </button>
      </div>

      {/* Hamburger — mobile only, last in DOM → leftmost in RTL */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2 flex-shrink-0 cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-150"
        aria-label="פתח תפריט"
        onClick={onMenuOpen}
      >
        <span className="block w-[22px] h-[2px] rounded bg-[#001c52]" />
        <span className="block w-[22px] h-[2px] rounded bg-[#001c52]" />
        <span className="block w-[22px] h-[2px] rounded bg-[#001c52]" />
      </button>
    </header >
  );
}
