import {
  CARD_BG_MASK,
  CARD_CHIP_PATTERN,
  ICON_PENCIL,
} from "@/lib/assets";

export default function PaymentsPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-polin text-[14px] text-navy/50 mb-3">
        <a href="/dashboard" className="hover:text-primary transition-colors">ראשי</a>
        <span>/</span>
        <span className="font-extrabold text-primary">תשלומים</span>
      </div>

      {/* Page title */}
      <h1 className="text-primary font-extrabold mb-8 text-[30px] sm:text-[40px] lg:text-[50px]" style={{ lineHeight: 1.1 }}>
        תשלומים
      </h1>

      {/* Top row: credit card + payment summary */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        {/* Credit card visual */}
        <div
          className="w-full lg:w-[693px] lg:h-[405px] flex-shrink-0 relative overflow-hidden"
          style={{
            borderRadius: "35px",
            minHeight: "260px",
            background: "linear-gradient(178.38deg, #006eff 13.491%, #001c51 109.75%)",
          }}
        >
          {/* Card mask overlay (texture/glare from Figma) */}
          <img
            src={CARD_BG_MASK}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Card content */}
          <div
            className="relative z-10 h-full flex flex-col justify-between"
            style={{ padding: "22px 29px", minHeight: "260px" }}
          >
            {/* Top row: placeholder text (start/right in RTL) + button (end/left in RTL) */}
            <div className="flex justify-between items-start">
              <p
                className="text-white/80 font-polin"
                style={{ fontSize: "15px", letterSpacing: "1.1005px" }}
              >
                *לורם איפסום דולור סיט אמט איבן לורם
              </p>
              <button
                className="font-polin text-[18px] text-primary transition-opacity hover:opacity-90"
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

            {/* Chip — centered */}
            <div className="flex justify-center">
              <div
                className="relative overflow-hidden"
                style={{
                  width: "72px",
                  height: "48px",
                  borderRadius: "11px",
                  background: "radial-gradient(circle at 40% 40%, #fff 0%, #dddcda 100%)",
                }}
              >
                <img
                  src={CARD_CHIP_PATTERN}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card number + expiry side-by-side */}
            <div className="flex justify-between items-end">
              {/* First in DOM → inline-start (RIGHT in RTL): expiry */}
              <div
                className="text-white/70 font-polin"
                style={{ fontSize: "30.815px", letterSpacing: "1.1005px" }}
              >
                09/25
              </div>
              {/* Last in DOM → inline-end (LEFT in RTL): card number */}
              <div
                className="text-white/90 font-polin"
                style={{ fontSize: "30.815px", letterSpacing: "1.1005px" }}
              >
                XXXX XXXX XXXX 1289
              </div>
            </div>
          </div>
        </div>

        {/* Payment summary card */}
        <div
          className="bg-white shadow-sm flex flex-col justify-center items-center w-full lg:w-[743px] lg:h-[406px]"
          style={{ borderRadius: "35px", minHeight: "220px", padding: "28px" }}
        >
          <div className="flex flex-col gap-[35px] items-center w-full max-w-[369px]">
            <p className="font-polin text-[22px] text-navy text-center">
              יש לך{" "}
              <span className="font-polin font-extrabold text-primary">2 דרישות תשלום</span>{" "}
              בסך של{" "}
              <span className="font-polin font-extrabold text-primary">₪350</span>{" "}
              לתשלום
            </p>
            <button
              className="btn-primary text-white font-polin text-[18px] transition-opacity hover:opacity-90 rounded-[7px]"
              style={{
                height: "43px",
                padding: "8px 20px",
              }}
            >
              לתשלום היתרות בחשבון
            </button>
          </div>
        </div>
      </div>

      {/* Personal details card */}
      <div
        className="bg-white shadow-sm w-full px-6 sm:px-8 lg:px-[52px] py-8 lg:py-[48px]"
        style={{ borderRadius: "35px" }}
      >
        <div className="flex items-start justify-between mb-6">
          <button
            className="btn-primary text-white font-polin text-[18px] transition-opacity hover:opacity-90 flex items-center gap-[15px] rounded-[7px]"
            style={{
              height: "43px",
              padding: "8px 20px",
            }}
          >
            <img src={ICON_PENCIL} alt="" className="w-[18px] h-[18px] object-contain" />
            עריכת פרטים
          </button>
          <div className="flex flex-col gap-[20px] items-end text-right">
            <h3 className="font-polin font-extrabold text-[22px] text-navy">פרטים אישיים</h3>
            <p className="font-polin text-[16px] text-navy opacity-50">החשבוניות שלך יונפקו עם הפרטים הבאים:</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[23px]">
          {/* Name / company field */}
          <div
            className="flex flex-col justify-center flex-1"
            style={{
              border: "1px solid #a8a8a8",
              minHeight: "110px",
              padding: "20px 25px",
              borderRadius: "15px",
            }}
          >
            <div className="font-polin text-[14px] text-navy opacity-60">שם או שם חברה</div>
            <div className="font-polin font-extrabold text-[20px] text-navy">עומר מיראן</div>
          </div>

          {/* Address field */}
          <div
            className="flex flex-col justify-center flex-1"
            style={{
              border: "1px solid #a8a8a8",
              minHeight: "110px",
              padding: "20px 25px",
              borderRadius: "15px",
            }}
          >
            <div className="font-polin text-[14px] text-navy opacity-60">כתובת</div>
            <div className="font-polin font-extrabold text-[20px] text-navy">העמקים 119, רמת גן, ישראל</div>
          </div>
        </div>
      </div>

      {/* Transaction history */}
      <div className="bg-white rounded-[35px] p-7 shadow-sm mt-6">
        <h3 className="font-polin font-extrabold text-[22px] text-navy mb-6">היסטוריית עסקאות</h3>

        <div className="overflow-x-auto">
          {/* Table headers */}
          <div className="flex items-center px-4 mb-3 font-polin font-extrabold text-[16px] text-navy opacity-50 min-w-[480px]">
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
              className="flex items-center px-4 py-4 rounded-[7px] hover:bg-[#f8fbff] transition-colors min-w-[480px]"
            >
              <div className="flex-1 font-polin text-[18px] text-navy">{tx.desc}</div>
              <div className="w-36 font-polin text-[16px] text-navy opacity-60">{tx.date}</div>
              <div className="w-28 text-right font-polin font-extrabold text-[18px] text-navy">{tx.amount}</div>
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
    </div>
  );
}
