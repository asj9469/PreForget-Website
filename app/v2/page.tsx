"use client"

import React from 'react'
import Navbar from '@/components/v2/NavBar'
import Footer from '@/components/v2/Footer'
import IntroSection from '@/components/v2/IntroSection'
import { Typography } from "@material-tailwind/react";
import { Feature_Image_Left, Feature_Image_Right } from '@/components/v2/Features'

export default function Home_v2 (){

    return (
        <div className=' bg-white h-screen overflow-y-scroll'>
            <Navbar/>
            <IntroSection/>
            <Typography variant="h1" color="blue-gray" className="pt-24 mb-4 flex justify-center">
                Newly Added Features
            </Typography>
            <Feature_Image_Left
                src={"/gifs/google_gemini_demo.gif"} 
                title={"Google Gemini Integration"}
                subtitle={"Completely free to users!"}
                text={"The newly integrated AI creates task-related messages to increase interactivity and makes task management less boring."}
            />
            <Feature_Image_Right 
                src={"/gifs/google_gemini_demo.gif"}
                title={"Google Gemini Integration"}
                subtitle={"Completely free to users!"}
                text={"The newly integrated AI creates task-related messages to increase interactivity and makes task management less boring."}
            />
            <Footer/>
        </div>
    )
}