import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import Link from "next/link";
import React from "react";
import { Heart } from "lucide-react";
import { NavLinks } from "./NavLinks";
import { links } from "@/lib/link-data";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="border-b border-b-accent fixed top-0 z-20 bg-background w-full">
      <div className="container flex items-center justify-between py-4 m-auto gap-1">
        <Link href="/" className="mr-auto">
          <h2 className="text-2xl font-semibold text-primary">ICC Metz</h2>
        </Link>
        <Navbar links={links} />
        <div className="flex ml-auto">
          <Button className="flex gap-2 py-3 px-6">
            <Heart fill="white" /> Faire un don
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
