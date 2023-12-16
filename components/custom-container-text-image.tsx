import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import clsx from "clsx";

interface CustomContainerTextImageProps {
  imagePosition?: "left" | "right";
  imageSrc: string;
  title: string;
  content: string;
}

const CustomContainerTextImage = ({
  imagePosition = "left",
  imageSrc = "/images/ap-elie.png",
  title = "Impact Centre Chrétien Metz",
  content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut quia voluptatum laboriosam sed est rem architecto et quis alias quo? Dicta est minima, sint tempora voluptatem numquam at ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut quia voluptatum laboriosam sed est rem architecto et quis alias quo? Dicta est minima, sint tempora voluptatem numquam at ipsam.",
}: CustomContainerTextImageProps) => {
  return (
    <div className="w-3/4 m-3 shadow-md">
      <Image
        src={imageSrc}
        width={294}
        height={294}
        alt={title}
        className={clsx(
          `float-${imagePosition} rounded ${
            imagePosition === "left" ? "mr-4" : "ml-4"
          }`
        )}
      />
      <div className="flex flex-col justify-between mx-4 gap-4">
        <h1 className="text-[40px] ">{title}</h1>
        <p className="">{content}</p>
        <div className="">
          <Button className="py-3 px-6">En savoir plus</Button>
        </div>
      </div>
    </div>
  );
};

export default CustomContainerTextImage;
