import React from 'react';
import Link from "next/link";
import { PrivacyPolicy, NavContainer, PrivacyPolicyMarginStyle} from "@/components/v1/view";
import Script from 'next/script';

const navigation = [
    { name: "Home", href: "/" },
    { name: "Download", href: "https://apps.apple.com/us/app/preforget-menu-bar-to-do-app/id6449631717" },
    { name: "Support", href: "/support" },
  ];

  export default function PrivacyPolicyPage() {
  return (
         
    <div className="h-screen overflow-y-scroll">
        <NavContainer>
        <div className="z-10 w-full max-w-[100vw] flex items-end justify-end text-sm lg:flex">
        <nav className="mt-16 mr-[10vw] animate-fade-in">
            <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg duration-500 text-zinc-400 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}

            </ul>
        </nav>
        </div>
        </NavContainer>

        <PrivacyPolicy>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-20 text-center">
            Privacy Policy
        </h1>

        <PrivacyPolicyMarginStyle>
        
        <p style={{ paddingBottom: '40px'}} className=" text-lg ">
            At PreForget, we prioritize the privacy and security of our users. This Privacy Policy outlines how we handle user data within our app and explains our commitment to protecting your personal information. Please read this policy carefully to understand how we collect, use, and safeguard any data you provide while using PreForget.
        </p>
        <p style={{ fontSize: '1.5rem', paddingBottom: '20px'}}>
            <strong>Data Collection</strong>
        </p>
        <p style={{ paddingBottom: '40px' }} className=" text-lg ">
            We do not collect any personal information or personally identifiable data from users of PreForget. PreForget operates locally on your device and does not transmit any user data to external servers or third parties.
        </p>
        <p style={{ fontSize: '1.5rem', paddingBottom: '20px' }}>
            <strong>Information Security</strong>
        </p>
        <p style={{ paddingBottom: '40px' }} className=" text-lg ">
            We take security very seriously and have implemented appropriate technical and organizational measures to protect the security and integrity of your data while using PreForget. In addition, PreForget is designed to run locally on the user’s macOS device, and there is no data retrieved from users’ personal devices.
        </p>
        <p style={{ fontSize: '1.5rem', paddingBottom: '20px' }}>
            <strong>Changes to the Privacy Policy</strong>
        </p>
        <p style={{ paddingBottom: '40px' }} className=" text-lg ">
            We reserve the right to update or modify this Privacy Policy from time to time. Any changes will be effective immediately upon posting the revised policy within this document. We will notify our users of any changes in the policy through the app store (as well as our website in the future).
        </p>
        <p style={{ fontSize: '1.5rem', paddingBottom: '20px' }}>
            <strong>Contact Us</strong>
        </p>
        <p style={{ paddingBottom: '40px' }} className=" text-lg ">
            If you have any questions or concerns about this Privacy Policy or the privacy practices of PreForget, please contact us at preforget@gmail.com.
        </p>
        <p style={{ paddingBottom: '40px', fontStyle: 'italic'}}>
            By using PreForget, you signify your acceptance of this Privacy Policy. If you do not agree with this policy, please refrain from using the app.
        </p>

        </PrivacyPolicyMarginStyle>
        </PrivacyPolicy>


    </div>
    
  );
};