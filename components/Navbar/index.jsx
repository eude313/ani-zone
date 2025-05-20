'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button'
import { Search } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar({ isScrolled }) {
  const pathname = usePathname();
  
  const generateBreadcrumbs = () => {
    if (!pathname) return [];
    const segments = pathname.split('/').filter(segment => segment);
    const breadcrumbs = [];
    let path = '';
    
    breadcrumbs.push({
      href: '/',
      label: 'Home',
      isCurrent: pathname === '/'
    });
    
    segments.forEach((segment, index) => {
      path += `/${segment}`;
      const label = segment
        .replace(/-/g, ' ')
        .replace(/_/g, ' ')
        .replace(/^\w/, c => c.toUpperCase());
      
      breadcrumbs.push({
        href: path,
        label,
        isCurrent: index === segments.length - 1
      });
    });
    
    return breadcrumbs;
  };
  const breadcrumbs = generateBreadcrumbs();
  
  return (
    <nav 
      className={`sticky top-0 left-0 right-0 z-50 flex items-center py-2 px-2 md:px-8 transition-all duration-300 ${
        isScrolled ? 'bg-black/40 backdrop-blur-md backdrop-saturate-150' :
         'bg-gradient-to-b from-black/90 to-transparent'
      }`}
    >
      {/* Left section */}
      <div className="flex items-center flex-shrink-0 overflow-x-auto mr-1 font-semibold">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={breadcrumb.href}>
                <BreadcrumbItem>
                  {breadcrumb.isCurrent ? (
                    <BreadcrumbPage className="text-violet-400 whitespace-nowrap">
                      {breadcrumb.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink className="text-white hover:text-violet-400 whitespace-nowrap">
                      <Link  href={breadcrumb.href}>{breadcrumb.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator className="text-white" />
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Middle section */}
      <div className="flex-1 mx-2">
        <div className="relative w-full">
          <input
            className="w-full h-10 px-4 py-2 bg-black/60 text-white placeholder-zinc-400 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
            placeholder="Search..."
            type="text"
          />
          <Button 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-zinc-400 hover:text-white 
            bg-transparent rounded-lg cursor-pointer" size="icon"
          >
            <Search/>
          </Button>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-6 bg-violet-600"
        />
        <Avatar className="text-sm font-medium">
          <AvatarImage src="/Images/logo-1.png" />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}