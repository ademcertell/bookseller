import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bookseller",
  description: "A simple book store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          <main>{children}</main>
      </body>
    </html>
  );
}