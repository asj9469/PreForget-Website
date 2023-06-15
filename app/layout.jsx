"use client"
import './globals.css'
import {useEffect} from "react"
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import {GA_TRACKING_ID, CA_PUB_NUM} from "../lib/gtag";
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    script.onload = function () {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">

        <head>
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
        
        <Script data-ad-client="ca-${CA_PUB_NUM}" async 
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></Script>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"></Script>
        {/* <script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          onLoad={handleScriptLoad}
        /> */}
      </body>
    </html>
  )
}
