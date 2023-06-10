'use client';
import React, { useState } from 'react';
import { AiOutlineCopy } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CopyButton() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
      const textToCopy = 'preforget@gmail.com';
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          setIsCopied(true);
          toast.success('Email copied to clipboard');
        })
        .catch((error) => {
          console.error('Error copying text to clipboard:', error);
        });
    };

    return (
        <>
        <button 
            onClick={handleCopyClick} 
            style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }} 
            className={"bg-transparent hover:bg-zinc-500 text-white py-3 px-4 rounded-md text-xl sm:text-xl md:text-2xl lg:text-3xl"}
        >
            
            <span>{isCopied ? 'Copied!' : 'preforget@gmail.com'}</span>
        </button>

        <ToastContainer />
        </>
    );
}