"use client";

import Image from "next/image";
import { NOTIF_INFO_ICON } from "@/lib/assets";

const ITEMS = [
  {
    id: "expiry",
    text: "האתר שלך hostify.co.il עומד לפוג בעוד 7 ימים. אנא חדש את המנוי שלך כדי להמשיך ליהנות מהשירות ללא הפרעה.",
  },
  {
    id: "maintenance",
    text: "עדכון מערכת מתוכנן לתאריך 01.03.2026 בין השעות 02:00–04:00. האתר עשוי להיות בלתי זמין לזמן קצר במהלך התחזוקה.",
  },
];

interface NotificationsMenuProps {
  onClose: () => void;
}

export default function NotificationsMenu({ onClose }: NotificationsMenuProps) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-[8px] w-[440px] max-w-[calc(100vw-2rem)] bg-white rounded-[19px] shadow-lg z-50"
      role="menu"
    >
      <div className="px-[24px] pt-[17px] pb-[10px] text-right font-polin text-[18px] text-primary">
        הודעות והתראות
      </div>

      <hr className="border-t border-[#e5e7eb] mx-[24px]" />

      {ITEMS.map((item, i) => (
        <div key={item.id}>
          <button
            className="flex justify-end items-start gap-[12px] px-[24px] py-[14px] w-full text-right"
            role="menuitem"
            onClick={onClose}
          >
            <Image src={NOTIF_INFO_ICON} alt="" width={24} height={24} className="shrink-0 mt-[8px] object-contain" />
            <p className="font-polin text-[12px] text-black text-right w-[348px]">{item.text}</p>
          </button>
          {i < ITEMS.length - 1 && <hr className="border-t border-[#e5e7eb] mx-[24px]" />}
        </div>
      ))}
    </div>
  );
}
