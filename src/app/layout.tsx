import type { Metadata, Viewport } from "next";
import { Rubik, Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["400", "700", "800"],
  variable: "--font-rubik",
  display: "swap",
});

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  weight: ["400", "700", "800"],
  variable: "--font-noto-hebrew",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Hostify", template: "%s | Hostify" },
  description: "לוח הבקרה של Hostify",
  icons: { icon: "/favicon.ico" },
  openGraph: { locale: "he_IL", type: "website" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#006eff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${notoSansHebrew.variable}`}>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
