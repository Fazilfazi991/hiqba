import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hiqba | Vision Meets Execution",
  description: "Premium Branding, Printing, and Digital Solutions.",
};

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SmoothScroll>
        <body className={`${montserrat.variable} ${inter.variable}`}>
          <CustomCursor />
          <Header />
          {children}
        </body>
      </SmoothScroll>
    </html>
  );
}
