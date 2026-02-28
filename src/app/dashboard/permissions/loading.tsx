import SkeletonBlock from "@/components/ui/SkeletonBlock";

export default function PermissionsLoading() {
  return (
    <div>
      {/* Breadcrumb */}
      <SkeletonBlock className="h-4 w-48 mb-3" />

      {/* Title */}
      <SkeletonBlock className="h-12 w-72 mb-4" />

      {/* Description */}
      <SkeletonBlock className="h-6 w-full mb-2" />
      <SkeletonBlock className="h-6 w-3/4 mb-8" />

      {/* Invite button */}
      <SkeletonBlock className="h-12 w-44 mb-10" />

      {/* User row */}
      <SkeletonBlock className="h-24 w-full rounded-[20px]" />
    </div>
  );
}
