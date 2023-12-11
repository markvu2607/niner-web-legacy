import { inter } from "@/configs/font";
import { cn } from "@/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Niner",
    default: "Niner",
  },
  description: "Niner is a social network platform for book reader.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/short-logo.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={cn(inter.className, "antialiased")}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
