"use client";
import Image from "next/image";
import { Link } from "react-scroll";
import { Typography, Button } from "@material-tailwind/react";
import { NoSSR } from "next-dynamic-no-ssr";

export default function Footer() {
  return (
    <NoSSR>
    <footer className="mt-10 pb-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="/v2"
              variant="h5"
              color="white"
              className="mb-2"
            >
              PreForget
            </Typography>
            <Typography color="white" className="mb-6 font-normal">
              Reshaping task management
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              <a href="/v2/privacy-policy" className="py-1 font-medium transition-colors pr-3 text-white">
                Privacy Policy
              </a>
              
              <a href="/v2/contact-us" className="py-1 font-medium transition-colors pr-3 text-white">
                Contact Us
              </a>

              <a href="https://ko-fi.com/preforget" target="_blank" className="py-1 px-3 font-medium transition-colors pr-3 text-white">
                Support Us
              </a>
              
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography variant="h6" color="white" className="mb-3">
              Get the app
            </Typography>
            <div className="flex flex-col gap-2">
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
        </div>
      </div>
    </footer>
    </NoSSR>
  );
}