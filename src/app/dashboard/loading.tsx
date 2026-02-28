import SkeletonBlock from "@/components/ui/SkeletonBlock";

export default function DashboardLoading() {
  return (
    <div>
      {/* Greeting row */}
      <div className="flex items-center gap-3 mb-6">
        <SkeletonBlock className="w-[52px] h-[40px]" />
        <SkeletonBlock className="h-9 w-64" />
      </div>

      {/* Section title */}
      <SkeletonBlock className="h-7 w-40 mb-5 mt-8" />

      {/* Hosting card */}
      <SkeletonBlock className="h-[240px] w-full rounded-[27px]" />
    </div>
  );
}
