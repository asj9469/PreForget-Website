"use client"

import React from 'react'
import {useState, useEffect} from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@headlessui/react'

export default function page (){
    const {systemTheme, theme, setTheme} = useTheme()
    const [enabled, setEnabled] = useState(false)

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div className=' h-screen overflow-y-scroll'>

            <Switch
                checked={enabled}
                onChange={() => {
                    setEnabled(!enabled);
                    const newTheme = theme === 'dark' ? 'light' : 'dark';
                    setTheme(newTheme);
                    console.log(newTheme)
                }}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 data-[checked]:bg-white/10 transition duration-200 ease-in-out data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
                >
                <span className="pointer-events-none inline-block w-5 h-5 rounded-full bg-white shadow-lg transition duration-200 ease-in-out transform -translate-x-0 group-data-[checked]:translate-x-6" />
                </Switch>
        </div>
    )
    }