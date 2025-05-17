'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";
import { LogIn } from "lucide-react";
import { Search } from 'lucide-react';
import { useTheme } from "next-themes";
import { useState, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay'
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [focused, setFocused] = useState(false); 
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  
  const panels = [
    "/4b87b51538547599d2d23071ef011c53.jpg", 
    "/Images/7ac24f55b87f9606c6d936a07b0067b5.jpg",
    "/Images/975364bd02272db5d2b3037132c62eb6.jpg",
    "/Images/acc94741304eab75c76352042e6e5d8a.jpg",
    "/5e373050dd49bd0ce6db9e43cb3ecf7b.jpg",
    "/Images/d9b017f4bc2c6c013ae81263098268c9.jpg"
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `radial-gradient(${isDarkMode ? 'white' : 'black'} 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>
      
      {/* Header */}
      <header className="flex justify-between items-center p-4 relative z-10">
        <div className="text-xl font-bold"><span className="text-violet-600">ANI</span> ZONE.</div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/anime" className="text-sm">Anime</Link>
          <Link href="/manga" className="text-sm">Manga</Link>
        </nav>
        <Button variant="default" className="flex items-center justify-center gap-2">
          <LogIn className="h-4 w-4" />
          <span>Log In</span>
        </Button>
      </header>

      {/* Main Content */}
      <div className="min-h-screen pt-20  lg:-mt-8 md:-mt-60 flex flex-col items-center justify-center relative overflow-hidden">        
        <div className="relative z-10 w-full h-full flex justify-center items-center">
          {/* left panels */}
          <div className="absolute left-0 sm:left-4 md:left-8 lg:left-16 xl:left-24 transform -translate-x-1/4 md:translate-x-0 z-10">
            <div className="w-32 sm:w-40 md:w-48 lg:w-56 h-48 sm:h-56 md:h-64 lg:h-80 bg-cover bg-center rounded-xl shadow-xl transform -rotate-12 translate-y-20"
              style={{ backgroundImage: `url(${panels[0]})` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-transparent rounded-xl"></div>
              <div 
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4))
                  `,
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          </div>

          <div className="absolute left-4 sm:left-10 md:left-20 lg:left-32 xl:left-54 transform -translate-x-1/4 z-20">
            <div className="w-32 sm:w-40 md:w-48 lg:w-56 h-48 sm:h-56 md:h-64 lg:h-80 bg-cover bg-center rounded-xl shadow-xl transform -rotate-10 translate-y-12"
              style={{ backgroundImage: `url(${panels[1]})` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl"></div>
              <div 
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4))
                  `,
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          </div>

          <div className="absolute left-12 sm:left-20 md:left-32 lg:left-52 xl:left-72 transform z-30">
            <div className="w-32 sm:w-40 md:w-48 lg:w-56 h-48 sm:h-56 md:h-64 lg:h-80 bg-cover bg-center rounded-xl shadow-xl transform -rotate-6 translate-y-2"
              style={{ backgroundImage: `url(${panels[2]})` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl"></div>
              <div 
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4))
                  `,
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          </div>
  
          {/* Center elements with icons */}
          <div className="relative z-30 flex flex-col items-center justify-center">
            <div className="mb-24 animate-bounce">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                  <img src="/Images/logo-1.png" alt="ani-zone" className="w-12 h-12"/>
                </div>
              </div>
            </div>

            <div className="mt-16 animate-float-slow">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <span className="text-lg font-bold">Ξ</span>
              </div>
            </div>
          </div>
          
          {/* Right panels */}
          <div className="absolute right-12 sm:right-20 md:right-32 lg:right-52 xl:right-72 transform z-30">
            <div className="w-32 sm:w-40 md:w-48 lg:w-56 h-48 sm:h-56 md:h-64 lg:h-80 bg-cover bg-center rounded-xl shadow-xl transform rotate-6 translate-y-2"
              style={{ backgroundImage: `url(${panels[3]})` }}>
              <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/10 to-transparent rounded-xl"></div>
              <div 
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4))
                  `,
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          </div>
          
          <div className="absolute right-4 sm:right-10 md:right-20 lg:right-32 xl:right-54 transform translate-x-1/4 z-20">
            <div className="w-32 sm:w-40 md:w-48 lg:w-56 h-48 sm:h-56 md:h-64 lg:h-80 bg-cover bg-center rounded-xl shadow-xl transform rotate-10 translate-y-12"
              style={{ backgroundImage: `url(${panels[4]})` }}>
              <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/20 to-transparent rounded-xl"></div>
              <div 
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4))
                  `,
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          </div>
          
          <div className="absolute right-0 sm:right-4 md:right-8 lg:right-16 xl:right-24 transform translate-x-1/4 md:translate-x-0 z-10">
            <div className="w-32 sm:w-40 md:w-48 lg:w-56 h-48 sm:h-56 md:h-64 lg:h-80 bg-cover bg-center rounded-xl shadow-xl transform rotate-12 translate-y-20"
              style={{ backgroundImage: `url(${panels[5]})` }}>
              <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/30 to-transparent rounded-xl"></div>
              <div 
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4))
                  `,
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="relative z-40 text-center mt-12 px-4">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Watch,<br /> read & enjoy<br /> Anime
          </h1>
          <p className="text-xs text-gray-400 tracking-wider uppercase font-bold">
           THOUSANDS OF TITLES, COMPLETELY FREE
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-8 mb-20 md:mb-3 flex gap-4 justify-center">
            <Button variant="default" className="rounded-full"asChild>
              <Link href="/anime">
                Browse Anime
              </Link>
            </Button>
            <Button variant="outline" className="rounded-full"asChild>
              <Link href="/manga">
                Read Manga
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative mt-12 flex items-center justify-center w-full py-4">
        <div 
          className="absolute w-full max-w-2xl h-16 rounded-full"
          style={{
            background: 'transparent',
            boxShadow: focused 
              ? '0 0 15px 2px rgba(255, 255, 255, 0.7), 0 0 30px 5px rgba(78, 159, 235, 0.5), 0 0 45px 10px rgba(131, 58, 224, 0.3)'
              : '0 0 10px 1px rgba(255, 255, 255, 0.5), 0 0 20px 3px rgba(78, 159, 235, 0.3), 0 0 30px 5px rgba(131, 58, 224, 0.2)',
            transition: 'box-shadow 0.3s ease'
          }}
        />
        
        <div className="absolute w-full h-px flex items-center">
          <div 
            className="w-1/3 h-px"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)',
              boxShadow: '0 0 8px 1px rgba(255,255,255,0.7), 0 0 12px 4px rgba(78,159,235,0.5)'
            }}
          />
          
          <div 
            className="w-1/3 h-1.5"
            style={{
              background: 'linear-gradient(90deg, rgba(131,58,224,0.8) 0%, rgba(255,255,255,1) 50%, rgba(78,159,235,0.8) 100%)',
              boxShadow: '0 0 15px 2px rgba(255,255,255,0.9), 0 0 30px 5px rgba(131,58,224,0.7)',
              borderRadius: '100px'
            }}
          />
          
          <div 
            className="w-1/3 h-px"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)',
              boxShadow: '0 0 8px 1px rgba(255,255,255,0.7), 0 0 12px 4px rgba(78,159,235,0.5)'
            }}
          />
        </div>
        
        <div className="relative w-full max-w-2xl">
          <div 
            className="w-full h-16 rounded-full flex items-center bg-white"
            style={{
              border: '1px solid rgba(255,255,255,0.3)',
              boxShadow: 'inset 0 0 10px rgba(255,255,255,0.2)'
            }}
          >
            <input
              type="text"
              placeholder=" Search for Anime or Manga...."
              className="w-full h-full bg-transparent text-black px-8 outline-none"
              style={{
                fontSize: '16px',
                fontWeight: '400',
                caretColor: 'white',
                borderRadius: '9999px',
                paddingRight: '50px'
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
              <Search size={20} className="text-black opacity-60" />
            </div>
          </div>
        </div>
      </div>

      <section className="py-10 mb-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8 font-semibold">
            Here are some of the top Searched contents:
          </p>
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1
            }}
            className="w-full max-w-sm mx-auto"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="sm:basis-1/3 md:basis-1/5 lg:basis-1/5 text-center">
                  <div className="h-8 opacity-50 hover:opacity-100 hover:text-black-300 transition flex justify-center items-center cursor-pointer">
                    <span className="font-bold text-gray-400">CNN</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <div class="relative ">
        <div className=' z-10 w-6 h-6 rounded-full bg-purple-500 border-4 border-purple-700
        '></div>
      </div>
      {/* Footer */}
    </div>
  )
}