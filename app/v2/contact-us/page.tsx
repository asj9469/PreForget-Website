"use client"
import React from 'react'
import CopyButton from '@/components/CopyButton'
import Navbar from '@/components/v2/NavBar'
import Footer from '@/components/v2/Footer'

export default function ContactUs (){
    console.log(`Building contact page`)
  return (
    <div className='flex flex-col'>
    <Navbar/>
    <div className='flex flex-col lg:flex-row justify-center items-center gap-12 mt-20 lg:gap-64 py-32 lg:py-72 '>
          
        <div className='flex-1 flex justify-end items-center pr-5'>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl">
                Contact Us
            </h1>
        </div>
        <div className='flex-1 flex justify-start items-center'>
        <h1 className="font-heading text-xl sm:text-xl md:text-2xl pb-5 text-center">
            Having issues? Please contact us at:
            <br/><br/>
            <div className="flex justify-center">
                <CopyButton />
            </div>
        </h1>

        </div>
    </div>
    <Footer/>
    </div>
  )
}
