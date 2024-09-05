import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-roboto",
});

const regularBoldCello = localFont({
  src: "./RegularBoldCello-Heavy.ttf",
  weight: "900",
  display: "swap",
  variable: "--font-regular-bold-cello",
});

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
    <html
      lang="en"
      className={cn(
        roboto.className,
        roboto.variable,
        regularBoldCello.variable,
      )}
    >
      <body className={cn(roboto.className)}>{children}</body>
    </html>
  );
}
