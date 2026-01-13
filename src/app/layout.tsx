import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layout/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Course Marketplace - CA, CS & CMA Courses | Professional Education Platform",
  description: "Browse and enroll in professional courses for Chartered Accountancy (CA), Company Secretary (CS), and Cost Management Accountancy (CMA). Expert-led courses with lifetime access, interactive sessions, and comprehensive study materials.",
  keywords: "CA courses, CS courses, CMA courses, professional courses, online learning, commerce education, accounting courses",
  authors: [{ name: "Course Marketplace" }],
  openGraph: {
    title: "Course Marketplace - CA, CS & CMA Courses",
    description: "Professional courses for CA, CS, and CMA with expert guidance and lifetime access",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Course Marketplace - CA, CS & CMA Courses",
    description: "Professional courses for CA, CS, and CMA with expert guidance",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
