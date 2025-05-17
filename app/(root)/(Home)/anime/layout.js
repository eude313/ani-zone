
import React from 'react';
import Bottombar from '@/components/Bottombar';

export default function AnimeLayout({ children }) {
  return (
    <main>
      { children }
      <div className='h-auto w-full z-50 hidden sm:fixed bottom-0 left-0 right-0 sm:mb-3'>
        <div className='mx-auto w-full h-full sm:w-1/2 sm:rounded-[10px] bg-[#F4F4F5] dark:bg-[#141413]'>
          <Bottombar/>
        </div>
      </div>
    </main>
  )
}