"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavLinksType } from "@/types/linksType";

type NavLinksProp = {
  links: NavLinksType[];
};

export const NavLinks = ({ links }: NavLinksProp) => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link) => (
            <NavigationMenuItem key={link.label} className="relative">
              <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-primary text-white">
                {link.sublinks.map((sublink) => (
                  <NavigationMenuLink key={sublink.label} className="">
                    {sublink.label}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
