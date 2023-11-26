import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import Link from "next/link";
import React from "react";
import { Heart } from "lucide-react";

const links = [
  { label: "Qui suis-je ?", href: "/", current: false, sublinks: [] },
  { label: "Nos messages", href: "/", current: false, sublinks: [] },
  {
    label: "Qui sommes-nous ?",
    href: "/",
    current: false,
    sublinks: [],
  },
  {
    label: "Orientation",
    href: "/",
    current: false,
    sublinks: [],
  },
  {
    label: "Servir",
    href: "/",
    current: false,
    sublinks: [],
  },
];

export const Header = () => {
  return (
    <header className="border-b border-b-accent fixed top-0 z-20 bg-background w-full">
      <div className="container flex items-center py-4 m-auto gap-1">
        <Link href="/" className="mr-auto">
          <h2 className="text-2xl font-bold ">Icc Metz</h2>
        </Link>
        <div className="flex items-center gap-10">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className={`
              text-primary hover:bg-gray-300 p-2 rounded-md`}
            >
              {link.label}
            </Link>
          ))}
          <Button className="flex gap-2 py-3 px-6">
            <Heart fill="white" /> Faire un don
          </Button>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};
