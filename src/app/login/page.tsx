import {
  LOGIN_ELLIPSE_1,
  LOGIN_ELLIPSE_2,
  LOGIN_ELLIPSE_3,
  GOOGLE_ICON,
} from "@/lib/assets";

export default function LoginPage() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#001c51" }}
    >
      {/* Decorative blurred ellipses */}
      <img
        src={LOGIN_ELLIPSE_1}
        alt=""
        className="absolute pointer-events-none select-none"
        style={{ top: "-10%", right: "-8%", width: "420px", opacity: 0.85 }}
      />
      <img
        src={LOGIN_ELLIPSE_2}
        alt=""
        className="absolute pointer-events-none select-none"
        style={{ bottom: "-15%", left: "50%", transform: "translateX(-50%)", width: "500px", opacity: 0.7 }}
      />
      <img
        src={LOGIN_ELLIPSE_3}
        alt=""
        className="absolute pointer-events-none select-none"
        style={{ top: "30%", left: "-10%", width: "320px", opacity: 0.6 }}
      />

      {/* Hostify logo — above the card */}
      <div className="relative z-10 mb-8 flex items-center gap-2.5" dir="ltr">
        <svg width="44" height="44" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="8" width="10" height="28" rx="2.5" fill="#006eff" />
          <rect x="2" y="2" width="10" height="8" rx="2.5" fill="#006eff" opacity="0.55" />
          <rect x="26" y="2" width="10" height="34" rx="2.5" fill="#006eff" />
          <rect x="2" y="15" width="34" height="10" rx="2.5" fill="#006eff" />
          <rect x="12" y="2" width="14" height="8" rx="2.5" fill="#006eff" opacity="0.35" />
        </svg>
        <span
          className="text-white font-extrabold text-[32px] tracking-wide"
          style={{ fontFamily: "var(--font-polin)" }}
        >
          ostify
        </span>
      </div>

      {/* Glass card — no border per Figma */}
      <div
        className="relative z-10 rounded-[50px] px-14 py-12 flex flex-col items-center"
        style={{
          width: "593px",
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Heading */}
        <h1
          className="text-white font-extrabold text-center mb-2"
          style={{ fontSize: "50px", lineHeight: 1.15, fontFamily: "var(--font-polin)" }}
        >
          שמחים שחזרת!
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/80 text-center mb-10"
          style={{ fontSize: "22px", fontFamily: "var(--font-polin)" }}
        >
          התחברות ללקוחות רשומים
        </p>

        {/* Email input */}
        <div className="w-full mb-4">
          <input
            type="email"
            placeholder='דוא"ל'
            className="w-full outline-none text-right text-[18px]"
            style={{
              height: "66px",
              borderRadius: "7px",
              padding: "22px 25px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "white",
              fontFamily: "var(--font-polin)",
            }}
            dir="rtl"
          />
        </div>

        {/* Password input */}
        <div className="w-full mb-5">
          <input
            type="password"
            placeholder="סיסמא"
            className="w-full outline-none text-right text-[18px]"
            style={{
              height: "66px",
              borderRadius: "7px",
              padding: "22px 25px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "white",
              fontFamily: "var(--font-polin)",
            }}
            dir="rtl"
          />
        </div>

        {/* Remember me row */}
        <div className="w-full flex items-center justify-end gap-2 mb-7">
          <span className="text-white/80 text-[15px]" style={{ fontFamily: "var(--font-polin)" }}>זכור אותי</span>
          <input
            type="checkbox"
            className="cursor-pointer"
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "3px",
              border: "1px solid rgba(255,255,255,0.25)",
              accentColor: "#006eff",
            }}
          />
        </div>

        {/* Login button */}
        <button
          className="w-full text-white font-bold text-[18px] transition-opacity hover:opacity-90 mb-5"
          style={{
            height: "52px",
            borderRadius: "7px",
            background: "linear-gradient(99.7deg, #006eff 0%, #004299 100%)",
            fontFamily: "var(--font-polin)",
          }}
        >
          התחברות
        </button>

        {/* Links row */}
        <div className="flex items-center gap-4 mb-7">
          <a href="#" className="text-white text-[15px] font-medium hover:underline" style={{ fontFamily: "var(--font-polin)" }}>
            שכחתי סיסמא
          </a>
          <span className="text-white/30">|</span>
          <a href="#" className="text-[#006eff] text-[15px] font-medium hover:underline" style={{ fontFamily: "var(--font-polin)" }}>
            להרשמה
          </a>
        </div>

        {/* Divider with "או" badge */}
        <div className="w-full flex items-center gap-4 mb-7">
          <div className="flex-1 h-px bg-white/30" />
          <span
            className="flex items-center justify-center text-[#001c51] text-[14px]"
            style={{
              height: "34px",
              width: "36px",
              borderRadius: "3px",
              padding: "5px 9px",
              background: "white",
              border: "1px solid #006eff",
              fontFamily: "var(--font-polin)",
            }}
          >
            או
          </span>
          <div className="flex-1 h-px bg-white/30" />
        </div>

        {/* Google sign-in */}
        <button
          className="flex items-center justify-center font-medium text-[16px] transition-colors hover:opacity-90 mx-auto"
          style={{
            width: "282px",
            height: "53px",
            borderRadius: "6px",
            background: "white",
            border: "1px solid #d7d7d7",
            color: "#001c51",
            gap: "14px",
            padding: "10px 33px",
            fontFamily: "var(--font-polin)",
          }}
        >
          <img src={GOOGLE_ICON} alt="" style={{ width: "33px", height: "33px" }} className="object-contain" />
          כניסה באמצעות גוגל
        </button>
      </div>
    </div>
  );
}
