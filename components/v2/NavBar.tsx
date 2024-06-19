"use client"
import React from "react";
import { Link } from "react-scroll";
import {
  Navbar as MTNavbar,
  Button
} from "@material-tailwind/react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { NoSSR } from "next-dynamic-no-ssr";

import { useState } from 'react'

interface NavItemProps {
  href: string;
  title: string;
}

const NavItem = ({ href, title }: NavItemProps) => {
  return (

    <Link
      href={""} to={href} spy={true} smooth={true} duration={500} offset={-50}
      className="text-md font-medium text-gray-700 hover:text-gray-500"
    >
      {title}
    </Link>
  );
}

const versions = [
  { id: 1, name: 'PreForget v1',  href: '/' },
  { id: 2, name: 'PreForget v2', href: "/v2" },
]

export default function Navbar() {
  const [selectedVersion, setSelectedVersion] = useState(versions[1])

  return (
    <NoSSR>
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      className="fixed pt-8 pb-5 z-10 border-0 bg-[#e1e3e5]"
    >
      <div className="container mx-auto flex items-center justify-between">

      <Listbox value={selectedVersion}>
        <ListboxButton>
          <div className="font-semibold text-xl text-gray-800 hover:text-gray-600">
            PreForget v2
          </div>
        </ListboxButton>
        <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
        <ListboxOptions anchor="bottom" className="bg-[#e1e3e5] rounded-lg mt-1 z-50">
          {versions.map((version) => (
            <ListboxOption key={version.id} value={version} className="bg-[#e1e3e5] data-[focus]:bg-[#d9d9d9]/60 py-2 px-5">
              <a href={version.href} className="text-md text-gray-800">
                {version.name}
              </a>
            </ListboxOption>
          ))}
        </ListboxOptions>
        </Transition>
      </Listbox>
      
        <ul
          className={`hidden items-center gap-6 lg:flex text-gray-900`}
        >
          <NavItem href="features" title="Features"/>
          <a href="/v2/contact-us" className="text-md font-medium text-gray-700 hover:text-gray-500"> Contact Us</a>
          <a href="https://ko-fi.com/preforget" target="_blank">
            <Button className="text-white bg-[#a5a5a5] rounded py-2 px-4 text-md" size="sm">
              Support Us
            </Button>
          </a>
        </ul>

        {/* <div className="hidden gap-2 lg:flex lg:items-center">
          
        </div> */}
      </div>
    </MTNavbar>
    </NoSSR>
  );
}