import SkeletonBlock from "@/components/ui/SkeletonBlock";

export default function PaymentsLoading() {
  return (
    <div>
      {/* Breadcrumb */}
      <SkeletonBlock className="h-4 w-48 mb-3" />

      {/* Title */}
      <SkeletonBlock className="h-12 w-40 mb-6" />

      {/* Top row: card + summary */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <SkeletonBlock className="w-full lg:w-1/2 h-[260px] rounded-[35px]" />
        <SkeletonBlock className="w-full lg:w-1/2 h-[260px] rounded-[35px]" />
      </div>

      {/* Personal details */}
      <SkeletonBlock className="h-[180px] w-full rounded-[35px]" />
    </div>
  );
}
