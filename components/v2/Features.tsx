"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { NoSSR } from "next-dynamic-no-ssr";

const OPTIONS = [
  {
    title: "100",
    description: "Learning Courses",
  },
  {
    title: "500+",
    description: "Expert Instructors",
  },
  {
    title: "24/7",
    description: "Support",
  },
  {
    title: "5/5",
    description: "Review Stars",
  },
];

export function Feature_Image_Left(
    {src, title, subtitle, text}: {src: string, title: string, subtitle: string, text: string}) {
  return (
    <NoSSR>
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width="0"
          height="0"
          src={src}
          className="col-span-1 w-1/2 mx-auto lg:w-10/12 h-full"
          alt="feature image"
        />
        {/* <video width="256" height="256" controls preload="none">
            <source src="/gifs/google_gemini.mp4" type="video/mp4" />
        </video> */}
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            {title}
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 px-4 text-left  text-xl text-gray-800 lg:px-0  "
          >
            {subtitle}
        </Typography>
        <Typography
            variant="lead"
            className="mb-5 px-4 text-left  text-xl text-gray-800 lg:px-0  "
          >
            {text}
          </Typography>
        </div>
      </div>
    </section>
    </NoSSR>
  );
}

export function Feature_Image_Right(
    {src, title, subtitle, text}: {src: string, title: string, subtitle: string, text: string}) {
    return (
      <NoSSR>
      <section className="py-20 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          
          <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              Google Gemini Integration
            </Typography>
            <Typography
              variant="lead"
              className="mb-5 px-4 text-left  text-xl text-gray-800 lg:px-0  "
            >
              Completely free to users!
              </Typography>
              <Typography
              variant="lead"
              className="mb-5 px-4 text-left  text-xl text-gray-800 lg:px-0  "
            >
              The newly integrated AI creates task-related messages to increase interactivity and makes task management less boring.
            </Typography>
            
          </div>
          <Image
            width="0"
            height="0"
            src={src}
            className="col-span-1 w-1/2 mx-auto lg:w-10/12 h-full"
            alt="feature image"
          />
        </div>
      </section>
      </NoSSR>
    );
  }