import Image from 'next/image';
import Link from "next/link";
import React from "react";
import Carousel from '@/components/Carousel/Carousel';

//import styled components
import {Features, Main, Title} from "@/components/view";

//import images
import text_logo from "../public/text_logo.png";

import img1 from "../public/carousel-images/1.jpg";
import img2 from "../public/carousel-images/2.jpg";
import img5 from "../public/carousel-images/5.jpg";
import img6 from "../public/carousel-images/6.jpg";
import img8 from "../public/carousel-images/8.jpg";
import img9 from "../public/carousel-images/9.jpg";
import img10 from "../public/carousel-images/10.jpg";

const imageItems = [
  <Image className="h-full w-full" src={img1} alt="image1"/>,
  <Image className="h-full w-full" src={img2} alt="image2"/>,
  <Image className="h-full w-full" src={img5} alt="image5"/>,
  <Image className="h-full w-full" src={img6} alt="image6"/>,
  <Image className="h-full w-full" src={img8} alt="image8"/>,
  <Image className="h-full w-full" src={img9} alt="image9"/>,
  <Image className="h-full w-full" src={img10} alt="image10"/>,
]

const navigation = [
  { name: "Privacy Policy", href: "/privacy-policy" },
	{ name: "Support", href: "/support" },
];

export default function Home() {
  return (
  <div className="h-screen overflow-y-scroll">
    <Main>
      
      <Title className="custom-background">
      <div className="z-10 w-full max-w-[100vw] flex items-end justify-end text-sm lg:flex">
      <nav className="mt-16 mr-[10vw] animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          <Link key="https://example.com/download" href="https://example.com/download" target="_blank" rel="noopener noreferrer">
            Download
          </Link>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-400 hover:text-zinc-300"
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
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl pb-5">
            Don't wait until it's too late.
          </h1>

          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 pb-10">
            Start managing your tasks BEFORE you forget with PreForget. <br/> Currently available on the Mac App Store.
          </p>
          </div>
          
          <div className="pb-40 flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-5">
              <a
                href="https://example.com/download"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-opacity-70 bg-white  hover:bg-gray-400 text-black py-3 px-6 rounded-md text-xl sm:text-xl mb-4 sm:mb-0"
              >
                Download on Mac App Store
              </a>
              <a
                href="https://github.com/asj9469/PreForget"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-opacity-70 bg-slate-800 hover:bg-black text-white py-3 px-6 rounded-md text-xl sm:text-xl"
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
      <Carousel items={imageItems}/>
    </section>
    </Features>
  
    </Main>
  </div>
  )
}
