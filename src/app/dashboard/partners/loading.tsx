import SkeletonBlock from "@/components/ui/SkeletonBlock";

export default function PartnersLoading() {
  return (
    <div>
      {/* Breadcrumb */}
      <SkeletonBlock className="h-4 w-48 mb-3" />

      {/* Title */}
      <SkeletonBlock className="h-12 w-56 mb-6" />

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        <SkeletonBlock className="h-[160px] rounded-[27px]" />
        <SkeletonBlock className="h-[160px] rounded-[27px]" />
        <SkeletonBlock className="h-[160px] rounded-[27px]" />
      </div>

      {/* Bottom panels */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_clamp(300px,22.9vw,440px)] gap-5 mb-6">
        <SkeletonBlock className="h-[300px] rounded-[27px]" />
        <SkeletonBlock className="h-[300px] rounded-[27px]" />
      </div>

      {/* Referral link */}
      <SkeletonBlock className="h-[90px] w-full rounded-[7px]" />
    </div>
  );
}
