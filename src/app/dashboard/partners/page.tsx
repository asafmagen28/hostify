import type { Metadata } from "next";
import PartnersContent from "@/components/dashboard/PartnersContent";

export const metadata: Metadata = { title: "חשבון שותפים" };

export default function PartnersPage() {
  return <PartnersContent />;
}
