import { Separator } from "@/components/ui/separator";
import React from "react";
import { links } from "@/lib/link-data";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-start justify-between bg-primary text-primary-foreground p-10 h-[583px] shadow-md">
      <div className="container flex items-center justify-between gap-3">
        <div className="flex left-0 w-full h-full">
          <div className="flex flex-col items-start gap-4">
            {links.map((link) => (
              <div key={link.label}>
                <h2 className="text-[40px] font-semibold">{link.label}</h2>
              </div>
            ))}
          </div>
          <div className=""></div>
        </div>
        <Separator
          className="mx-2 h-2/3 bg-primary-foreground"
          orientation="vertical"
        />
        <div className="flex flex-col h-full w-full items-end justify-start">
          <h2 className="text-[40px] font-semibold">
            Impact Centre Chrétien - Metz
          </h2>

          <div className="flex flex-col items-end">
            <div className="flex flex-col my-6 items-end gap-3">
              <p>7 rue de l’abbé Grégoire, 57550 Metz</p>
              <p>Tel : +33 6 12 87 81 86</p>
              <p>Email : contact@icc-metz.com</p>
            </div>
            <div className="flex space-x-3 py-5">
              <div className="text-primary-foreground">
                <Image
                  src={"/svg/ig-icon.svg"}
                  width={24}
                  height={24}
                  alt="Instagram"
                />
              </div>
              <div className="text-primary-foreground">
                <Image
                  src={"/svg/facebook-icon.svg"}
                  width={24}
                  height={24}
                  alt="Facebook"
                />
              </div>
            </div>
          </div>

          <h2 className="text-[40px] font-semibold">Support</h2>
          <div className="flex flex-col items-end gap-2 mt-8">
            <p>Contactez-nous</p>
            <p>Aide à l’achat</p>
          </div>
        </div>
      </div>
      <div className="flex item-start justify-end gap-4 pl-5 bottom-0">
        <p>Politique de dons</p>
        <p>Conditions d'utilisation</p>
        <p>Plan du site</p>
      </div>
    </footer>
  );
};
