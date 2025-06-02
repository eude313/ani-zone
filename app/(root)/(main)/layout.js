'use client';

import Bottombar from '@/components/Bottombar';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function MainLayout({ children }) {
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const containerRef = useRef(null);
  const pathname = usePathname();
  
  const hideNavbarPages = ['/settings', '/profile']; 
  const shouldHideNavbar = hideNavbarPages.includes(pathname);
  
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

  useEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;
    const handleScroll = () => {
      setIsScrolled(containerElement.scrollTop > 20);
    };
    
    handleScroll();
    containerElement.addEventListener('scroll', handleScroll);
    return () => {
      containerElement.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted]);

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  if (!isMounted) {
    return null;
  }

  const effectiveCollapsed = isScreenSmall || isSidebarCollapsed;
  const sidebarWidth = effectiveCollapsed ? '70px' : '245px';

  return (
    <div className="flex h-screen overflow-hidden">
      <aside
        className="border-r border-[#DBDBDB] shrink-0 hidden sm:block z-10 
        h-screen overflow-hidden py-[8px] dark:border-[#262626] transition-all duration-300 ease-in-out"
        style={{ width: sidebarWidth }}
        aria-label="Sidebar"
      >
        <Sidebar 
          isCollapsed={effectiveCollapsed}
          isScreenSmall={isScreenSmall}
          onToggleCollapse={handleToggleSidebar}
        />  
      </aside>
      <div className="flex-1 overflow-y-auto" ref={containerRef}>
        {!shouldHideNavbar && <Navbar isScrolled={isScrolled} />}
        
        <main 
          className={`overflow-x-hidden overflow-y-hidden h-[100rem] ${
            shouldHideNavbar ? '' : '-mt-[56px]'
          }`}
        >
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