'use client';

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@/components/ui/button';
import { genres } from '@/data'; 

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function GenreSlider() {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const swiperRef = useRef(null);

    // Genre data with icons
   
    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handleSwiperInit = (swiper) => {
        swiperRef.current = swiper;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const handleGenreSelect = (genre) => {
        if (genre.name === 'All') {
            setSelectedGenres(['All']);
        } else {
            setSelectedGenres(prev => {
                const withoutAll = prev.filter(g => g !== 'All');
                
                if (withoutAll.includes(genre.name)) {
                    const updated = withoutAll.filter(g => g !== genre.name);
                    return updated.length === 0 ? ['All'] : updated;
                } else {
                    return [...withoutAll, genre.name];
                }
            });
        }
    };

    const isGenreSelected = (genreName) => {
        if (selectedGenres.length === 0) {
            return genreName === 'All';
        }
        return selectedGenres.includes(genreName);
    };

    return (
        <div className="pt-4 pb-1 px-1 relative">
            {!isBeginning && (
                <button 
                    onClick={handlePrevClick}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background border-2 border-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-200 shadow-lg"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15,18 9,12 15,6"></polyline>
                    </svg>
                </button>
            )}

            {!isEnd && (
                <button 
                    onClick={handleNextClick}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background border-2 border-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-200 shadow-lg"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                </button>
            )}

            <Swiper
                slidesPerView="auto"
                spaceBetween={16}
                onSwiper={handleSwiperInit}
                onSlideChange={handleSlideChange}
                freeMode={false}
                watchSlidesProgress={true}
                watchOverflow={true}
                breakpoints={{
                    320: {
                        slidesPerView: "auto",
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: "auto",
                        spaceBetween: 12,
                    },
                    768: {
                        slidesPerView: "auto",
                        spaceBetween: 16,
                    },
                    1024: {
                        slidesPerView: "auto",
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: "auto",
                        spaceBetween: 24,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper mb-4 mx-12 my-auto"
            >
                {genres.map((genre) => {
                    const IconComponent = genre.icon;
                    return (
                        <SwiperSlide key={genre.id} className="!w-auto py-1">
                            <Button
                                onClick={() => handleGenreSelect(genre)}
                                className={`whitespace-nowrap px-4 py-3 transition-all duration-200 ease-in-out
                                hover:scale-105 text-auto font-semibold min-w-fit flex items-center gap-2 ${
                                    isGenreSelected(genre.name)
                                        ? 'bg-violet-600 hover:bg-violet-700 text-white'
                                        : 'bg-white hover:bg-gray-100/80 text-gray-700'
                                }`}
                            >
                                {IconComponent && (
                                    <IconComponent size={16} className="flex-shrink-0" />
                                )}
                                {genre.name}
                            </Button>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    )
}