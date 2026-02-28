import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4"
      style={{ background: "#001c51" }}
    >
      <p className="font-polin text-[120px] font-extrabold text-primary leading-none">
        404
      </p>
      <h1 className="font-polin font-extrabold text-white text-[32px]">
        הדף לא נמצא
      </h1>
      <p className="font-polin text-white/60 text-[18px]">
        הדף שחיפשת אינו קיים או הוסר.
      </p>
      <Link
        href="/dashboard"
        className="btn-primary text-white font-polin text-[18px] px-[24px] py-[10px] rounded-[7px] transition-opacity hover:opacity-90"
      >
        חזרה לדף הבית
      </Link>
    </div>
  );
}
