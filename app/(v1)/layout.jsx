"use client"
import '@/app/globals.css'
import {useEffect} from "react"
import { Inter, Noto_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import {GA_TRACKING_ID, CA_PUB_NUM} from "../../lib/gtag";
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })
const noto_sans = Noto_Sans({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700", "800"], })


const metadata = {
  title: 'PreForget',
  description: 'Manage your tasks BEFORE you forget.',
  image: "../public/images/social_preview.jpg",
}

export default function RootLayout({
  children,
// }: {
//   children: React.ReactNode
}) {

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  //   script.async = true;
  //   script.onload = function () {
  //     window.dataLayer = window.dataLayer || [];
  //     function gtag() {
  //       window.dataLayer.push(arguments);
  //     }
  //     gtag('js', new Date());
  //     gtag('config', GA_TRACKING_ID);
  //   };
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <html lang="en">

        <head>
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CA_PUB_NUM}"
        />
        <title>PreForget</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:width" content="1899" />
        <meta property="og:image:height" content="1080" />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={metadata.image} />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        {/* <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CA_PUB_NUM}"
                crossorigin="anonymous"></Script> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"></Script>
      </body>
    </html>
  )
}
