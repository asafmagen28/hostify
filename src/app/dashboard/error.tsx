"use client";

export default function DashboardError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
      <h2 className="font-polin font-extrabold text-navy text-[28px]">
        משהו השתבש
      </h2>
      <p className="font-polin text-[18px] text-navy/60">
        אירעה שגיאה בטעינת הדף. נסה שוב.
      </p>
      <button
        onClick={reset}
        className="btn-primary text-white font-polin text-[18px] px-[24px] py-[10px] rounded-[7px] transition-opacity hover:opacity-90"
      >
        נסה שנית
      </button>
    </div>
  );
}
