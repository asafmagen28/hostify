import { GOOGLE_ICON } from "@/lib/assets";

export default function LoginPage() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-[11vh]"
      style={{
        background: [
          "radial-gradient(ellipse 750px 700px at 8% 58%, rgba(70, 140, 255, 0.65) 0%, rgba(20, 80, 255, 0.25) 45%, transparent 70%)",
          "radial-gradient(ellipse 320px 300px at 97% 3%, rgba(30, 80, 220, 0.4) 0%, transparent 60%)",
          "radial-gradient(ellipse 500px 480px at 65% 115%, rgba(20, 60, 200, 0.3) 0%, transparent 65%)",
          "#001c51",
        ].join(", "),
      }}
    >
      {/* Hostify logo — above the card */}
      <div className="relative z-10 mb-5 flex items-center gap-2.5" dir="ltr">
        <svg width="34" height="34" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="8" width="10" height="28" rx="2.5" fill="#006eff" />
          <rect x="2" y="2" width="10" height="8" rx="2.5" fill="#006eff" opacity="0.55" />
          <rect x="26" y="2" width="10" height="34" rx="2.5" fill="#006eff" />
          <rect x="2" y="15" width="34" height="10" rx="2.5" fill="#006eff" />
          <rect x="12" y="2" width="14" height="8" rx="2.5" fill="#006eff" opacity="0.35" />
        </svg>
        <span
          className="text-white font-extrabold text-[24px] tracking-wide font-polin"
        >
          ostify
        </span>
      </div>

      {/* Glass card */}
      <div
        className="relative z-10 rounded-[50px] px-[31px] py-10 flex flex-col items-center w-full max-w-[460px] mx-4"
        style={{
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Heading */}
        <h1
          className="text-white font-extrabold text-center mb-1"
          style={{ lineHeight: 1.15, fontFamily: "var(--font-polin)", fontSize: "50px" }}
        >
          שמחים שחזרת!
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/80 text-center mb-7"
          style={{ fontFamily: "var(--font-polin)", fontSize: "22px" }}
        >
          התחברות ללקוחות רשומים
        </p>

        {/* Email input */}
        <div className="w-full mb-3">
          <input
            type="text"
            inputMode="email"
            autoComplete="email"
            placeholder='דוא"ל'
            className="w-full outline-none text-right placeholder-white/40"
            style={{
              height: "66px",
              borderRadius: "7px",
              padding: "22px 25px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "white",
              fontFamily: "var(--font-polin)",
              fontSize: "18px",
            }}
            dir="rtl"
          />
        </div>

        {/* Password input */}
        <div className="w-full mb-4">
          <input
            type="password"
            placeholder="סיסמא"
            className="w-full outline-none text-right placeholder-white/40"
            style={{
              height: "66px",
              borderRadius: "7px",
              padding: "22px 25px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "white",
              fontFamily: "var(--font-polin)",
              fontSize: "18px",
            }}
            dir="rtl"
          />
        </div>

        {/* Remember me row */}
        <div className="w-full flex items-center justify-start gap-2 mb-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-[24px] h-[24px] rounded-[3px] border border-white/25 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-all" />
            <span className="text-white/80" style={{ fontFamily: "var(--font-polin)", fontSize: "18px" }}>
              זכור אותי
            </span>
          </label>
        </div>

        {/* Login button */}
        <button
          className="w-full text-white font-bold transition-opacity hover:opacity-90 mb-4"
          style={{
            height: "52px",
            borderRadius: "7px",
            background: "#006eff",
            fontFamily: "var(--font-polin)",
            fontSize: "18px",
          }}
        >
          התחברות
        </button>

        {/* Links row */}
        <div className="flex items-center gap-4 mb-5">
          <a href="#" className="text-white font-medium hover:underline" style={{ fontFamily: "var(--font-polin)", fontSize: "18px" }}>
            שכחתי סיסמא
          </a>
          <span className="text-white/30">|</span>
          <a href="#" className="text-primary font-medium hover:underline" style={{ fontFamily: "var(--font-polin)", fontSize: "18px" }}>
            להרשמה
          </a>
        </div>

        {/* Divider with "או" badge */}
        <div className="w-full flex items-center gap-4 mb-5">
          <div className="flex-1 h-px bg-white/30" />
          <span
            className="flex items-center justify-center text-navy text-[12px]"
            style={{
              height: "26px",
              width: "28px",
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
          className="flex items-center justify-center font-medium transition-colors hover:opacity-90 mx-auto"
          style={{
            height: "53px",
            width: "282px",
            borderRadius: "6px",
            background: "white",
            border: "1px solid #d7d7d7",
            color: "#001c51",
            gap: "14px",
            padding: "8px 20px",
            fontFamily: "var(--font-polin)",
            fontSize: "18px",
          }}
        >
          <img src={GOOGLE_ICON} alt="" style={{ width: "22px", height: "22px" }} className="object-contain" />
          כניסה באמצעות גוגל
        </button>
      </div>
    </div>
  );
}
