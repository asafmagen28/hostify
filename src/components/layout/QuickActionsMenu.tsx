"use client";

import {
  ICON_QA_TRANSFER_HOST,
  ICON_QA_TRANSFER_CLIENT,
  ICON_QA_BUY_DOMAIN,
  ICON_QA_TRANSFER_DOMAIN,
  ICON_QA_CREDIT_CARD,
  ICON_QA_INVOICES,
  ICON_QA_SUPPORT,
  ICON_QA_CANCEL,
} from "@/lib/assets";

const ITEMS = [
  { label: "להגיש בקשה להעברת אתר מאחסון אחר", icon: ICON_QA_TRANSFER_HOST,   alt: "transfer host" },
  { label: "להעביר אתר שבניתי ללקוח",            icon: ICON_QA_TRANSFER_CLIENT, alt: "transfer client" },
  { label: "רכישת כתובת דומיין",                  icon: ICON_QA_BUY_DOMAIN,      alt: "buy domain" },
  { label: "להעביר כתובת דומיין אליי",            icon: ICON_QA_TRANSFER_DOMAIN, alt: "transfer domain" },
  { label: "עדכון פרטי כרטיס האשראי",             icon: ICON_QA_CREDIT_CARD,     alt: "credit card" },
  { label: "הורדת חשבוניות",                       icon: ICON_QA_INVOICES,        alt: "invoices" },
  { label: "פנייה לתמיכה טכנית ושירות",           icon: ICON_QA_SUPPORT,         alt: "support" },
  { label: "ביטול מנויים",                         icon: ICON_QA_CANCEL,          alt: "cancel" },
];

interface QuickActionsMenuProps {
  onClose: () => void;
}

export default function QuickActionsMenu({ onClose }: QuickActionsMenuProps) {
  return (
    <div
      className="absolute right-full bottom-0 mr-3 z-50 w-[280px] bg-white rounded-[19px] shadow-lg py-[17px] px-[16px]"
      role="menu"
    >
      <ul className="flex flex-col gap-[25px]">
        {ITEMS.map(({ label, icon, alt }) => (
          <li key={label}>
            <button
              className="flex items-center gap-[15px] w-full text-right"
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
