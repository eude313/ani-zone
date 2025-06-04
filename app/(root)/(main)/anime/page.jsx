import React from 'react';
import Header from '@/components/Header';
import GenreSlider from '@/components/GenreSlider';


export default function AnimePage() {
  return (
    <div>
      {/*  Header component */}
      <div className="w-full">
        <Header/>
      </div>
      {/*  Genre slider component */}
      <div className="mt-4">
        <GenreSlider/>
      </div>
    </div>
  );
}