import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { resumeData } from "@/data/resume";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: `${resumeData.personal.name} - ${resumeData.personal.title}`,
  description: "Delivery Manager | Head of PMO | Senior Project Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
