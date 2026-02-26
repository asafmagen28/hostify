import {
  ICON_SUN,
  LOGO_WORDPRESS,
  LOGO_GOOGLE_CLOUD,
  ICON_MANAGE_ARROW,
  ICON_PLAN_ARROW,
} from "@/lib/assets";

const stats = [
  { label: "סטטוס מנוי:", value: "פעיל", quota: null },
  { label: "שטח אחסון:", value: "0.26GB", quota: "2GB/" },
  { label: "תעבורה חודשית:", value: "0.26GB", quota: "20GB/" },
  { label: "אתרים:", value: "0", quota: "1/" },
  { label: "סביבות פיתוח:", value: "1", quota: "2/" },
  { label: "תיבת דואר:", value: "0", quota: null },
  { label: "מסדי נתונים:", value: "0", quota: null },
];

export default function DashboardPage() {
  return (
    <div>
      {/* Greeting row — sun comes AFTER text in DOM so RTL places it on the left */}
      <div className="flex items-center gap-[6px] mb-6 mt-6">
        <img
          src={ICON_SUN}
          alt=""
          className="w-[52px] h-[40px] object-contain flex-shrink-0"
        />
        <h1
          className="font-polin text-[#001c51]"
          style={{ fontSize: "34px", lineHeight: 1.1, paddingRight: "10px", paddingBottom: "6px" }}
        >
          בוקר טוב,{" "}
          <span className="text-[#006eff] font-extrabold ">אלדד</span>
        </h1>
      </div>

      {/* Section title — Noto Sans Hebrew Bold per Figma */}
      <h2
        className="text-[#006eff] font-bold mb-5 mt-8"
        style={{ fontSize: "25px", fontFamily: "var(--font-hebrew)", fontVariationSettings: "'wdth' 100" }}
      >
        חבילות אחסון
      </h2>

      {/* Hosting package card */}
      <div className="bg-white rounded-[27px] px-4 md:px-[28px] py-px shadow-sm h-[270px] flex flex-col">
        <div className="flex flex-col gap-[41px] items-stretch flex-1 py-6">
          {/* Card top row */}
          <div className="flex items-center gap-4">
            {/* Plan name */}
            <span className="font-extrabold text-[#001c52] text-[22px]">גוניור</span>

            {/* Badges */}
            <div className="flex items-center gap-[18px]">
              <Badge>
                אחסון וורדפרס
                <img src={LOGO_WORDPRESS} alt="WordPress" className="w-4 h-4 object-contain" />

              </Badge>
              <Badge>
                Google cloud
                <img src={LOGO_GOOGLE_CLOUD} alt="Google Cloud" className="w-4 h-4 object-contain" />
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
              <img src={ICON_MANAGE_ARROW} alt="" className="w-2 h-2 object-contain brightness-0 invert rotate-90" />
            </button>
          </div>

          {/* Divider */}
          <div
            className="w-full"
            style={{ height: "1px", background: "rgba(0,28,81,0.1)" }}
          />

          {/* Stats row — horizontal inline: value badge + /quota + label */}
          <div className="flex gap-[15px] items-center justify-end flex-wrap">
            {stats.map((stat) => (
              <div key={stat.label} className="flex gap-[7px] items-center justify-center">
                <span className="font-polin text-[18px] text-[#717171]">{stat.label}</span>
                {stat.quota && (
                  <span className="font-polin text-[18px] text-[#005492]">{stat.quota}</span>
                )}
                <span
                  className="bg-[#eff6ff] flex items-center justify-center text-[#006eff] font-polin text-[16px] h-[23px] px-[20px] py-[9px] rounded-[7px]"                >
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* לפרטי התכנית — centered footer with top border */}
        <div className="border-t border-l border-r border-[#b2b2b2] flex gap-[50px] items-center justify-center px-[30px] py-[8px] rounded-tl-[7px] rounded-tr-[7px] w-fit mx-auto">
          <button className="flex items-center gap-3 font-polin text-[14px] text-[#8e8e8e] hover:underline">
            לפרטי התכנית
            <img src={ICON_PLAN_ARROW} alt="" className="w-2 h-2 object-contain rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="flex items-center gap-1.5 font-polin text-[15px] text-[#006eff] w-[150px]"
      style={{
        background: "#e1f0ff",
        height: "30px",
        borderRadius: "7px",
        padding: "15px",
      }}
    >
      {children}
    </span>
  );
}
