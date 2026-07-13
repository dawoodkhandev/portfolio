import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import Starfield from "@/components/Starfield";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description:
    "Incoming Computer Science student at the University of Waterloo. I build full-stack AI products end-to-end.",
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description:
      "Incoming Computer Science student at the University of Waterloo. I build full-stack AI products end-to-end.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-200">
        <Starfield />
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
