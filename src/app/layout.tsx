import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Pulse - Environmental Organization Management",
  description:
    "Green Pulse is a mission-driven environmental organization dedicated to promoting sustainability, conservation, and climate action. Join us to raise awareness, mobilize communities, and drive impactful change.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} !bg-[#f3f4f6] antialiased`}
      >
        <Navbar />
        <div className="my-4 md:my-8 lg:my-12">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
