import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Seungwon simple site",
  description: "일단 빠르게 검색이 되게하는게 목표에요.",
  keywords: [
    "develop",
    "web",
    "test",
    "search engine",
    "google",
    "SEO",
    "simple",
    "searchable",
  ],
  authors: [{ name: "Seungwon" }],
  openGraph: {
    title: "Seungwon simple site",
    description: "일단 빠르게 검색이 되게하는게 목표에요.",
    url: "https://seo-test-pi.vercel.app",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "https://seo-test-pi.vercel.app/thumnail.webp",
        width: 840,
        height: 600,
        alt: "Seungwon simple site thumnail",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Analytics />
      <meta
        name="google-site-verification"
        content="FCZPzvQhGCLae0VdfPIbLKxE-g2EH-pLM6QRUVBARic"
      />

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
