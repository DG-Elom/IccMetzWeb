import Image from "next/image";
import React from "react";

function PlateformeImagesCard() {
  return (
    <div className="flex flex-col items-center gap-6 p-6 w-[448px] h-[579px] bg-primary">
      <Image
        src="/images/default-image.png"
        width={400}
        height={461}
        alt="Plateforme Images Card"
      />
      <h2>{"Homme d'impact"}</h2>
    </div>
  );
}

export default PlateformeImagesCard;
