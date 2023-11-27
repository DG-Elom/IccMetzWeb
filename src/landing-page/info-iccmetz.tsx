import Image from "next/image";
import devanture from "@/public/images/devanture.png";
import { Button } from "@/components/ui/button";

const InfoIccMetz = () => {
  return (
    <section className="container flex flex-col items-center">
      <div className="flex w-[892px] h-[294px] m-10">
        <div className="flex flex-col mr-4 ">
          <h1 className="text-[40px]">Impact Centre Chrétien Metz</h1>
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
          src={devanture}
          width={294}
          height={294}
          alt="Devanture Impact Centre Chrétien Metz"
          className=""
        />
      </div>
      <div className="flex w-[892px] h-[294px] m-10">
        <Image
          src={"/images/ap-elie.png"}
          width={294}
          height={294}
          alt="Bergers Impact Centre Chrétien Metz"
          className=""
        />
        <div className="flex flex-col ml-4 ">
          <h1 className="text-[40px]">Nos bergers</h1>
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
      </div>
    </section>
  );
};

export default InfoIccMetz;
