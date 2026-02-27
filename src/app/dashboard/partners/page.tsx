"use client";

import { useState } from "react";

export default function PartnersPage() {
  const [isActive, setIsActive] = useState(false);

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
        className="text-primary font-polin font-extrabold mb-8 text-[30px] sm:text-[40px] lg:text-[50px]"
        style={{ lineHeight: 1.1 }}
      >
        חשבון שותפים
      </h1>

      {/* Top 3 stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {/* Clicks stat — dark navy */}
        <StatCard
          value="1,250"
          label="קליקים על קישור"
          bg="linear-gradient(135deg, #001c51 0%, #001c51 100%)"
          textColor="white"
          border="1px solid rgba(255,255,255,0.15)"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          }
        />

        {/* Signups stat — blue */}
        <StatCard
          value="64"
          label="נרשמו דרכך"
          bg="linear-gradient(99.7deg, #006eff 0%, #004299 100%)"
          textColor="white"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          }
        />

        {/* Conversion stat — white */}
        <StatCard
          value="15.43%"
          label="אחוזי ההמרה שלך"
          bg="white"
          textColor="#001c51"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#001c51" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
          }
        />
      </div>

      {/* Bottom panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Donut chart panel */}
        <div
          className="bg-white p-7 shadow-sm min-h-[300px] lg:h-[411px] rounded-[27px]"
        >
          <h3 className="font-polin font-extrabold text-[22px] text-navy mb-6">אנליטיקות</h3>
          <div className="flex items-center justify-center gap-8">
            {/* Donut chart placeholder */}
            <div className="relative w-36 h-36">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="38" fill="none" stroke="#e1f0ff" strokeWidth="14" />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="#006eff"
                  strokeWidth="14"
                  strokeDasharray={`${2 * Math.PI * 38 * 0.65} ${2 * Math.PI * 38 * 0.35}`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-polin font-extrabold text-navy text-[18px]">₪7,656</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="font-polin text-navy text-[14px]">₪4,976 — 65%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-badge-bg" />
                <span className="font-polin text-navy text-[14px]">₪2,680 — 35%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bar chart panel */}
        <div
          className="bg-white p-7 shadow-sm min-h-[300px] lg:h-[411px] rounded-[27px]"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-polin font-extrabold text-[22px] text-navy">פעילות</h3>
            <div className="flex gap-2">
              {["יומי", "שבועי", "חודשי"].map((tab) => (
                <button
                  key={tab}
                  className={`px-3 py-1 rounded-full font-polin text-[13px] transition-colors ${
                    tab === "שבועי"
                      ? "bg-primary text-white"
                      : "text-navy/50 hover:text-navy"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Bar chart */}
          <div className="flex items-end gap-3 h-28">
            {[
              { day: "ראשון", h: 60 },
              { day: "שני", h: 85 },
              { day: "שלישי", h: 45 },
              { day: "רביעי", h: 100 },
              { day: "חמישי", h: 70 },
              { day: "שישי", h: 55 },
              { day: "שבת", h: 30 },
            ].map(({ day, h }) => (
              <div key={day} className="flex flex-col items-center gap-1 flex-1">
                <div
                  className="w-full rounded-t-md"
                  style={{
                    height: `${h}%`,
                    background: "linear-gradient(180deg, #006eff 0%, #004299 100%)",
                    opacity: h === 100 ? 1 : 0.4 + (h / 200),
                  }}
                />
                <span className="font-polin text-[11px] text-navy/50">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue panel */}
        <div
          className="bg-white p-7 shadow-sm flex flex-col min-h-[300px] lg:h-[411px] rounded-[27px]"
        >
          <h3 className="font-polin font-extrabold text-[22px] text-navy mb-2">דשבורד רווחים</h3>
          <div className="flex-1 flex flex-col justify-center gap-3">
            <div>
              <div className="font-polin font-extrabold text-navy text-[28px]">₪1256</div>
              <div className="font-polin text-navy opacity-50 text-[13px] mt-1">עמלות זמניות שצברת</div>
            </div>
            <div>
              <div className="font-polin font-extrabold text-navy text-[28px]">₪5400</div>
              <div className="font-polin text-navy opacity-50 text-[13px] mt-1">סך כל המשיכות שלך</div>
            </div>
          </div>
          <button
            className="btn-primary w-full py-3 text-white font-polin text-[18px] mt-4 transition-opacity hover:opacity-90 rounded-[7px]"
          >
            בקשת משיכה
          </button>
        </div>
      </div>

      {/* Referral link */}
      <div className="mt-8">
        <div className="font-polin font-extrabold text-navy text-[16px] mb-3">קישור השותפים שלך</div>
        <div
          className="flex items-center px-5 w-full"
          style={{
            background: "white",
            height: "80px",
            borderRadius: "7px",
          }}
        >
          <div
            className="flex items-center px-5 font-polin text-navy opacity-40 text-[15px] w-full overflow-hidden"
            style={{
              border: "1px solid #cacaca",
              height: "50px",
              borderRadius: "7px",
            }}
          >
            <span className="truncate w-full text-right">
              https://hostify.co.il/ref/eldad-xxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
  bg,
  textColor,
  border,
  icon,
}: {
  value: string;
  label: string;
  bg: string;
  textColor: string;
  border?: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="p-6 flex flex-col gap-3 min-h-[140px] lg:h-[191px]"
      style={{ background: bg, borderRadius: "27px", border }}
    >
      <div className="flex items-center justify-between">
        {icon}
      </div>
      <div
        className="font-polin text-[42px]"
        style={{ color: textColor }}
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
  );
}
