export default function PaymentsPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-polin text-[14px] text-[#001c51]/50 mb-3">
        <a href="/dashboard" className="hover:text-[#006eff] transition-colors">ראשי</a>
        <span>/</span>
        <span className="font-polin-bold text-[#001c51]">תשלומים</span>
      </div>

      {/* Page title */}
      <h1
        className="text-[#006eff] font-polin-bold mb-8"
        style={{ fontSize: "50px", lineHeight: 1.1 }}
      >
        תשלומים
      </h1>

      {/* Top row: summary + credit card */}
      <div className="flex gap-6 mb-8">
        {/* Payment summary card — fixed width per Figma */}
        <div
          className="bg-white shadow-sm flex flex-col justify-between"
          style={{ height: "406px", borderRadius: "35px", width: "743px", padding: "28px" }}
        >
          <div className="text-center">
            <p className="font-polin text-[22px] text-[#001c52] mb-2 text-center">
              יש לך{" "}
              <span className="font-polin-bold text-[#006eff]">2 דרישות תשלום</span>{" "}
              בסך של{" "}
              <span className="font-polin-bold text-[#006eff]">₪350</span>{" "}
              לתשלום
            </p>
            <p className="font-polin text-[18px] text-[#001c52] opacity-50 text-center">
              יש לשלם עד לתאריך 01/03/2026
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="text-white font-polin text-[18px] transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(99.7deg, #006eff 0%, #004299 100%)",
                height: "43px",
                padding: "8px 20px",
                borderRadius: "7px",
              }}
            >
              לתשלום היתרות בחשבון
            </button>
          </div>
        </div>

        {/* Credit card visual — fixed width per Figma */}
        <div
          className="flex-shrink-0 flex flex-col justify-between relative overflow-hidden"
          style={{
            borderRadius: "35px",
            height: "405px",
            width: "693px",
            background: "linear-gradient(178.38deg, #006eff 0%, #001c52 100%)",
            padding: "28px",
          }}
        >
          {/* Card decorative circles */}
          <div
            className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-20"
            style={{ background: "white" }}
          />
          <div
            className="absolute -bottom-8 right-4 w-28 h-28 rounded-full opacity-10"
            style={{ background: "white" }}
          />

          {/* Chip */}
          <div className="flex items-start justify-between relative z-10">
            <div
              className="w-10 h-8"
              style={{
                borderRadius: "11px",
                background: "linear-gradient(135deg, #ffd700 0%, #cc9900 100%)",
              }}
            />
            <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
              <circle cx="15" cy="12.5" r="12.5" fill="rgba(255,255,255,0.4)" />
              <circle cx="25" cy="12.5" r="12.5" fill="rgba(255,255,255,0.25)" />
            </svg>
          </div>

          {/* Card number */}
          <div className="relative z-10">
            <div
              className="text-white/90 mb-1"
              style={{
                fontFamily: "var(--font-polin)",
                fontSize: "30.815px",
                letterSpacing: "1.1005px",
              }}
            >
              XXXX XXXX XXXX 1289
            </div>
            <div
              className="text-white/70"
              style={{
                fontFamily: "var(--font-polin)",
                fontSize: "30.815px",
                letterSpacing: "1.1005px",
              }}
            >
              09/25
            </div>
          </div>

          {/* Update button */}
          <button
            className="relative z-10 font-polin text-[18px] text-[#006eff] transition-opacity hover:opacity-90 self-start"
            style={{
              background: "white",
              height: "43px",
              padding: "8px 20px",
              borderRadius: "7px",
            }}
          >
            עדכון פרטי כרטיס
          </button>
        </div>
      </div>

      {/* Personal details card — fixed width per Figma */}
      <div
        className="bg-white shadow-sm"
        style={{
          height: "321px",
          padding: "48px 52px",
          borderRadius: "35px",
          width: "1457px",
        }}
      >
        <div className="flex items-start justify-between mb-6">
          <button
            className="text-white font-polin text-[18px] transition-opacity hover:opacity-90 flex items-center gap-2"
            style={{
              background: "linear-gradient(99.7deg, #006eff 0%, #004299 100%)",
              height: "43px",
              padding: "8px 20px",
              borderRadius: "7px",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11 2l3 3-8 8H3v-3l8-8z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            עריכת פרטים
          </button>
          <div className="text-right">
            <h3 className="font-polin-bold text-[22px] text-[#001c52]">פרטים אישיים</h3>
            <p className="font-polin text-[16px] text-[#001c52] opacity-50 mt-1">החשבונות שלך יוסקו עם הפרטים הבאים:</p>
          </div>
        </div>
        <div className="flex gap-5">
          {/* Address field */}
          <div
            className="flex flex-col justify-center"
            style={{
              border: "1px solid #a8a8a8",
              height: "110px",
              padding: "40px 25px",
              borderRadius: "15px",
              width: "664px",
            }}
          >
            <div className="font-polin text-[14px] text-[#001c52] opacity-60">כתובת</div>
            <div className="font-polin-bold text-[20px] text-[#001c52]">העמקים 119, רמת גן, ישראל</div>
          </div>

          {/* Name / company field */}
          <div
            className="flex flex-col justify-center"
            style={{
              border: "1px solid #a8a8a8",
              height: "110px",
              padding: "40px 25px",
              borderRadius: "15px",
              width: "664px",
            }}
          >
            <div className="font-polin text-[14px] text-[#001c52] opacity-60">שם / שם חברה</div>
            <div className="font-polin-bold text-[20px] text-[#001c52]">עומר מיראן</div>
          </div>
        </div>
      </div>

      {/* Transaction history */}
      <div className="bg-white rounded-[35px] p-7 shadow-sm mt-6">
        <h3 className="font-polin-bold text-[22px] text-[#001c52] mb-6">היסטוריית עסקאות</h3>

        {/* Table headers */}
        <div className="flex items-center px-4 mb-3 font-polin-bold text-[16px] text-[#001c52] opacity-50">
          <div className="flex-1">תיאור</div>
          <div className="w-36">תאריך</div>
          <div className="w-28 text-right">סכום</div>
          <div className="w-28 text-center">סטטוס</div>
        </div>

        {/* Transaction rows */}
        {[
          { desc: "אחסון וורדפרס — גוניור", date: "01/02/2026", amount: "₪120", status: "שולם" },
          { desc: "אחסון וורדפרס — גוניור", date: "01/01/2026", amount: "₪120", status: "שולם" },
          { desc: "תעודת SSL", date: "15/12/2025", amount: "₪89", status: "שולם" },
          { desc: "אחסון וורדפרס — גוניור", date: "01/12/2025", amount: "₪120", status: "שולם" },
        ].map((tx, i) => (
          <div
            key={i}
            className="flex items-center px-4 py-4 rounded-[7px] hover:bg-[#f8fbff] transition-colors"
          >
            <div className="flex-1 font-polin text-[18px] text-[#001c52]">{tx.desc}</div>
            <div className="w-36 font-polin text-[16px] text-[#001c52] opacity-60">{tx.date}</div>
            <div className="w-28 text-right font-polin-bold text-[18px] text-[#001c52]">{tx.amount}</div>
            <div className="w-28 flex justify-center">
              <span
                className="px-3 py-1 rounded-full font-polin text-[14px]"
                style={{ background: "#e1f8ee", color: "#00a550" }}
              >
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
