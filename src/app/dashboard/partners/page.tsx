"use client";

export default function PartnersPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-polin text-[14px] text-[#001c51]/50 mb-3">
        <a href="/dashboard" className="hover:text-[#006eff] transition-colors">ראשי</a>
        <span>/</span>
        <span className="font-polin-bold text-[#001c51]">חשבון שותפים</span>
      </div>

      {/* Page title */}
      <h1
        className="text-[#006eff] font-polin-bold mb-8"
        style={{ fontSize: "50px", lineHeight: 1.1 }}
      >
        חשבון שותפים
      </h1>

      {/* Top 3 stat cards */}
      <div className="flex items-stretch gap-5 mb-8">
        {/* Clicks stat — dark navy */}
        <StatCard
          value="1,250"
          label="קליקים על קישור"
          bg="linear-gradient(135deg, #001c52 0%, #001c52 100%)"
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
          textColor="#001c52"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#001c52" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
          }
        />
      </div>

      {/* Bottom panels */}
      <div className="flex gap-5">
        {/* Donut chart panel */}
        <div
          className="bg-white p-7 flex-1 shadow-sm"
          style={{ height: "411px", borderRadius: "27px" }}
        >
          <h3 className="font-polin-bold text-[22px] text-[#001c52] mb-6">אנליטיקות</h3>
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
                <span className="font-polin-bold text-[#001c52] text-[18px]">₪7,656</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#006eff]" />
                <span className="font-polin text-[#001c52] text-[14px]">₪4,976 — 65%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#e1f0ff]" />
                <span className="font-polin text-[#001c52] text-[14px]">₪2,680 — 35%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bar chart panel */}
        <div
          className="bg-white p-7 flex-1 shadow-sm"
          style={{ height: "411px", borderRadius: "27px" }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-polin-bold text-[22px] text-[#001c52]">פעילות</h3>
            <div className="flex gap-2">
              {["יומי", "שבועי", "חודשי"].map((tab) => (
                <button
                  key={tab}
                  className={`px-3 py-1 rounded-full font-polin text-[13px] transition-colors ${
                    tab === "שבועי"
                      ? "bg-[#006eff] text-white"
                      : "text-[#001c51]/50 hover:text-[#001c51]"
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
                <span className="font-polin text-[11px] text-[#001c51]/50">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue panel */}
        <div
          className="bg-white p-7 w-64 flex-shrink-0 shadow-sm flex flex-col"
          style={{ borderRadius: "27px" }}
        >
          <h3 className="font-polin-bold text-[22px] text-[#001c52] mb-2">דשבורד רווחים</h3>
          <div className="flex-1 flex flex-col justify-center gap-3">
            <div>
              <div className="font-polin-bold text-[#001c52] text-[28px]">₪1256</div>
              <div className="font-polin text-[#001c52] opacity-50 text-[13px] mt-1">עמלות זמניות שצברת</div>
            </div>
            <div>
              <div className="font-polin-bold text-[#001c52] text-[28px]">₪5400</div>
              <div className="font-polin text-[#001c52] opacity-50 text-[13px] mt-1">סך כל המשיכות שלך</div>
            </div>
          </div>
          <button
            className="w-full py-3 text-white font-polin text-[18px] mt-4 transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(99.7deg, #006eff 0%, #004299 100%)",
              borderRadius: "7px",
            }}
          >
            בקשת משיכה
          </button>
        </div>
      </div>

      {/* Referral link */}
      <div className="mt-8">
        <div className="font-polin-bold text-[#001c52] text-[16px] mb-3">קישור השותפים שלך</div>
        <div
          className="flex items-center px-5"
          style={{
            background: "white",
            height: "125px",
            borderRadius: "7px",
            width: "1452px",
          }}
        >
          <div
            className="flex items-center px-5 font-polin text-[#001c52] opacity-40 text-[15px]"
            style={{
              border: "1px solid #cacaca",
              height: "75px",
              borderRadius: "7px",
              width: "1392px",
            }}
          >
            https://hostify.co.il/ref/eldad-xxxxxxxxxxxxxxxxx
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
      className="flex-1 p-6 flex flex-col gap-3"
      style={{ background: bg, height: "191px", borderRadius: "27px", border }}
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
