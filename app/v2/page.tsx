import React from 'react'
import Navbar from '@/components/v2/NavBar'
import Footer  from '@/components/v2/Footer'
import IntroSection from '@/components/v2/IntroSection'


export default function page (){

    return (
        <div className=' bg-white h-screen overflow-y-scroll'>
            <Navbar/>
            <IntroSection/>
            <Footer/>
        </div>
    )
    }