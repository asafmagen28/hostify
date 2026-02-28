"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  USER_AVATAR,
  ICON_BELL,
  ICON_INFO,
  ICON_CHEVRON_DOWN,
} from "@/lib/assets";
import ProfileMenu from "./ProfileMenu";
import NotificationsMenu from "./NotificationsMenu";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface HeaderProps {
  onMenuOpen?: () => void;
}

export default function Header({ onMenuOpen }: HeaderProps) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const profileWrapperRef = useRef<HTMLDivElement>(null);
  const notifWrapperRef = useRef<HTMLDivElement>(null);

  const closeProfile = useCallback(() => setProfileOpen(false), []);
  const closeNotif = useCallback(() => setNotifOpen(false), []);
  useOutsideClick(profileWrapperRef, closeProfile, profileOpen);
  useOutsideClick(notifWrapperRef, closeNotif, notifOpen);

  return (
    <header className="flex items-center justify-end h-[60px] md:h-[79px] px-4 md:px-[54px] gap-3 md:gap-[50px] w-full mt-4 md:mt-[3vh]">

      <div className="flex items-center gap-[6px]">
        <button
          className="flex items-center gap-[6px] cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-150"
          aria-label="מרכז המידע"
        >
          <span className="size-[28px] md:size-[32px] rounded-[5px] p-[4px] flex items-center justify-center bg-badge-bg">
            <img src={ICON_INFO} alt="" className="size-[16px] md:h-[14px] md:w-[7px] object-contain" />
          </span>
          <span className="font-polin text-[13px] md:text-[14px] text-navy hidden md:inline">מרכז המידע</span>
        </button>
      </div>

      {/* Notifications bell */}
      <div ref={notifWrapperRef} className="relative">
        <button
          className={`relative flex items-center gap-[6px] cursor-pointer active:scale-95 transition-all duration-150 ${!notifOpen ? "hover:opacity-80" : ""}`}
          aria-label="הודעות והתראות"
          aria-expanded={notifOpen}
          aria-haspopup="menu"
          onClick={() => setNotifOpen((v) => !v)}
        >
          <div className="relative">
            <span className="size-[28px] md:size-[32px] rounded-[5px] p-[4px] flex items-center justify-center bg-badge-bg">
              <img src={ICON_BELL} alt="" className="size-[14px] md:size-[16px] object-contain" />
            </span>
            <span className="absolute -top-[3px] -right-[3px] size-[14px] md:size-[16px] rounded-full bg-primary border-[2px] border-white" />
          </div>
          <span className="font-polin text-[13px] md:text-[14px] text-navy hidden md:inline">הודעות והתראות</span>
        </button>
        {notifOpen && <NotificationsMenu onClose={() => setNotifOpen(false)} />}
      </div>

      {/* Profile */}
      <div className="relative" ref={profileWrapperRef}>
        <button
          className={`flex items-center gap-[10px] md:gap-[12px] cursor-pointer active:scale-95 transition-all duration-150 ${!profileOpen ? "hover:opacity-80" : ""}`}
          onClick={() => setProfileOpen((v) => !v)}
          aria-expanded={profileOpen}
          aria-haspopup="menu"
        >
          <div className="size-[36px] md:size-[40px] rounded-full overflow-hidden">
            <Image src={USER_AVATAR} alt="eldad elhadad" width={40} height={40} className="w-full h-full object-cover" />
          </div>

          <div className="text-right hidden md:block">
            <div className="font-polin text-[13px] md:text-[14px] text-navy font-extrabold">eldad elhadad</div>
            <div className="font-polin text-[12px] md:text-[13px] text-navy opacity-50">@username</div>
          </div>

          <Image
            src={ICON_CHEVRON_DOWN}
            alt=""
            width={8}
            height={8}
            className={`object-contain opacity-50 hidden md:block transition-transform duration-200 ${profileOpen ? "rotate-90" : "rotate-0"}`}
          />
        </button>
        {profileOpen && <ProfileMenu onClose={() => setProfileOpen(false)} />}
      </div>

      {/* Hamburger — mobile only */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2 flex-shrink-0 cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-150"
        aria-label="פתח תפריט"
        onClick={onMenuOpen}
      >
        <span className="block w-[22px] h-[2px] rounded bg-navy" />
        <span className="block w-[22px] h-[2px] rounded bg-navy" />
        <span className="block w-[22px] h-[2px] rounded bg-navy" />
      </button>
    </header>
  );
}
