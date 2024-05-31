import React from 'react';
import Link from "next/link";
import {NavContainer, LeftSupportContainer, RightSupportContainer, SupportContainer, CenterAlignContainer} from "@/components/v1/view";
import CopyButton from "@/components/CopyButton";
// import { ToastContainer } from 'react-toastify';

const navigation = [
    { name: "Home", href: "/" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];


export default function SupportPage() {
    return(
        <div className="text-white h-screen overflow-y-scroll, custom-background">
        <NavContainer>
        <div className="z-10 w-full max-w-[100vw] flex items-end justify-end text-sm lg:flex">
        <nav className="mt-16 mr-[10vw] animate-fade-in">
            <ul className="text-lg flex items-center justify-center gap-4">
            <Link className='pr-1' key="https://apps.apple.com/us/app/preforget-menu-bar-to-do-app/id6449631717" href="https://apps.apple.com/us/app/preforget-menu-bar-to-do-app/id6449631717" target="_blank" rel="noopener noreferrer">
              Download
            </Link>
            {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="duration-500 text-zinc-400 hover:text-zinc-300"
            >
              {item.name}
            </Link>
            ))}
            </ul>
        </nav>
        </div>
        </NavContainer>
        
        <CenterAlignContainer>
          <SupportContainer>
            <LeftSupportContainer>
                <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Contact Us
                </h1>
            </LeftSupportContainer>
            <RightSupportContainer>
            <h1 className="font-heading text-xl sm:text-xl md:text-2xl lg:text-3xl pb-5 text-center">
                If you need any form of assistance, please contact the developer at:
                <br/><br/>
                <div className="flex justify-center">
                    <CopyButton />
                </div>
            </h1>

            </RightSupportContainer>

            </SupportContainer>
        </CenterAlignContainer>
          

        </div>
    )
    
}