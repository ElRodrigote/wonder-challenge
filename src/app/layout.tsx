import { Suspense } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";

import { Navbar } from "@/components";
import { Providers } from "@/providers";

import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wonderland challenge",
  description: "Technical challenge for Wonderland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={twMerge(inter.className, "bg-indigo-300")}>
        <Suspense fallback={<Loading />}>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
