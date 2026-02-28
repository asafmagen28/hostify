import type { Metadata } from "next";
import HostingCard from "@/components/dashboard/HostingCard";

export const metadata: Metadata = { title: "ראשי" };

export default function DashboardPage() {
  return <HostingCard />;
}
