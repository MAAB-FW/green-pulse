import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import store from "@/redux/store";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
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
        <Provider store={store}>
          <Navbar />
          <div className="my-4 min-h-[calc(100vh-72px)] md:my-8 lg:my-12">
            {children}
          </div>
          <Footer />
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
