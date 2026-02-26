"use client";

import {
  USER_AVATAR,
  ICON_BELL,
  NOTIF_DOT_RED,
  ICON_INFO,
  ICON_CHEVRON_DOWN,
} from "@/lib/assets";

interface HeaderProps {
  onMenuOpen?: () => void;
}

export default function Header({ onMenuOpen }: HeaderProps) {
  return (
    <header className="flex items-center justify-end h-[6vh] px-[2vh] md:px-[3vh] gap-[׳vh] md:gap-[4vh] w-full mt-[1.5vh]">
      {/* User section */}

      <div className="flex items-center gap-[6px]">
        <button
          className="flex items-center gap-[6px] transition-colors"
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
      <button
        className="relative flex items-center gap-[6px] transition-colors"
        aria-label="הודעות והתראות"
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
        </div>
        <span className="font-polin text-[13px] md:text-[14px] text-[#001c52] hidden md:inline">הודעות והתראות</span>
      </button>

      {/* Info center — third in DOM = leftmost in RTL */}

      <button className="flex items-center gap-[10px] md:gap-[12px]">
        {/* Avatar first → rightmost in RTL */}
        <div className="size-[36px] md:size-[40px] rounded-full overflow-hidden">
          <img src={USER_AVATAR} alt="eldad elhadad" className="w-full h-full object-cover" />
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
          className="size-[8px] object-contain opacity-50 rotate-90 hidden md:block"
        />
      </button>

      {/* Hamburger — mobile only, last in DOM → leftmost in RTL */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2 flex-shrink-0"
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
