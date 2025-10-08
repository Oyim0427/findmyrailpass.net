import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FindMyJR-Pass - 日本铁路周游券专家",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {GA_MEASUREMENT_ID && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}
        {children}
      </body>
    </html>
  );
}
