import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Kota Manohar - Full Stack Developer",
  description:
    "Full Stack Developer Intern and M.Tech candidate in Artificial Intelligence and Machine Learning.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
