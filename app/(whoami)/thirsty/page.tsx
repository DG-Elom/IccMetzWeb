import { Button } from "@/components/ui/button";
import { Hero } from "@/src/landing-page/hero";
import Image from "next/image";
import devanture from "@/public/images/devanture.png";
import CustomContainerTextImage from "@/components/custom-container-text-image";
import PlateformePourTous from "./plateforme-pour-tous";
import PlateformeImagesCard from "./plateforme-images-card";

export default function ThirstyPage() {
  return (
    <main>
      <Hero title={"Qui suis-je ?"} nextSectionId="PlateformePourTous" />
      <PlateformePourTous />
      <PlateformeImagesCard />
    </main>
  );
}
