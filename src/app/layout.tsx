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
  keywords: "Krish, Portfolio, Developer, Projects, Works, LinkedIn, GitHub, Waterloo, Computer Engineering",
  authors: [{ name: "Krish Prajapati" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Krish's Portfolio",
    description: "Krish's Works Over The Years",
    url: "https://krishprajapati.me",
    type: "website",
    images: [
      {
        url: "https://krishprajapati.me/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Krish's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@krishprajapati",
    creator: "@krishprajapati",
    title: "Krish's Portfolio",
    description: "Krish's Works Over The Years",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Krish, Portfolio, Developer, Projects, Works, LinkedIn, GitHub, Waterloo, Computer Engineering" />
        <meta name="author" content="Krish Prajapati" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Krish's Portfolio" />
        <meta property="og:description" content="Krish's Works Over The Years" />
        <meta property="og:url" content="https://krishprajapati.me" />
        <meta property="og:type" content="website" />
    
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Krish's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@krishprajapati" />
        <meta name="twitter:creator" content="@krishprajapati" />
        <meta name="twitter:title" content="Krish's Portfolio" />
        <meta name="twitter:description" content="Krish's Works Over The Years" />
  
      </head>
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
