import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import {GA_TRACKING_ID, CA_PUB_NUM} from "../../lib/gtag";
import Script from 'next/script';
// import { ThemeProvider } from "@/components/v2/material-tailwind";


const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'PreForget v2',
  description: 'Manage your tasks BEFORE you forget.',
  image: "../public/images/social_preview.jpg",
}

export default function RootLayout({
  children,
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>PreForget</title>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
