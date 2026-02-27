"use client";

import { NOTIF_INFO_ICON } from "@/lib/assets";

const ITEMS = [
  {
    text: "האתר שלך hostify.co.il עומד לפוג בעוד 7 ימים. אנא חדש את המנוי שלך כדי להמשיך ליהנות מהשירות ללא הפרעה.",
  },
  {
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
      {/* Title */}
      <div className="px-[24px] pt-[17px] pb-[10px] text-right font-polin text-[18px] text-[#006eff]">
        הודעות והתראות
      </div>

      <hr className="border-t border-[#e5e7eb] mx-[24px]" />

      {/* Notification rows */}
      {ITEMS.map((item, i) => (
        <div key={i}>
          <div className="flex justify-end items-start gap-[12px] px-[24px] py-[14px]">
            <img src={NOTIF_INFO_ICON} alt="" className="size-[23.625px] shrink-0 mt-[8px] object-contain" />
            <p className="font-polin text-[12px] text-black text-right w-[348px]">{item.text}</p>
          </div>
          {i < ITEMS.length - 1 && <hr className="border-t border-[#e5e7eb] mx-[24px]" />}
        </div>
      ))}
    </div>
  );
}
