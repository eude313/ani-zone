'use client'


import { useState, useEffect } from "react";

export default function MangaPage() {
  // Animation state for the circles
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);
  

  return (
    <div className="min-h-screen">
     manga page


      <div className="min-h-screen bg-black bg-opacity-95 text-white relative overflow-hidden">
        {/* Stars background */}
        <div className="absolute inset-0">
          {/* <Stars /> */}
        </div>
        
        {/* Centered content */}
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen relative z-10">
          {/* Concentric circles */}
          <div className="relative w-64 h-64 mb-12">
            <div className={`absolute inset-0 rounded-full border border-gray-700 opacity-20 transition-all duration-1000 ${animate ? 'scale-100 opacity-20' : 'scale-0 opacity-0'}`} style={{ transitionDelay: '0.1s' }}></div>
            <div className={`absolute inset-0 m-8 rounded-full border border-gray-700 opacity-30 transition-all duration-1000 ${animate ? 'scale-100 opacity-30' : 'scale-0 opacity-0'}`} style={{ transitionDelay: '0.3s' }}></div>
            <div className={`absolute inset-0 m-16 rounded-full border border-gray-700 opacity-40 transition-all duration-1000 ${animate ? 'scale-100 opacity-40' : 'scale-0 opacity-0'}`} style={{ transitionDelay: '0.5s' }}></div>
            <div className={`absolute inset-0 m-24 rounded-full border border-gray-700 opacity-50 transition-all duration-1000 ${animate ? 'scale-100 opacity-50' : 'scale-0 opacity-0'}`} style={{ transitionDelay: '0.7s' }}></div>
            
            {/* Center logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-16 h-16 transition-all duration-700 ${animate ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                {/* <LogoSVG /> */}
              </div>
            </div>
          </div>
          
          {/* Heading */}
          <h2 className={`text-2xl md:text-3xl text-gray-300 font-light mb-24 tracking-wide transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1s' }}>
            Partnering with top industry experts
          </h2>
          
          {/* Partner logos */}
          <div className="w-full max-w-4xl">
            <div className={`flex flex-wrap justify-center gap-8 md:gap-16 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.2s' }}>
              {/* <PartnerLogo icon="lightning" />
              <PartnerLogo icon="circle" />
              <PartnerLogo icon="wave" />
              <PartnerLogo icon="wave" />
              <PartnerLogo icon="lightning" /> */}
            </div>
          </div>
        </div>
      </div>
      <section className="relative bg-[#0a0a23] py-24 flex flex-col items-center justify-center text-white overflow-hidden">
        {/* Concentric Circles */}
        <div className="absolute rounded-full border border-white/10 w-[400px] h-[400px]"></div>
        <div className="absolute rounded-full border border-white/10 w-[300px] h-[300px]"></div>
        <div className="absolute rounded-full border border-white/10 w-[200px] h-[200px]"></div>

        {/* Center Icon */}
        <div className="z-10 flex flex-col items-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center text-2xl font-bold">
            ⬤
          </div>
          <h2 className="text-lg md:text-xl font-medium text-white text-center">
            Partnering with top industry experts
          </h2>
        </div>

        {/* Logo placeholders at bottom */}
        <div className="absolute bottom-10 flex items-center justify-center gap-10 flex-wrap px-4 text-white/70 text-sm">
          {['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'].map((name, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-semibold">
                {name[0]}
              </div>
              <span className="mt-1">{name}</span>
            </div>
          ))}
        </div>
      </section>





           
        {/* Desktop thumbnails carousel functions the way i want but does not have the styles i require */}
        {!isMobile && (
          <div className="absolute bottom-24 right-12 z-40 w-96">
            <Carousel
              className="w-full p-2 border border-amber-300"
              setApi={handleThumbnailApiChange}
              opts={{
                align: "center", 
                loop: true,
                slidesToScroll: 1,
              }}
              value={currentSlide.toString()}
            >
              <CarouselContent className="gap-4">
                {movies.map((movie, index) => (
                  <CarouselItem
                    key={movie.id}
                    value={index.toString()}
                    className={`basis-1/3 transition-all duration-300 px-1 my-auto ${
                      currentSlide === index ? 'z-10' : ''
                    }`}
                  >
                    <button 
                      onClick={() => handleSlideChange(index)}
                      className="relative w-full"
                    >
                      <div className={`relative ${
                        currentSlide === index ? 'h-44' : 'h-42'
                      } transition-all duration-300`}>
                        {currentSlide === index && (
                          <div className="absolute -inset-1 bg-violet-600/30 blur-md animate-pulse rounded-md"></div>
                        )}
                        
                        <div className={`absolute inset-0 shadow-lg transition-all ${
                          currentSlide === index 
                            ? 'border-2 border-violet-500 shadow-violet-600/50 scale-110' 
                            : 'border border-violet-900/30 opacity-70'
                        }`}>
                          <img 
                            src={movie.image} 
                            alt={movie.title}
                            className="w-full h-full object-cover"
                          />
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
                          
                          <div className="absolute top-2 right-2 text-xs text-violet-500 font-bold">
                            {index === 0 ? 'I' : index === 1 ? 'II' : index === 2 ? 'III' : 'IV'}
                          </div>
                          
                          <div className="absolute bottom-0 left-0 right-0">
                            <div className={`h-0.5 w-full ${
                              currentSlide === index ? 'bg-violet-500' : 'bg-violet-900/50'
                            }`}></div>
                            
                            <div className="bg-black/90 p-2">
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
      
            {/* thumbnail navigation - contains the design i want but lucks the functionality i want */}
            {!isMobile && (
              <div className="absolute bottom-12 right-8 z-40 flex justify-end items-end space-x-6 px-0">
                {movies.map((movie, index) => (
                  <button 
                    key={movie.id}
                    onClick={() => handleSlideChange(index)}
                    className={`group relative flex-shrink-0 transition-all duration-300 ${
                      currentSlide === index 
                        ? 'w-36 h-52 z-10' 
                        : 'w-28 h-40 opacity-80 hover:opacity-100 grayscale-[30%] hover:grayscale-0'
                    }`}
                  >
                    {/* Glow effect for active thumbnail */}
                    {currentSlide === index && (
                      <div className="absolute -inset-1 bg-violet-600/30 blur-md animate-pulse"></div>
                    )}
                    
                    {/* Cover with Diablo-style frame */}
                    <div className={`absolute inset-0 shadow-lg ${
                      currentSlide === index 
                        ? 'border-2 border-violet-500 shadow-violet-600/50' 
                        : 'border border-violet-900/30'
                    }`}>
                      {/* Cover image */}
                      <img 
                        src={movie.image} 
                        alt={movie.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
                      
                      {/* Roman numeral for Diablo style */}
                      <div className="absolute top-2 right-2 text-xs text-violet-500 font-bold">
                        {index === 0 ? 'I' : index === 1 ? 'II' : 'III'}
                      </div>
                      
                      {/* Bottom info bar */}
                      <div className="absolute bottom-0 left-0 right-0">
                        {/* Glowing line */}
                        <div className={`h-0.5 w-full ${
                          currentSlide === index ? 'bg-violet-500' : 'bg-violet-900/50'
                        }`}></div>
                        
                        {/* Title with dark background */}
                        <div className="bg-black/90 p-2">
                          <h5 className="text-xs text-white font-medium line-clamp-1">{movie.title}</h5>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
    </div>
  );
}

