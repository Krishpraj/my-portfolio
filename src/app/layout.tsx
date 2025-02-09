// app/layout.tsx (Server-Side Layout)
import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import Loading from "@/app/loading";  // Client-side loading component
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const font1 = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  weight: ['400'],
  subsets: ["latin"],
});
const font2 = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  weight: ['400'],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krish's Portfolio",
  description: "Krish's Works Over The Years",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${font1.variable} ${font2.variable} antialiased`} style={{ fontFamily: "var(--font-ibm-sans)" }}>
        {/* Loading screen component that prevents content from rendering until loading is complete */}
        
        <Loading />
        {/* Render children (actual content) only after loading is complete */}
        <>{children}</>
        <Analytics/>
      </body>
    </html>
  );
}
