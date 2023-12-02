import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";
import { title } from "process";

const Actualities = () => {
  const images = [
    {
      title: "48 heures de prière non-stop",
      src: "/images/48h-non-stop.png",
      date: "16 Septembre 2023",
    },
    {
      title: "48 heures de prière non-stop",
      src: "/images/48h-non-stop.png",
      date: "16 Septembre 2023",
    },
    {
      title: "48 heures de prière non-stop",
      src: "/images/48h-non-stop.png",
      date: "16 Septembre 2023",
    },
  ];
  return (
    <section className="flex flex-col items-center p-5 bg-primary text-primary-foreground h-[575px]">
      <h1 className="text-[40px]">Les actualités</h1>
      <div className="container ">
        <Carousel loop>
          {images.map((image, i) => {
            return (
              <div
                className="relative flex-[0_0_100%] flex items-center gap-4 justify-center mt-16"
                key={i}
              >
                <Image
                  src={image.src}
                  width={612}
                  height={342}
                  alt="48h non stop"
                />
                <div className="flex flex-col items-start gap-6 p-8 w-96">
                  <p className="text-gray-500">{image.date}</p>
                  <h2 className="text-[40px] ">{image.title}</h2>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Actualities;
