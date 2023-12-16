import Image from "next/image";
import Link from "next/link";

interface heroProps {
  title: string;
  nextSectionId: string;
}

export const Hero = ({ title, nextSectionId }: heroProps) => {
  return (
    <section className="h-[91vh] bg-hero w-full bg-cover bg-no-repeat bg-center flex flex-col items-center justify-between relative">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto mt-64 px-4 z-10">
        <div className="min-w-[450px] text-white flex items-center justify-center">
          <h1 className="font-bold w-[1200px] text-[96px] text-center ">
            {title}
          </h1>
        </div>
      </div>
      <Link
        href={`#${nextSectionId}`}
        className="flex items-center justify-end text-white z-10 pb-8 hover:opacity-80"
      >
        <Image src="/svg/chevron-down.svg" width={30} height={30} alt="Arrow" />
        <p className=" text-[16px] ">Découvrir plus</p>
      </Link>
    </section>
  );
};
