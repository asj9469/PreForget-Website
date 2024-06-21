"use client"

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { CarouselTransition } from "./NewCarousel";
import { NoSSR } from "next-dynamic-no-ssr";

export default function IntroSection() {
  return (
    <NoSSR>
    <div className="relative min-h-screen w-full">
      <header className="grid min-h-[49rem] bg-[#e3e4e5] px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <div className="text-gray-900 text-6xl font-semibold">
            PreForget v2
            </div>
            <Typography
              variant="lead"
              className="mt-4 mb-7 !text-gray-900 md:pr-5 xl:pr-12"
            >
              Interactive task manager app developed to reshape user experience
              <br/>
              Our aim is to make task management pretty fun
            </Typography>
            <Typography className="mb-4 text-gray-600" variant="h6">
                Get Started Before You Forget...
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <a href="https://apps.apple.com/us/app/preforget-menu-bar-to-do-app/id6449631717" target="_blank">
              <Button
                size="md"
                color="white"
                className="flex justify-center items-center w-[180px] h-[40px] p-0"
              >
                <Image
                  width={200}
                  height={100}
                  src="/images/MacAppStore.png"
                  alt="metamask"
                  className="w-full h-auto"
                />
              </Button>
              </a>
            </div>
          </div>

          <div className="relative  max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0">
            <CarouselTransition/>
          </div>
        



        </div>
      </header>
      <div className="mx-8 lg:mx-32 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            Have Fun Being Productive
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Download PreForget to start having fun with your tasks right from your mac menu bar.
            Interactive elements such as the witty AI-generated responses based on your inputs
            help make task management less of a hassle and more of an engaging activity!
          </Typography>
        </div>
      </div>
    </div>
    </NoSSR>
  );
}