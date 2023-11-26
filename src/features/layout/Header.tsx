import { ThemeToggle } from "@/src/theme/ThemeToggle";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="border-b border-b-accent fixed top-0 z-20 bg-background w-full">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <Link href="/" className="mr-auto">
          <h2 className="text-2xl font-bold ">Icc Metz</h2>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};
