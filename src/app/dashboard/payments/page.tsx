import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CARD_BG_MASK,
  CARD_CHIP_PATTERN,
  ICON_PENCIL,
} from "@/lib/assets";
import SubscriptionCard from "@/components/dashboard/SubscriptionCard";

export const metadata: Metadata = { title: "תשלומים" };

export default function PaymentsPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="flex items-center gap-2 font-polin text-[14px] text-navy mb-3">
        <Link href="/dashboard" className="hover:text-primary transition-colors">ראשי</Link>
        <span>/</span>
        <span className="font-extrabold text-primary">תשלומים</span>
      </nav>

      {/* Page title */}
      <h1 className="text-primary font-extrabold mb-[clamp(12px,1.15vw,32px)] text-[30px] sm:text-[40px] lg:text-[50px]" style={{ lineHeight: 1.1 }}>
        תשלומים
      </h1>

      {/* Top row: credit card + payment summary */}
      <div className="flex flex-col lg:flex-row gap-6 mb-[clamp(8px,0.85vw,24px)]">
        {/* Credit card visual */}
        <div
          className="w-full lg:w-1/2 relative overflow-hidden"
          style={{
            borderRadius: "35px",
            minHeight: "220px",
            aspectRatio: "693/405",
            maxHeight: "clamp(260px, 38vh, 420px)",
            background: "linear-gradient(178.38deg, #006eff 13.491%, #001c51 109.75%)",
          }}
        >
          {/* Card mask overlay */}
          <Image
            src={CARD_BG_MASK}
            alt=""
            fill
            className="object-cover pointer-events-none"
          />

          {/* Card content */}
          <div
            className="relative z-10 h-full flex flex-col justify-between"
            style={{ padding: "clamp(14px, 1.15vw, 26px) 29px" }}
          >
            <div className="flex justify-between items-start">
              <p
                className="text-white/80 font-polin"
                style={{ fontSize: "clamp(12px, 0.9vw, 16px)", letterSpacing: "1.1005px" }}
              >
                *לורם איפסום דולור סיט אמט איבן לורם
              </p>
              <button
                className="font-polin text-[18px] text-primary transition-opacity hover:opacity-90"
                style={{ background: "white", height: "43px", padding: "8px 20px", borderRadius: "7px" }}
              >
                עדכון פרטי כרטיס
              </button>
            </div>

            {/* Chip */}
            <div className="flex justify-end ml-8">
              <div
                className="relative overflow-hidden"
                style={{
                  width: "clamp(48px, 3.75vw, 72px)",
                  height: "clamp(32px, 2.5vw, 48px)",
                  borderRadius: "11px",
                  background: "radial-gradient(circle at 40% 40%, #fff 0%, #dddcda 100%)",
                }}
              >
                <Image src={CARD_CHIP_PATTERN} alt="" fill className="object-cover" />
              </div>
            </div>

            {/* Card number + expiry */}
            <div className="flex justify-between items-end">
              <div
                className="text-white/70 font-polin"
                style={{ fontSize: "clamp(16px, 1.6vw, 32px)", letterSpacing: "1.1005px" }}
              >
                09/25
              </div>
              <div
                className="text-white/90 font-polin"
                style={{ fontSize: "clamp(16px, 1.6vw, 32px)", letterSpacing: "1.1005px" }}
              >
                XXXX XXXX XXXX 1289
              </div>
            </div>
          </div>
        </div>

        {/* Payment summary card */}
        <div
          className="bg-white shadow-sm flex flex-col justify-center items-center w-full lg:w-1/2"
          style={{ borderRadius: "35px", padding: "clamp(18px, 1.46vw, 32px)" }}
        >
          <div className="flex flex-col gap-[clamp(20px,1.82vw,40px)] items-center w-full max-w-[369px]">
            <p className="font-polin text-[22px] text-navy text-center">
              יש לך{" "}
              <span className="font-polin font-extrabold text-primary">2 דרישות תשלום</span>{" "}
              בסך של{" "}
              <span className="font-polin font-extrabold text-primary">₪350</span>{" "}
              לתשלום
            </p>
            <button
              className="btn-primary text-white font-polin text-[18px] transition-opacity hover:opacity-90 rounded-[7px]"
              style={{ height: "43px", padding: "8px 20px" }}
            >
              לתשלום היתרות בחשבון
            </button>
          </div>
        </div>
      </div>

      {/* Personal details card */}
      <div
        className="bg-white shadow-sm w-full px-6 sm:px-8 lg:px-[52px] py-[clamp(14px,1.15vw,36px)] mb-[clamp(8px,0.85vw,24px)]"
        style={{ borderRadius: "35px" }}
      >
        <div className="flex items-start justify-between mb-[clamp(10px,0.85vw,24px)]">
          <div className="flex flex-col gap-[clamp(12px,1.04vw,24px)] items-start text-right">
            <h3 className="font-polin font-extrabold text-[22px] text-navy">פרטים אישיים</h3>
            <p className="font-polin text-[16px] text-navy">החשבוניות שלך יונפקו עם הפרטים הבאים:</p>
          </div>
          <button
            className="btn-primary text-white font-polin text-[18px] transition-opacity hover:opacity-90 flex items-center gap-[15px] rounded-[7px]"
            style={{ height: "43px", padding: "8px 20px" }}
          >
            <Image src={ICON_PENCIL} alt="" width={18} height={18} className="object-contain" />
            עריכת פרטים
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-[clamp(14px,1.18vw,28px)]">
          <div
            className="flex flex-col justify-center flex-1"
            style={{
              border: "1px solid #a8a8a8",
              minHeight: "clamp(70px, 8vh, 90px)",
              padding: "clamp(14px,1.15vw,36px) clamp(20px,2vw,25px)",
              borderRadius: "15px",
            }}
          >
            <div className="font-polin text-[14px] text-navy opacity-60">שם או שם חברה</div>
            <div className="font-polin font-extrabold text-[20px] text-navy">עומר מיראן</div>
          </div>
          <div
            className="flex flex-col justify-center flex-1"
            style={{
              border: "1px solid #a8a8a8",
              minHeight: "clamp(70px, 8vh, 90px)",
              padding: "clamp(14px,1.15vw,36px) clamp(20px,2vw,25px)",
              borderRadius: "15px",
            }}
          >
            <div className="font-polin text-[14px] text-navy opacity-60">כתובת</div>
            <div className="font-polin font-extrabold text-[20px] text-navy">העמקים 119, רמת גן, ישראל</div>
          </div>
        </div>
      </div>

      {/* Section A — ביטול מנויים (Cancel Subscriptions) */}
      <div
        className="bg-white shadow-sm w-full px-6 sm:px-8 lg:px-[52px] py-[clamp(14px,3.33vh,36px)] mb-[clamp(8px,2.22vh,24px)]"
        style={{ borderRadius: "35px" }}
      >
        {/* Header row */}
        <div className="flex items-start justify-between mb-[clamp(10px,2.22vh,24px)]">
          <div className="flex flex-col gap-[20px] items-start text-right flex-1">
            <h3 className="font-polin font-extrabold text-[22px] text-navy">ביטול מנויים</h3>
            <p className="font-polin text-[16px] text-navy">מכאן תוכלו לבטל לורם איפסום</p>
          </div>
          <button
            className="btn-primary text-white font-polin text-[18px] transition-opacity hover:opacity-90 flex items-center gap-[15px] rounded-[7px]"
            style={{ height: "43px", padding: "8px 20px" }}
          >
            <Image src={ICON_PENCIL} alt="" width={18} height={18} className="object-contain" />
            עריכת פרטים
          </button>
        </div>

        {/* Two subscription cards */}
        <div className="flex flex-col sm:flex-row gap-[clamp(14px,1.18vw,37px)]">
          <SubscriptionCard
            badge="חבילת אחסון אתרים/גוניור"
            lines={[
              { label: "שם החבילה", value: "גוניור" },
              { label: "מס' מזהה", value: "ff53cmwsdk" },
            ]}
          />
          <SubscriptionCard
            badge="דומיינים"
            lines={[
              { label: "כתובת דומיין", value: "גוניור" },
              { label: "תאריך חידוש הבא", value: "15.01.2027" },
            ]}
          />
        </div>
      </div>

      {/* Section B — Invoices Table */}
      <div
        className="bg-white shadow-sm w-full overflow-x-auto"
        style={{
          borderRadius: "26px",
          paddingTop: "clamp(14px,2vh,48px)",
          paddingBottom: "clamp(14px,2vh,48px)",
          paddingLeft: "clamp(20px,2.4vw,54px)",
          paddingRight: "clamp(20px,2.4vw,54px)",
        }}
      >
        {/* Table header row */}
        <div
          className="flex items-center border-b border-[#f0f0f0]"
          style={{
            gap: "clamp(40px,6.25vw,120px)",
            minHeight: "clamp(55px,6.75vh,73px)",
          }}
        >
          <div className="font-polin font-extrabold text-[18px] text-navy w-[clamp(100px,7.6vw,146px)] text-center shrink-0">דרישת תשלום מס&apos;</div>
          <div className="font-polin font-extrabold text-[18px] text-navy w-[clamp(90px,6.67vw,128px)] text-center shrink-0">תאריך יצירה</div>
          <div className="font-polin font-extrabold text-[18px] text-navy w-[clamp(85px,5.73vw,110px)] text-center shrink-0">לתשלום עד</div>
          <div className="font-polin font-extrabold text-[18px] text-navy w-[clamp(90px,6.67vw,128px)] text-center shrink-0">סך הכל לתשלום</div>
          <div className="font-polin font-extrabold text-[18px] text-navy w-[clamp(80px,6.67vw,128px)] text-center shrink-0">סטטוס</div>
          <div className="font-polin font-extrabold text-[18px] text-navy w-[clamp(100px,7.4vw,142px)] text-center shrink-0">הורדת מסמך</div>
        </div>

        {/* Table rows */}
        {[
          { id: "65544",  created: "15.01.2026", due: "15.01.2026", total: "₪3.00",  paid: true  },
          { id: "534543", created: "15.01.2026", due: "15.01.2026", total: "₪3.00",  paid: true  },
          { id: "65544",  created: "15.01.2026", due: "15.01.2026", total: "₪3.00",  paid: true  },
          { id: "534543", created: "15.01.2026", due: "15.01.2026", total: "₪3.00",  paid: true  },
          { id: "65544",  created: "15.01.2026", due: "15.01.2026", total: "₪3.00",  paid: true  },
          { id: "543453", created: "15.01.2026", due: "15.01.2026", total: "₪3.00",  paid: false },
          { id: "65544",  created: "15.01.2026", due: "15.01.2026", total: "₪3.00",  paid: false },
          { id: "534543", created: "15.01.2026", due: "15.01.2026", total: "₪3.00",  paid: false },
        ].map((row, i) => (
          <div
            key={i}
            className="flex items-center border-b border-[#f0f0f0] last:border-b-0"
            style={{
              gap: "clamp(40px,6.25vw,120px)",
              minHeight: "clamp(55px,6.75vh,73px)",
            }}
          >
            {/* Invoice number */}
            <div className="font-polin text-[18px] text-navy w-[clamp(100px,7.6vw,146px)] text-center shrink-0">{row.id}</div>
            {/* Created date */}
            <div className="font-polin text-[18px] text-navy w-[clamp(90px,6.67vw,128px)] text-center shrink-0">{row.created}</div>
            {/* Due date */}
            <div className="font-polin text-[18px] text-navy w-[clamp(85px,5.73vw,110px)] text-center shrink-0">{row.due}</div>
            {/* Total */}
            <div className="font-polin text-[18px] text-navy w-[clamp(90px,6.67vw,128px)] text-center shrink-0">{row.total}</div>
            {/* Status badge */}
            <div className="w-[clamp(80px,6.67vw,128px)] flex justify-center shrink-0">
              {row.paid ? (
                <span
                  className="font-polin text-[18px] px-[10px] py-[2px] rounded-[7px]"
                  style={{ background: "#d5f6e0", color: "#00c444" }}
                >
                  שולם
                </span>
              ) : (
                <span
                  className="font-polin text-[18px] px-[10px] py-[2px] rounded-[7px]"
                  style={{ background: "#ffdcdd", color: "#f21e3d" }}
                >
                  לא שולם
                </span>
              )}
            </div>
            {/* Download status */}
            <div className="w-[clamp(100px,7.4vw,142px)] flex items-center justify-center gap-[5px] shrink-0">
              {row.paid ? (
                <>
                  <span className="font-polin text-[18px]" style={{ color: "#00c444" }}>פעיל</span>
                  <div className="rounded-full size-[9px] shrink-0" style={{ background: "#00c444" }} />
                </>
              ) : (
                <>
                  <span className="font-polin text-[18px]" style={{ color: "#a8a8a8" }}>לא פעיל</span>
                  <div className="rounded-full size-[9px] shrink-0" style={{ background: "#a8a8a8" }} />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
