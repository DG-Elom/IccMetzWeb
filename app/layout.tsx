import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

import { Header } from "@/src/features/layout/Header";
import { Footer } from "@/src/features/layout/Footer";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import { Navbar } from "@/src/features/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type LayoutProps = {
  children: React.ReactNode;
  modal?: React.ReactNode;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={clsx(inter.className, "h-full")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="">{children}</div>
          <Footer />

          {/* {modal} */}
        </ThemeProvider>
      </body>
    </html>
  );
}
