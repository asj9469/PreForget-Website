"use client"

import CA_PUB_NUM from "@/lib/gtag";
import Image from 'next/image';
import Link from "next/link";
import React from "react";
import Carousel from '@/components/v1/Carousel/Carousel';
import { DialogDefault } from "@/components/Dialog";
//import styled components
import {Features, Main, Title, Demo} from "@/components/v1/view";
import {CenterAlignContainer2, LeftRightContainerCW, LeftRightContainerCCW, LeftContainer, RightContainer} from "@/components/v1/view";

//import images/gifs
import text_logo from "@/public/images/text_logo.png";
import add_tasks from "@/public/gifs/adding_tasks_cropped.gif";
import manage_tasks from "@/public/gifs/manage_tasks_cropped.gif";

const imageItems = [
  <Image width="0" height="0" sizes="100vw" className="h-full w-full" src={'/images/carousel-images/1.jpg'} alt="image1"/>,
  <Image width="0" height="0" sizes="100vw" className="h-full w-full" src={'/images/carousel-images/2.jpg'} alt="image2"/>,
  <Image width="0" height="0" sizes="100vw" className="h-full w-full" src={'/images/carousel-images/5.jpg'} alt="image5"/>,
  <Image width="0" height="0" sizes="100vw" className="h-full w-full" src={'/images/carousel-images/6.jpg'} alt="image6"/>,
  <Image width="0" height="0" sizes="100vw" className="h-full w-full" src={'/images/carousel-images/8.jpg'} alt="image8"/>,
  <Image width="0" height="0" sizes="100vw" className="h-full w-full" src={'/images/carousel-images/9.jpg'} alt="image9"/>,
  <Image width="0" height="0" sizes="100vw" className="h-full w-full" src={'/images/carousel-images/10.jpg'} alt="image10"/>,
]

const navigation = [
  { name: "PreForget 2.0", href: "/v2"},
  { name: "Privacy Policy", href: "/privacy-policy" },
	{ name: "Support", href: "/contact-us" },
];

export default function Home() {
  
  return (
    <div className="bg-black text-white h-screen overflow-y-scroll">
      <Main>
        <DialogDefault/>
        <Title className="custom-background">
        <div className="z-10 w-full max-w-[100vw] flex items-end justify-end text-sm lg:flex">
        <nav className="mt-16 mr-[10vw] animate-fade-in">
          <ul className="flex text-lg items-center justify-center gap-4">
            <Link className='pr-1' key="https://apps.apple.com/us/app/preforget-menu-bar-to-do-app/id6449631717" href="https://apps.apple.com/us/app/preforget-menu-bar-to-do-app/id6449631717" target="_blank" rel="noopener noreferrer">
              Download
            </Link>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="duration-500 text-gray-400 hover:text-gray-200"
              >
                {item.name}
              </Link>
            ))}
            
          </ul>
        </nav>
        </div>
      
        <section className="flex flex-col items-center justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex flex-col items-center gap-4 text-center sm:max-w-[32rem] md:max-w-[42rem] lg:max-w-[64rem]">
            <div className="flex items-center justify-center">
              <Image src={text_logo} alt="Image" style={{ width: '80%' }}/>
            </div>
            
            <div className="mx-4">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl pb-5 mx-auto">
              Don't wait until it's too late.
            </h1>

            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 pb-10 mx-auto">
              Start managing your tasks BEFORE you forget with PreForget. <br/> Currently available on the Mac App Store.
            </p>
            </div>
            
            <div className="pb-40 flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-5">
                <a
                  href="https://apps.apple.com/us/app/preforget-menu-bar-to-do-app/id6449631717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-opacity-70 bg-white  hover:bg-gray-400 text-black py-3 px-6 rounded-md text-xl sm:text-xl mb-4 sm:mb-0"
                >
                  Download from Mac App Store
                </a>
                <a
                  href="https://github.com/asj9469/PreForget"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-opacity-70 bg-blue-gray-900 hover:bg-black text-white py-3 px-6 rounded-md text-xl sm:text-xl"
                >
                  GitHub Repository
                </a>
            </div>
          </div>
      </section>
      </Title>

      <Features>
    <section
      id="features"
      className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl pb-5">
          Features
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-7 pb-10">
          PreForget stays in your menubar to provide easy access. <br /> Here are some key features of the app:
        </p>
      </div>
      <Carousel items={imageItems} />
    </section>
  </Features>

  <Demo>
    <section
      id="demos"
      className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <CenterAlignContainer2>
        <div className="flex flex-col items-center justify-center my-auto gap-6">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl pb-20 mx-auto text-center">
            Easily Add Tasks
          </h1>
          <LeftRightContainerCW>
            <LeftContainer>
              <div className="flex justify-center">
                <Image src={add_tasks} alt="GIF" style={{ width: "95%" }} />
              </div>
            </LeftContainer>
            <RightContainer>
              <h1 className="font-heading text-xl sm:text-xl md:text-2xl lg:text-3xl pb-5 text-center">
                Include details for each task <br /><br />
                Set reminders for important deadlines
              </h1>
            </RightContainer>
          </LeftRightContainerCW>

          <div className="my-12" />

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl pb-20 mx-auto text-center">
            Seamlessly Manage Tasks
          </h1>
          <LeftRightContainerCCW>
            <LeftContainer>
              <h1 className="font-heading text-xl sm:text-xl md:text-2xl lg:text-3xl pb-5 text-center">
                Click on task to edit details <br /><br />Two-finger swipe to delete <br /><br /> Mark as complete with the bullet
              </h1>
            </LeftContainer>
            <RightContainer>
              <div className="flex justify-center">
                <Image src={manage_tasks} alt="GIF" style={{ width: "95%" }} />
              </div>
            </RightContainer>
          </LeftRightContainerCCW>
        </div>
      </CenterAlignContainer2>
    </section>
  </Demo>
      </Main>
    </div>
  )
}
