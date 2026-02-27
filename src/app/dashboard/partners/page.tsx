"use client";

import { useState } from "react";
import {
  PARTNERS_CIRCLE,
  PARTNERS_IDENTIFIER_1,
  PARTNERS_IDENTIFIER_2,
  PARTNERS_DIVIDER,
  PARTNERS_CHART_LINES,
  PARTNERS_ICON_CLICKS,
  PARTNERS_ICON_SIGNUPS,
  PARTNERS_ICON_CONVERSION,
} from "@/lib/assets";

export default function PartnersPage() {
  const [isActive, setIsActive] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isActive) {
    return (
      <div className="flex items-start justify-center min-h-full pt-[8%] px-8 pb-8">
        <div className="bg-white rounded-[35px] px-6 sm:px-[60px] lg:px-[140px] py-8 lg:py-[58px] flex items-center justify-center w-full">
          <div className="flex flex-col gap-[35px] items-center w-full max-w-[615px]">
            <p className="font-extrabold text-[34px] text-primary text-center leading-normal">
              קבלו תשלום על הפניית לקוחות חדשים!
            </p>
            <p className="font-polin text-[20px] text-navy text-center leading-normal">
              הרוויחו 10% עמלה מכל תשלום המתבצע על ידי הלקוחות שאתם מפנים
            </p>
            <div className="flex flex-col sm:flex-row gap-[23px] items-center">
              <button
                onClick={() => setIsActive(true)}
                className="btn-primary h-[43px] px-[20px] rounded-[7px] font-polin text-[18px] text-white whitespace-nowrap"
              >
                הפעלת חשבון שותפים
              </button>
              <button className="border border-[#a4a4a4] h-[43px] px-[20px] w-full sm:w-auto rounded-[7px] font-polin text-[18px] text-primary">
                מידע נוסף
              </button>
            </div>
            <p className="font-polin text-[16px] text-navy text-center leading-[22px]">
              לורם איפסום דולור סיט אמט בלינדו תצטריק סת קוויז יבש, וק. וענוף ושבעגט בלינך לכימפו, דול, לפתיעם שעותלשך מנת. קונסקטורר
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-polin text-[14px] text-navy/50 mb-3">
        <a href="/dashboard" className="hover:text-primary transition-colors">ראשי</a>
        <span>/</span>
        <span className="font-extrabold text-primary">חשבון שותפים</span>
      </div>

      {/* Page title */}
      <h1
        className="text-primary font-polin font-extrabold mb-[clamp(12px,2vh,24px)]"
        style={{ fontSize: "clamp(30px, 2.6vw, 50px)", lineHeight: 1.1 }}
      >
        חשבון שותפים
      </h1>

      {/* Top 3 stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-[clamp(12px,2vh,24px)]">
        {/* Clicks stat — navy gradient */}
        <StatCard
          value="1,250"
          label="קליקים על קישור"
          bg="linear-gradient(to right, #001c52 0%, #003fb8 100%)"
          textColor="white"
          border="1px solid rgba(255,255,255,0.15)"
          iconSrc={PARTNERS_ICON_CLICKS}
          iconBg="linear-gradient(227deg, rgba(255,255,255,0.15) 18%, rgba(146,146,146,0.15) 90%)"
        />

        {/* Signups stat — blue gradient */}
        <StatCard
          value="64"
          label="נרשמו דרכך"
          bg="linear-gradient(99.7deg, #006eff 0%, #004299 100%)"
          textColor="white"
          iconSrc={PARTNERS_ICON_SIGNUPS}
          iconBg="linear-gradient(227deg, rgba(255,255,255,0.15) 18%, rgba(146,146,146,0.15) 90%)"
        />

        {/* Conversion stat — white/gray */}
        <StatCard
          value="15.43%"
          label="אחוזי ההמרה שלך"
          bg="linear-gradient(to right, white 0%, #e0e0e0 100%)"
          textColor="#001c51"
          iconSrc={PARTNERS_ICON_CONVERSION}
          iconBg="linear-gradient(227deg, rgba(0,28,82,0.08) 18%, rgba(146,146,146,0.08) 90%)"
          iconBorder="1px solid rgba(0,28,82,0.12)"
        />
      </div>

      {/* Bottom panels: narrow analytics + wide combined */}
      <div
        className="grid grid-cols-1 lg:grid-cols-[clamp(300px,22.9vw,440px)_1fr] gap-5 mb-[clamp(12px,2vh,24px)]"
      >
        {/* Analytics panel */}
        <AnalyticsPanel />

        {/* Wide combined card: Activity + Revenue */}
        <div
          className="bg-white rounded-[27px] flex overflow-hidden"
          style={{ minHeight: "clamp(270px,32vh,411px)", maxHeight: "clamp(270px,32vh,411px)" }}
        >
          <ActivityPanel />
          <RevenueDivider />
          <RevenuePanel />
        </div>
      </div>

      {/* Referral link */}
      <div>
        <div
          className="font-polin font-extrabold text-primary mb-3"
          style={{ fontSize: "clamp(18px, 1.4vw, 27px)" }}
        >
          קישור השותפים שלך
        </div>
        <div
          className="flex items-center px-5 w-full bg-white rounded-[7px]"
          style={{ height: "clamp(70px, 9vh, 105px)" }}
        >
          <button
            onClick={() => {
              navigator.clipboard.writeText("https://hostify.co.il/ref/eldad-xxxxxxxxxxxxxxxxx");
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="flex items-center px-5 font-polin text-[#676767] text-[15px] w-full overflow-hidden rounded-[7px] border border-[#cacaca] cursor-pointer"
            style={{ height: "clamp(45px, 5.6vh, 65px)" }}
          >
            <span className="truncate w-full text-right">
              https://hostify.co.il/ref/eldad-xxxxxxxxxxxxxxxxx
            </span>
            <span className="mr-3 text-[13px] text-primary font-polin whitespace-nowrap">
              {copied ? "הועתק!" : "העתק"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── StatCard ─────────────────────────────────────────────────────────── */
function StatCard({
  value,
  label,
  bg,
  textColor,
  border,
  iconSrc,
  iconBg,
  iconBorder,
}: {
  value: string;
  label: string;
  bg: string;
  textColor: string;
  border?: string;
  iconSrc: string;
  iconBg: string;
  iconBorder?: string;
}) {
  return (
    <div
      className="px-[clamp(16px,1.8vw,34px)] flex items-center gap-[clamp(16px,1.6vw,30px)]"
      style={{
        background: bg,
        borderRadius: "27px",
        border,
        minHeight: "clamp(140px,17.7vh,191px)",
        maxHeight: "clamp(140px,17.7vh,191px)",
      }}
    >
            {/* Circular icon container */}
      <div
        className="flex-none flex items-center justify-center rounded-full"
        style={{
          width: "clamp(70px, 5.2vw, 99px)",
          height: "clamp(70px, 5.2vw, 99px)",
          background: iconBg,
          border: iconBorder ?? "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <img
          src={iconSrc}
          alt=""
          style={{ width: "clamp(30px, 2.2vw, 42px)", height: "clamp(30px, 2.2vw, 42px)" }}
        />
      </div>
      
      {/* Text block */}
      <div className="flex flex-col gap-2 flex-1">
        <div
          className="font-polin font-extrabold"
          style={{ color: textColor, fontSize: "clamp(28px, 2.2vw, 42px)" }}
        >
          {value}
        </div>
        <div
          className="font-polin text-[20px]"
          style={{ color: textColor === "white" ? "rgba(255,255,255,0.7)" : "rgba(0,28,82,0.6)" }}
        >
          {label}
        </div>
      </div>

    </div>
  );
}

/* ─── AnalyticsPanel ───────────────────────────────────────────────────── */
function AnalyticsPanel() {
  return (
    <div
      className="bg-white rounded-[27px] p-6 flex flex-col overflow-hidden"
      style={{ minHeight: "clamp(270px,32vh,411px)", maxHeight: "clamp(270px,32vh,411px)" }}
    >
      {/* Title + thin divider line */}
      <div className="flex-shrink-0 mb-3">
        <h3 className="font-polin font-extrabold text-[18px] text-black mb-2">אנליטיקות</h3>
        <div className="w-full h-px bg-[#e8e8e8]" />
      </div>

      {/* Circle + legend — fills remaining space */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 min-h-0">
        {/* Donut circle image with center text overlay */}
        <div className="relative flex items-center justify-center flex-shrink-0">
          <img
            src={PARTNERS_CIRCLE}
            alt="analytics donut"
            style={{
              width: "clamp(110px, 9.5vw, 182px)",
              height: "clamp(110px, 9.5vw, 182px)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className="font-polin font-extrabold text-navy"
              style={{ fontSize: "clamp(16px, 1.5vw, 28px)" }}
            >
              ₪7,656
            </span>
            <span className="font-polin text-[14px] text-[#615e83]">הכנסות</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-2 w-full px-2 flex-shrink-0">
          <div className="flex items-center gap-2">
            <img src={PARTNERS_IDENTIFIER_1} alt="" className="w-4 h-4 flex-shrink-0" />
            <span className="font-polin text-[13px] text-navy">65% לורם</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={PARTNERS_IDENTIFIER_2} alt="" className="w-4 h-4 flex-shrink-0" />
            <span className="font-polin text-[13px] text-navy">35% לורם איפסום</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── ActivityPanel ────────────────────────────────────────────────────── */
// Fixed chart area height in px — bars use pixel heights derived from this
const CHART_H = 155;

function ActivityPanel() {
  const [activeTab, setActiveTab] = useState("שבועי");
  const tabs = ["יומי", "שבועי", "חודשי"];

  const barGroups = [
    { label: "א", bars: [80, 60, 45, 30] },
    { label: "ב", bars: [100, 75, 55, 40] },
    { label: "ג", bars: [55, 40, 30, 20] },
    { label: "ד", bars: [90, 70, 50, 35] },
    { label: "ה", bars: [70, 55, 40, 25] },
    { label: "ו", bars: [60, 45, 35, 20] },
    { label: "ש", bars: [40, 30, 20, 15] },
  ];

  const barColors = ["#001c51", "#006eff", "#b3d4ff", "#333333"];
  const yLabels = ["1.5M", "1M", "500k", "200k", "100k", "50k", "0"];

  return (
    <div className="flex-1 p-6 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 flex-shrink-0">
        <h3 className="font-polin font-extrabold text-[18px] text-navy">פעילות</h3>
        <div
          className="flex items-center rounded-[12.5px] h-[41px] px-1 gap-1"
          style={{ background: "#e1f0ff", width: "clamp(160px, 10.5vw, 202px)" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 h-[33px] font-polin text-[13px] rounded-[11px] transition-colors"
              style={{
                background: activeTab === tab ? "#006eff" : "transparent",
                color: activeTab === tab ? "white" : "#9291a5",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart: y-axis + bars side by side */}
      <div className="flex gap-2 flex-shrink-0">
        {/* Y-axis labels — aligned to bar chart height */}
        <div
          className="flex flex-col justify-between flex-shrink-0 pb-5"
          style={{ height: CHART_H + 20 }}
        >
          {yLabels.map((label) => (
            <span key={label} className="font-polin text-[9px] text-navy/50 leading-none">
              {label}
            </span>
          ))}
        </div>

        {/* Bar chart area */}
        <div
          className="flex-1 relative rounded-[8px] overflow-hidden"
          style={{
            height: CHART_H + 20,
            backgroundImage: `url(${PARTNERS_CHART_LINES})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Bars absolutely positioned, bottom-anchored */}
          <div className="absolute inset-x-0 bottom-5 top-0 flex items-end gap-[clamp(2px,0.5vw,8px)] px-2">
            {barGroups.map((group) => (
              <div key={group.label} className="flex-1 flex flex-col items-center gap-0">
                {/* 4 bars per group, side by side, growing from bottom */}
                <div className="flex items-end gap-[2px] justify-center w-full">
                  {group.bars.map((h, i) => (
                    <div
                      key={i}
                      className="rounded-t-[2px] flex-shrink-0"
                      style={{
                        height: `${Math.round((CHART_H * h) / 100)}px`,
                        width: "clamp(3px, 0.4vw, 6px)",
                        background: barColors[i],
                      }}
                    />
                  ))}
                </div>
                <span className="font-polin text-[9px] text-navy/50 mt-1 leading-none">{group.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── RevenueDivider ────────────────────────────────────────────────────── */
function RevenueDivider() {
  return (
    <div className="w-px bg-[#e8e8e8] my-6 flex-shrink-0" />
  );
}

/* ─── RevenuePanel ──────────────────────────────────────────────────────── */
function RevenuePanel() {
  return (
    <div
      className="flex-none flex flex-col p-6"
      style={{ width: "clamp(160px, 11.4vw, 219px)" }}
    >
      <h3 className="font-polin font-extrabold text-[15px] text-navy mb-4 flex-shrink-0 whitespace-nowrap">
        דשבורד רווחים
      </h3>
      <div className="flex-1 flex flex-col justify-center gap-4">
        <div>
          <div
            className="font-polin font-extrabold text-navy"
            style={{ fontSize: "clamp(20px, 1.5vw, 28px)" }}
          >
            ₪1256
          </div>
          <div className="font-polin text-navy/50 text-[13px] mt-1">עמלות זמינות שצברת</div>
        </div>
        <div>
          <div
            className="font-polin font-extrabold text-navy"
            style={{ fontSize: "clamp(20px, 1.5vw, 28px)" }}
          >
            ₪5400
          </div>
          <div className="font-polin text-navy/50 text-[13px] mt-1">סך כל המשיכות שלך</div>
        </div>
      </div>
      <button
        className="w-full font-polin text-[16px] font-extrabold rounded-[10px] flex-shrink-0 transition-opacity hover:opacity-80"
        style={{
          background: "#e1f0ff",
          color: "#006eff",
          height: "clamp(42px, 5.5vh, 53px)",
        }}
      >
        בקשת משיכה
      </button>
    </div>
  );
}
