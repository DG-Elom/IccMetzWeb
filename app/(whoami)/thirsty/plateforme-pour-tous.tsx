import CustomContainerTextImage from "@/components/custom-container-text-image";
import React from "react";

function PlateformePourTous() {
  return (
    <section
      id="PlateformePourTous"
      className="container mx-auto px-4 py-10 flex flex-col items-center justify-center"
    >
      <CustomContainerTextImage
        title="Une plateforme pour tous"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut
              quia voluptatum laboriosam sed est rem architecto et quis alias
              quo? Dicta est minima, sint tempora voluptatem numquam at ipsam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut
              quia voluptatum laboriosam sed est rem architecto et quis alias
              quo? Dicta est minima, sint tempora voluptatem numquam at ipsam."
        imageSrc={"/images/devanture.png"}
      />
    </section>
  );
}

export default PlateformePourTous;
