import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  weight: ["400", "700", "800"],
  variable: "--font-noto-hebrew",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hostify",
  description: "לוח הבקרה של Hostify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={notoSansHebrew.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
