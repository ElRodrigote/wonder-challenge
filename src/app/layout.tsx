import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { Providers } from "@/providers";
import { Navbar } from "./components/Navbar/Navbar";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wonderland challenge",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={twMerge(inter.className, "bg-indigo-300")}>
        <Providers>
          <Navbar />
          <div className="px-4 py-12 mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
