export default function SkeletonBlock({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`bg-navy/10 animate-pulse rounded-[7px] ${className}`}
    />
  );
}
