import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Iraklis Kanarkotis — Fullstack Developer",
    template: "%s | Iraklis Kanarkotis",
  },
  description:
    "Fullstack developer based in Cyprus building polished, performant web experiences with React, Next.js, NestJS, and PostgreSQL.",
  keywords: [
    "Iraklis Kanarkotis",
    "Fullstack Developer",
    "React",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Portfolio",
    "Cyprus",
  ],
  authors: [{ name: "Iraklis Kanarkotis" }],
  creator: "Iraklis Kanarkotis",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Iraklis Kanarkotis — Fullstack Developer",
    description:
      "Fullstack developer crafting modern, performant web experiences.",
    siteName: "Iraklis Kanarkotis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iraklis Kanarkotis — Fullstack Developer",
    description:
      "Fullstack developer crafting modern, performant web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/jsm-logo.png",
    apple: "/jsm-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000319",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
