'use client'

import React, { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { useMediaQuery } from '@/hooks/use-media-query';


export default function AnimePage() {
  const movies = [
    {
      id: 1,
      title: "Fantastic Beasts: The Secrets of Dumbledore",
      description: "Professor Albus Dumbledore knows the powerful dark wizard Gellert Grindelwald is moving to seize control of the wizarding world.",
      image: "/4b87b51538547599d2d23071ef011c53.jpg",
      tag: "LIVE"
    },
    {
      id: 2,
      title: "The Batman",
      description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
      image: "/Images/acc94741304eab75c76352042e6e5d8a.jpg",
      tag: "NEW"
    },
    {
      id: 3,
      title: "Doctor Strange in the Multiverse of Madness",
      description: "Dr. Stephen Strange casts a forbidden spell that opens the doorway to the multiverse and unleashes a threat too great to handle.",
      image: "/Images/7ac24f55b87f9606c6d936a07b0067b5.jpg",
      tag: "TRENDING"
    },
    {
      id: 4,
      title: "The Demon slayer",
      description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
      image: "/Images/975364bd02272db5d2b3037132c62eb6.jpg",
      tag: "NEW"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState();
  const [thumbnailApi, setThumbnailApi] = useState();
  const isMobile = useMediaQuery("(max-width: 800px)");

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    if (api) {
      api.scrollTo(index);
    }
    if (thumbnailApi) {
      thumbnailApi.scrollTo(index);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (api) {
        const nextSlide = (currentSlide + 1) % movies.length;
        api.scrollTo(nextSlide);
        setCurrentSlide(nextSlide);
        if (thumbnailApi) {
          thumbnailApi.scrollTo(nextSlide);
        }
      }
    }, 5000); 

    return () => clearInterval(timer);
  }, [api, thumbnailApi, currentSlide, movies.length]);

  const handleApiChange = (newApi) => {
    setApi(newApi);
  };

  const handleThumbnailApiChange = (newApi) => {
    setThumbnailApi(newApi);
    if (newApi && currentSlide !== undefined) {
      setTimeout(() => {
        newApi.scrollTo(currentSlide);
      }, 100);
    }
  };

  useEffect(() => {
    if (api) {
      const handleSelect = () => {
        const selectedIndex = api.selectedScrollSnap();
        setCurrentSlide(selectedIndex);
        if (thumbnailApi) {
          thumbnailApi.scrollTo(selectedIndex);
        }
      };
      
      api.on('select', handleSelect);
      return () => {
        api.off('select', handleSelect);
      };
    }
  }, [api, thumbnailApi]);
  
  useEffect(() => {
    if (thumbnailApi && currentSlide !== undefined) {
      thumbnailApi.scrollTo(currentSlide);
    }
  }, [currentSlide, thumbnailApi]);

  return (
    <div>
      <div className="bg-black text-white w-full relative min-h-screen">
        {/* Carousel container */}
        <div className="absolute inset-0 w-full h-screen">
          <Carousel 
            className="w-full h-full" 
            onValueChange={(value) => setCurrentSlide(parseInt(value))}
            setApi={handleApiChange}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {movies.map((movie, index) => (
                <CarouselItem key={movie.id} value={index.toString()}>
                  <div className="relative w-full h-screen">
                    {/* Movie background image */}
                    <div className="absolute inset-0 w-full h-full">
                      <img 
                        src={movie.image} 
                        alt={movie.title}
                        className="w-full h-full object-cover"
                      />
                      {/* gradient overlay for dramatic effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
                      
                      {/* Violet accents/glow */}
                      <div className="absolute inset-0 bg-violet-900/20 mix-blend-overlay"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* navigation buttons */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40">
              <div className="ml-2">
                <CarouselPrevious 
                  className="h-12 w-12 rounded-full bg-black/60 hover:bg-violet-900/70 border-2 border-violet-800/70 text-white mr-4 focus:outline-none" 
                  onClick={() => {
                    const prevSlide = (currentSlide - 1 + movies.length) % movies.length;
                    handleSlideChange(prevSlide);
                  }}
                />
              </div>
              <CarouselNext 
                className="h-12 w-12 rounded-full bg-black/60 hover:bg-violet-900/70 border-2 border-violet-800/70 text-white ml-4 focus:outline-none" 
                onClick={() => {
                  const nextSlide = (currentSlide + 1) % movies.length;
                  handleSlideChange(nextSlide);
                }}
              />
            </div>
            
            {/* indicator dots */}
            <div className="absolute bottom-16 left-20 md:left-12 flex items-center space-x-2 z-20">
              {movies.map((_, index) => (
                <button
                  key={index}
                  className={`h-1 transition-all duration-300 rounded-lg ${
                    currentSlide === index 
                      ? "bg-violet-600 w-6" 
                      : "bg-gray-600 w-3 hover:bg-violet-600/80"
                  }`}
                  onClick={() => handleSlideChange(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
        
        {/* Main content container */}
        <div className="relative z-30 flex flex-col justify-center h-screen">
          <div className="px-4 md:px-12 max-w-lg h-screen flex flex-col justify-center pt-20 md:pt-0">
            <div className="mb-4 md:mb-6">
              <span className="bg-violet-900 text-white text-xs px-4 py-1 rounded-sm border-l-2 border-violet-600 uppercase tracking-wider font-medium">
                {movies[currentSlide].tag}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight text-gray-100 uppercase">
              {movies[currentSlide].title}
            </h2>
            
            <p className="text-gray-300 mb-6 md:mb-8 text-sm leading-relaxed border-l border-violet-800 pl-4">
              {movies[currentSlide].description}
            </p>
            
            <div className="flex space-x-4 mb-8">
              <button className="bg-violet-800 hover:bg-violet-700 text-white font-medium px-6 md:px-8 py-2 md:py-3 rounded-sm uppercase tracking-wider text-sm border-b-2 border-violet-950 transition-all">
                Watch Now
              </button>
              <button className="border border-gray-700 hover:border-violet-700 hover:bg-violet-900/20 rounded-sm p-2 md:p-3 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 hover:text-violet-400">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Desktop thumbnails */}
        {!isMobile && (
          <div className="absolute bottom-24 right-12 z-40 w-auto">
            <Carousel
              className="w-full"
              setApi={handleThumbnailApiChange}
              opts={{
                align: "center",
                loop: true,
                slidesToScroll: 1,
              }}
              value={currentSlide.toString()}
            >
              <CarouselContent className="flex gap-2 px-2">
                {movies.map((movie, index) => (
                  <CarouselItem
                    key={movie.id}
                    value={index.toString()}
                    className={`basis-auto flex-shrink-0 transition-all duration-300 my-auto ${
                      currentSlide === index ? 'z-10' : ''
                    }`}
                  >
                    <button
                      onClick={() => handleSlideChange(index)}
                      className="relative"
                    >
                      <div className={`group relative transition-all duration-300 ${
                        currentSlide === index
                          ? 'w-36 h-52 z-10'
                          : 'w-28 h-40 opacity-80 hover:opacity-100 grayscale-[30%] hover:grayscale-0'
                      }`}>
                        {/* Glow effect for active thumbnail */}
                        {currentSlide === index && (
                          <div className="absolute -inset-1 bg-violet-600/30 blur-md animate-pulse rounded-lg"></div>
                        )}
                        
                        <div className={`absolute inset-0 shadow-lg rounded-md ${
                          currentSlide === index
                            ? 'border-2 border-violet-500 shadow-violet-600/50'
                            : 'border border-violet-900/30'
                        }`}>
                          {/* Cover image */}
                          <img
                            src={movie.image}
                            alt={movie.title}
                            className="w-full h-full object-cover rounded-md"
                          />
                          
                          {/* Dark gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60
                           to-black/20"></div>
                          
                          {/* Roman numeral for Diablo style */}
                          <div className="absolute top-2 right-2 text-xs text-violet-500 font-bold">
                            {index === 0 ? 'I' : index === 1 ? 'II' : index === 2 ? 'III' : 'IV'}
                          </div>
                          
                          {/* Bottom info bar */}
                          <div className="absolute bottom-0 left-0 right-0">
                            {/* Glowing line */}
                            <div className={`h-0.5 w-full ${
                              currentSlide === index ? 'bg-violet-500' : 'bg-violet-900/50'
                            }`}></div>
                            
                            {/* Title with dark background */}
                            <div className="bg-black/90 p-2 rounded-b-md">
                              <h5 className="text-xs text-white font-medium line-clamp-1">{movie.title}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}
        

        {/* Footer area */}
        <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col md:flex-row justify-between items-center 
        px-4 md:px-12 py-4 bg-gradient-to-t from-black to-transparent">
          <div className="flex items-center space-x-6 mb-2 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 text-xs">Rating:</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-violet-600">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
            <div>
              <span className="text-gray-500 text-xs">Release: 2022</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-800 hover:border-violet-800 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-800 hover:border-violet-800 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}