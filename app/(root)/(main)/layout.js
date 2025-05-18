'use client';

import Bottombar from '@/components/Bottombar';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React, { useState, useEffect } from 'react';

export default function MainLayout({ children }) {
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 1024); 
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <aside
        className={`border-r border-[#DBDBDB] shrink hidden sm:block z-10 
        ${isScreenSmall ? 'w-[70px]' : 'w-[245px]'} 
        h-screen overflow-hidden py-[8px] dark:border-[#262626]
        ${isScreenSmall ? 'px-[6px]' : 'px-[12px]'}`}
        aria-label="Sidebar"
      >
        <Sidebar/>  
      </aside>
      <div className="flex-1 overflow-y-auto">
        <Navbar/>
        <main className="overflow-x-hidden overflow-y-auto -mt-[46px] h-[100rem]">
          {children}
        </main>
        <div className='h-auto w-full z-50 fixed sm:hidden bottom-0 left-0 right-0 sm:mb-3'>
          <div className='mx-auto w-full h-full sm:w-1/2 sm:rounded-[10px] bg-[#F4F4F5] dark:bg-[#141413]'>
            <Bottombar/>
          </div>
        </div>
      </div>
    </div>
  );
}