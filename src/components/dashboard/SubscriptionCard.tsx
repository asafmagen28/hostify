import Image from "next/image";
import { ICON_MANAGE_CANCEL } from "@/lib/assets";

type SubscriptionCardProps = {
  badge: string;
  lines: { label: string; value: string }[];
};

export default function SubscriptionCard({ badge, lines }: SubscriptionCardProps) {
  return (
    <div
      className="flex-1"
      style={{
        border: "1px solid #a8a8a8",
        borderRadius: "35px",
        minHeight: "clamp(130px,15.7vh,170px)",
        padding: "clamp(20px,3.6vh,39px) clamp(20px,1.97vw,38px)",
      }}
    >
      <div className="flex items-center justify-between w-full h-full gap-4 flex-wrap">
        {/* Metadata — first in DOM = rightmost in RTL */}
        <div className="flex flex-col gap-[clamp(8px,1.11vh,12px)] items-start min-w-0">
          <span
            className="font-polin font-extrabold text-[13px] text-primary px-[10px] py-[5px]"
            style={{ background: "#e1f0ff", borderRadius: "5px" }}
          >
            {badge}
          </span>
          {lines.map(({ label, value }, i) => (
            <p key={i} className="font-polin text-[16px] text-navy">
              {label}: <span className="font-extrabold">{value}</span>
            </p>
          ))}
        </div>
        {/* Cancel button — last in DOM = leftmost in RTL */}
        <button
          className="btn-primary text-white font-polin text-[16px] transition-opacity hover:opacity-90 flex items-center gap-[10px] rounded-[7px] whitespace-nowrap"
          style={{ height: "40px", padding: "8px 16px" }}
        >
          <Image src={ICON_MANAGE_CANCEL} alt="" width={16} height={16} className="object-contain" />
          לביטול המוצר
        </button>
      </div>
    </div>
  );
}
