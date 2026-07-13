import type { Metadata } from "next";
// @ts-expect-error CSS imports are handled by Next.js.
import "./globals.css";
import { Providers } from "./providers";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Kota Manohar - Software & AI/ML Engineer",
  description:
    "Software Engineer and AI/ML Engineer building reliable systems and intelligent products.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
