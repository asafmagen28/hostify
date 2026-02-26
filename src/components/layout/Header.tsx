import {
  USER_AVATAR,
  ICON_BELL,
  NOTIF_DOT_RED,
  NOTIF_DOT_BLUE,
  ICON_INFO,
  ICON_CHEVRON_DOWN,
} from "@/lib/assets";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-[79px] px-[54px] gap-[50px]">
      {/* Left side: info icon */}
      <div className="flex items-center gap-[10px]">
        <button
          className="flex items-center gap-[10px] transition-colors"
          aria-label="מרכז המידע"
        >
          <span
            className="size-[37px] rounded-[5px] p-[6px] flex items-center justify-center"
            style={{ background: "#e1f0ff" }}
          >
            <img src={ICON_INFO} alt="" className="size-[22px] object-contain" />
          </span>
          <span className="font-polin text-[18px] text-[#001c52] w-[102px]">מרכז המידע</span>
        </button>
      </div>

      {/* Center: notifications bell */}
      <button
        className="relative flex items-center gap-[10px] transition-colors"
        aria-label="הודעות והתראות"
      >
        <div className="relative">
          <span
            className="size-[37px] rounded-[5px] p-[6px] flex items-center justify-center"
            style={{ background: "#e1f0ff" }}
          >
            <img src={ICON_BELL} alt="" className="size-[20px] object-contain" />
            {/* Blue dot inside bell container */}
            <span
              className="absolute bottom-0 left-0 size-[12px] rounded-full bg-[#006eff]"
            />
          </span>
          {/* Red notification dot */}
          <img
            src={NOTIF_DOT_RED}
            alt=""
            className="absolute -top-1 -right-1 size-[8px] object-contain"
          />
        </div>
        <span className="font-polin text-[18px] text-[#001c52] w-[136px]">הודעות והתראות</span>
      </button>

      {/* Right side: user info */}
      <button className="flex items-center gap-3">
        {/* Dropdown arrow */}
        <img src={ICON_CHEVRON_DOWN} alt="" className="size-[10px] object-contain opacity-50 rotate-90" />

        {/* Name + username */}
        <div className="text-right">
          <div className="font-polin-bold text-[18px] text-[#001c52]">אלדד אלחדד</div>
          <div className="font-polin text-[18px] text-[#001c52] opacity-50">@eldad</div>
        </div>

        {/* Avatar */}
        <div className="size-[59px] rounded-full overflow-hidden border-2 border-white shadow-sm relative">
          <img src={USER_AVATAR} alt="אלדד אלחדד" className="w-full h-full object-cover" />
          {/* Blue online dot */}
          <img
            src={NOTIF_DOT_BLUE}
            alt=""
            className="absolute bottom-0 left-0 size-[12px] object-contain"
          />
        </div>
      </button>
    </header>
  );
}
