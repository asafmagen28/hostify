"use client";

import {
  ICON_PROFILE_USER,
  ICON_PROFILE_LOCK,
  ICON_PROFILE_MAIL,
  ICON_PROFILE_SWITCH,
  ICON_PROFILE_POWER,
} from "@/lib/assets";

const ITEMS = [
  { label: "פרופיל", icon: ICON_PROFILE_USER, alt: "user" },
  { label: "אבטחת חשבון", icon: ICON_PROFILE_LOCK, alt: "lock" },
  { label: "הודעות והתראות", icon: ICON_PROFILE_MAIL, alt: "mail" },
  { label: "החלפת חשבון", icon: ICON_PROFILE_SWITCH, alt: "switch" },
  { label: "התנתקות", icon: ICON_PROFILE_POWER, alt: "power" },
];

interface ProfileMenuProps {
  onClose: () => void;
}

export default function ProfileMenu({ onClose }: ProfileMenuProps) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-[80%] mt-2 z-50 w-[208px] bg-white rounded-[19px] shadow-lg py-[24px] px-[14px]"
      role="menu"
    >
      <ul className="flex flex-col gap-[25px]">
        {ITEMS.map(({ label, icon, alt }) => (
          <li key={label}>
            <button
              className="flex items-center gap-[15px] w-full text-right pr-[17px]"
              role="menuitem"
              onClick={onClose}
            >
              {/* Icon on right (RTL natural order) */}
              <img src={icon} alt={alt} className="size-[20px] object-contain flex-shrink-0" />
              <span className="font-polin text-[14px] text-black leading-none">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
