"use client"
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import type { CarouselProps } from "@material-tailwind/react";

export function CarouselTransition() {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
        <Carousel transition={{ duration: 2 }} autoplay={true} loop={true} className=" ring-4 ring-white mr-10 rounded-xl w-[500px] h-auto">
            <Image
                src="/images/new-carousel-images/pic1-1.png"
                alt="metamask"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                />
            <Image
                src="/images/new-carousel-images/pic2.png"
                alt="metamask"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
            />
            {/* <Image
                src="/images/new-carousel-images/pic3.png"
                alt="metamask"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
            /> */}
            <Image
                src="/images/new-carousel-images/pic4.png"
                alt="metamask"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
            />
            <Image
                src="/images/new-carousel-images/pic5.png"
                alt="metamask"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
            />
            <Image
                src="/images/new-carousel-images/pic6.png"
                alt="metamask"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
            />
            <Image
                src="/images/new-carousel-images/pic7.png"
                alt="metamask"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
            />
            <Image
                src="/images/new-carousel-images/pic10-history.png"
                alt="metamask"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
            />
            <Image
                src="/images/new-carousel-images/pic8-about.png"
                alt="metamask"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
            />
            <Image
                src="/images/new-carousel-images/pic9-settings.png"
                alt="metamask"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
            />
            
    </Carousel>
   </div>
  );
}