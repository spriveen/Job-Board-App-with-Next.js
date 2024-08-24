import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div className="container flex justify-between py-4 px-6 mx-auto">
          <Link href={'/'} className="font-bold">Job Board</Link>
        <nav>
        <Link href={'/login'}>Login</Link>
        <Link href={'/new-listening'}>Post a Job</Link>
        </nav>
          </div>
          
        </header>
        {children}
        </body>
    </html>
  );
}
