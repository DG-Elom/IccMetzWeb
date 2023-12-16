import Image from "next/image";
import devanture from "@/public/images/devanture.png";
import { Button } from "@/components/ui/button";
import CustomContainerTextImage from "@/components/custom-container-text-image";

const InfoIccMetz = () => {
  return (
    <section id="infoIccMetz" className="container flex flex-col items-center">
      <CustomContainerTextImage
        title="Impact Centre Chrétien Metz"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut
              quia voluptatum laboriosam sed est rem architecto et quis alias
              quo? Dicta est minima, sint tempora voluptatem numquam at ipsam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut
              quia voluptatum laboriosam sed est rem architecto et quis alias
              quo? Dicta est minima, sint tempora voluptatem numquam at ipsam."
        imageSrc={"/images/devanture.png"}
        imagePosition="right"
      />
      <CustomContainerTextImage
        title="Nos bergers"
        content="L'âme de notre église réside dans les enseignements et le suivi des âmes. Ayant la mission de conduire le campus de l'église Impact Centre Chrétien de Metz, l'Assistant Pasteur Elie FOALEM et sa épouse, notre sœur Malou FOALEM, portent avec dévotion cette responsabilité.

Leur passion pour Jésus-Christ se traduit avec simplicité, détermination et d'une consécration totale à notre Seigneur. Leur mission est simple : Répandre le message du Royaume de Dieu et former une légion d'âmes conquérantes dans Metz et ses alentours.

Leur amour pour la Parole divine est vibrant, leur zèle pour gagner et prendre soin des âmes est inébranlable. 

Cette magnifique mission est basée sur la foi et l'engagement envers notre Seigneur, et c'est dans l'unité et la dévotion que nos bergers accompagnent chaque membre de notre communauté."
        imageSrc={"/images/ap-elie.png"}
      />
    </section>
  );
};

export default InfoIccMetz;
