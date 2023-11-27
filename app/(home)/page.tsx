"use client";

import { Button } from "@/components/ui/button";
import img from "@/public/IMG.png";
import { Footer } from "@/src/features/layout/Footer";
import { Header } from "@/src/features/layout/Header";
import { Hero } from "@/src/landing-page/hero";
import InfoIccMetz from "@/src/landing-page/info-iccmetz";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero title={"Impact Centre Chrétien Metz"} />
      <InfoIccMetz />
    </main>
  );
}
