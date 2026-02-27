"use client";

import {
  ICON_MANAGE_SERVER,
  ICON_MANAGE_DETAILS,
  ICON_MANAGE_SWITCH,
  ICON_MANAGE_CANCEL,
} from "@/lib/assets";

const ITEMS = [
  { label: "התחברות לשרת", icon: ICON_MANAGE_SERVER, alt: "server" },
  { label: "פירוט", icon: ICON_MANAGE_DETAILS, alt: "details" },
  { label: "החלפת מסלול", icon: ICON_MANAGE_SWITCH, alt: "switch" },
  { label: "ביטול מנוי", icon: ICON_MANAGE_CANCEL, alt: "cancel" },
];

interface ManageMenuProps {
  onClose: () => void;
}

export default function ManageMenu({ onClose }: ManageMenuProps) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 w-[208px] bg-white rounded-[19px] shadow-lg py-[24px] px-[14px]"
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
              <img src={icon} alt={alt} className="size-[20px] object-contain flex-shrink-0" />
              <span className="font-polin text-[14px] text-black leading-none">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
