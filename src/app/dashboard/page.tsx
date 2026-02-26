import {
  ICON_SUN,
  LOGO_WORDPRESS,
  LOGO_GOOGLE_CLOUD,
  ICON_MANAGE_ARROW,
  ICON_PLAN_ARROW,
} from "@/lib/assets";

const stats = [
  { label: "סטטוס מנוי", value: "פעיל" },
  { label: "שטח אחסון", value: "10GB" },
  { label: "תעבורה חודשית", value: "100GB" },
  { label: "אתרים", value: "5" },
  { label: "סביבות פיתוח", value: "1" },
  { label: "תיבת דואר", value: "10" },
  { label: "מסדי נתונים", value: "5" },
];

export default function DashboardPage() {
  return (
    <div>
      {/* Greeting row — sun comes AFTER text in DOM so RTL places it on the left */}
      <div className="flex items-center gap-3 mb-6">
        <h1 className="font-polin text-[#001c51]" style={{ fontSize: "50px", lineHeight: 1.1 }}>
          בוקר טוב,{" "}
          <span className="text-[#006eff] font-polin-bold">אלדד</span>
        </h1>
        <img src={ICON_SUN} alt="" className="w-[92px] h-[92px] object-contain" />
      </div>

      {/* Section title */}
      <h2
        className="text-[#006eff] font-bold mb-5"
        style={{ fontSize: "25px" }}
      >
        חבילות אחסון
      </h2>

      {/* Hosting package card */}
      <div className="bg-white rounded-[27px] px-[28px] py-7 shadow-sm">
        {/* Card top row */}
        <div className="flex items-center gap-4 mb-6">
          {/* Plan name */}
          <span className="font-polin-bold text-[#001c52] text-[22px]">גוניור</span>

          {/* Badges */}
          <div className="flex items-center gap-2">
            <Badge>
              <img src={LOGO_WORDPRESS} alt="WordPress" className="w-4 h-4 object-contain" />
              אחסון וורדפרס
            </Badge>
            <Badge>
              <img src={LOGO_GOOGLE_CLOUD} alt="Google Cloud" className="w-4 h-4 object-contain" />
              Google cloud
            </Badge>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Manage button */}
          <button
            className="flex items-center gap-2 px-[20px] py-[8px] rounded-[7px] text-white font-polin text-[18px] transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(99.7deg, #006eff 0%, #004299 100%)",
            }}
          >
            ניהול
            <img src={ICON_MANAGE_ARROW} alt="" className="w-4 h-4 object-contain brightness-0 invert" />
          </button>
        </div>

        {/* Divider */}
        <div
          className="w-full mb-6"
          style={{ height: "1px", background: "rgba(0,28,81,0.1)" }}
        />

        {/* Stats row */}
        <div className="flex items-center gap-6 flex-wrap">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5">
              <span className="font-polin text-[18px] text-[#717171]">{stat.label}</span>
              <span
                className="font-polin text-[16px] text-[#006eff] flex items-center justify-center"
                style={{
                  background: "#eff6ff",
                  height: "23px",
                  borderRadius: "7px",
                  padding: "9px 20px",
                }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Plan details link */}
        <div className="mt-6 flex items-center justify-end">
          <button className="flex items-center gap-2 font-polin text-[14px] text-[#8e8e8e] hover:underline">
            לפרטי התכנית
            <img src={ICON_PLAN_ARROW} alt="" className="w-4 h-4 object-contain" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="flex items-center gap-1.5 font-polin text-[15px] text-[#006eff]"
      style={{
        background: "#e1f0ff",
        height: "30px",
        borderRadius: "7px",
        padding: "10px",
      }}
    >
      {children}
    </span>
  );
}
