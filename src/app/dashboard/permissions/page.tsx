import { USER_AVATAR } from "@/lib/assets";

export default function PermissionsPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-polin text-[14px] text-[#001c51]/50 mb-3">
        <a href="/dashboard" className="hover:text-[#006eff] transition-colors">ראשי</a>
        <span>/</span>
        <span className="font-polin-bold text-[#001c51]">הרשאות</span>
      </div>

      {/* Page title */}
      <h1
        className="text-[#006eff] font-polin-bold mb-4"
        style={{ fontSize: "50px", lineHeight: 1.1 }}
      >
        מורשי גישה לחשבון
      </h1>

      {/* Description */}
      <p className="font-polin text-[18px] text-black leading-8 mb-8 max-w-2xl">
        ניתן להזמין אנשים נוספים לגשת לחשבון שלך. הם יוכלו לראות ולנהל את כל המידע בחשבון לפי ההרשאות שתגדיר להם.
      </p>

      {/* Invite button */}
      <button
        className="flex items-center gap-2 text-white font-polin text-[18px] mb-10 transition-opacity hover:opacity-90"
        style={{
          background: "linear-gradient(99.7deg, #006eff 0%, #004299 100%)",
          height: "52px",
          padding: "8px 20px",
          borderRadius: "7px",
          width: "187px",
        }}
      >
        הזמנת אנשים
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M3 8h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Column headers */}
      <div className="flex items-center px-6 mb-3 font-polin-bold text-[16px] text-[#001c52] opacity-50">
        <div className="w-64">שם</div>
        <div className="flex-1">מייל</div>
        <div className="w-48">חיבור אחרון</div>
        <div className="w-40">הרשאה</div>
        <div className="w-32">סטטוס</div>
      </div>

      {/* User row card */}
      <div
        className="bg-white flex items-center shadow-sm mb-4 py-[30px] px-6"
        style={{ borderRadius: "20px" }}
      >
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden ml-4 flex-shrink-0">
          <img src={USER_AVATAR} alt="אלדד אלחדד" className="w-full h-full object-cover" />
        </div>

        {/* Name + email */}
        <div className="w-64">
          <div className="font-polin-bold text-[18px] text-[#001c52]">אלדד אלחדד</div>
          <div className="font-polin text-[16px] text-[#001c52] opacity-50">eldad@example.com</div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Last login */}
        <div className="w-48 font-polin text-[16px] text-[#001c52]">
          <span className="font-polin-bold">מועד התחברות אחרון:</span> לפני דקה
        </div>

        {/* Permission */}
        <div className="w-40">
          <span
            className="font-polin text-[16px] text-[#006eff] px-3 py-1 rounded-full"
            style={{ background: "#e1f0ff" }}
          >
            <span className="font-polin-bold">הרשאה:</span> אדמין
          </span>
        </div>

        {/* Status label */}
        <div className="w-32 text-right">
          <span className="font-polin-bold text-[16px] text-[#999]">
            חשבון ראשי / אתם
          </span>
        </div>
      </div>

      {/* Footnote */}
      <p className="font-polin text-[18px] text-[#001c51]/50 mt-4">
        • לבעל החשבון תמיד יש הרשאות מלאות
      </p>
    </div>
  );
}
