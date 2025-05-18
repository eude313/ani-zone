'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button'
import { LogIn, PanelLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    console.log("ScrollY:", window.scrollY); 
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <nav
        className={`sticky top-0 left-0 right-0 z-50 flex items-center justify-between py-2 px-4 md:px-8 transition-all duration-300 ${
            isScrolled
            ?"bg-black/40 backdrop-blur-md backdrop-saturate-150 " 
            :"bg-gradient-to-b from-black/90 to-transparent" 
        }`}
    >

      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 text-white">
        <PanelLeft className="-ml-3" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-xl font-bold uppercase">
          ani<span className="text-violet-600"> zone</span>
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-black/60 border border-violet-900/50 text-sm py-1 px-3 rounded-sm w-1/2 md:w-44 focus:outline-none focus:border-violet-600 text-gray-300"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <Button className="px-3 uppercase">
          <LogIn /> Login
        </Button>
      </div>
    </nav>
  );
}
