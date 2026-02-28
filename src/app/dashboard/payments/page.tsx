import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CARD_BG_MASK,
  CARD_CHIP_PATTERN,
  ICON_PENCIL,
} from "@/lib/assets";

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
        className="bg-white shadow-sm w-full px-6 sm:px-8 lg:px-[52px] py-[clamp(14px,1.15vw,36px)]"
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
    </div>
  );
}
