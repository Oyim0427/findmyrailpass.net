import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Find*MyJR-Pass - 日本铁路周游券专家",
  description: "发现最适合您的日本铁路周游券，轻松规划您的日本之旅。从JR Pass到地区周游券，我们为您提供最全面的信息和最优惠的价格。",
  keywords: "日本周游券,JR Pass,日本铁路,日本旅游,关西周游券,东京广域周游券",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} antialiased`}
      >
        {GA_MEASUREMENT_ID && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}
        {children}
      </body>
    </html>
  );
}
