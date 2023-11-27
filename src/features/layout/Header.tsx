import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import Link from "next/link";
import React from "react";
import { Heart } from "lucide-react";
import { NavLinks } from "./NavLinks";
import { NavLinksType } from "@/types/linksType";
import { Navbar } from "./Navbar";

const links = [
  {
    label: "Qui suis-je ?",
    sublinks: [
      {
        label: "En difficulté ?",
        href: "/",
      },
      {
        label: "Assoiffé de Dieu",
        href: "/",
      },
      {
        label: "Disciple de Christ",
        href: "/",
      },
      {
        label: "Jeune",
        href: "/",
      },
      {
        label: "Femme",
        href: "/",
      },
      {
        label: "Homme",
        href: "/",
      },
      {
        label: "Leader",
        href: "/",
      },
      {
        label: "Ado | Enfant",
        href: "/",
      },
    ],
  },
  {
    label: "Nos messages",
    sublinks: [
      {
        label: "Les fondements du Royaume",
        href: "/",
      },
      {
        label: "La croix",
        href: "/",
      },
      {
        label: "Dévotion envers le Christ",
        href: "/",
      },
      {
        label: "Le Saint-Esprit",
        href: "/",
      },
      {
        label: "La mission",
        href: "/",
      },
      {
        label: "Notre espérance",
        href: "/",
      },
    ],
  },
  {
    label: "Qui sommes-nous ?",
    sublinks: [
      {
        label: "Bref historique",
        href: "/",
      },
      {
        label: "La vision locale",
        href: "/",
      },
      {
        label: "Notre Vision - ICC",
        href: "/",
      },
      {
        label: "Au sujet de Yvan Castanou",
        href: "/",
      },
      {
        label: "Localisation",
        href: "/",
      },
      {
        label: "Homme",
        href: "/",
      },
      {
        label: "Leader",
        href: "/",
      },
      {
        label: "Ado | Enfant",
        href: "/",
      },
    ],
  },
  {
    label: "Orientation",
    sublinks: [
      {
        label: "Embauche",
        href: "/",
      },
      {
        label: "Projet de Carrière",
        href: "/",
      },
      {
        label: "Objectifs professionnels",
        href: "/",
      },
      {
        label: "Entrepreneur",
        href: "/",
      },
    ],
  },
  {
    label: "Servir",
    sublinks: [
      { label: "Pourquoi Servir ?", href: "/" },
      { label: "Ministères ICC", href: "/" },
      { label: "Les missions", href: "/" },
      { label: "A propos", href: "/" },
      { label: "Cellule de soutien", href: "/" },
    ],
  },
];

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
