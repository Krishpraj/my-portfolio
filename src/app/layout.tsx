// app/layout.tsx (Server-Side Layout)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Loading from "@/app/loading";  // Client-side loading component
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Loading screen component that prevents content from rendering until loading is complete */}
        <Loading />
        {/* Render children (actual content) only after loading is complete */}
        <>{children}</>
      </body>
    </html>
  );
}
