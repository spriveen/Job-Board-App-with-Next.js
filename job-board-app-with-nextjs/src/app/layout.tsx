import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Board App",
  description: "A job board application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="py-4 px-6  max-w-2xl mx-auto">
        <Header />
        {children}
        </main>

      </body>
    </html>
  );
}
