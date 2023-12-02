import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const CentreDeFormation = () => {
  return (
    <section className="container flex flex-col items-center">
      <div className="flex w-[892px] h-[294px] my-20">
        <div className="flex flex-col mr-4 ">
          <h1 className="text-[40px]">Un centre de formation</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut
            quia voluptatum laboriosam sed est rem architecto et quis alias quo?
            Dicta est minima, sint tempora voluptatem numquam at ipsam. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Non, aut quia
            voluptatum laboriosam sed est rem architecto et quis alias quo?
            Dicta est minima, sint tempora voluptatem numquam at ipsam.
          </p>
          <div className="mt-auto">
            <Button className="py-3 px-6">En savoir plus</Button>
          </div>
        </div>
        <Image
          src={"/images/default-image.png"}
          width={294}
          height={294}
          alt="Devanture Impact Centre Chrétien Metz"
          className=""
        />
      </div>
    </section>
  );
};

export default CentreDeFormation;
