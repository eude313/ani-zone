'use client';

import Link from "next/link";
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { usePathname } from "next/navigation";
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator";
import { navigationItems, bottomItems } from '@/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Sidebar({ isCollapsed = false }) {
  const pathname = usePathname();

  const isRouteActive = (href) => {
    return pathname === href;
  };

  const hasActiveSubmenuItem = (submenuItems) => {
    return submenuItems?.some(item => isRouteActive(item.href));
  };

  const NavItem = ({ item }) => {
    const isItemActive = item.href ? isRouteActive(item.href) : hasActiveSubmenuItem(item.submenuItems);
    
    if (item.hasSubmenu) {
      if (isCollapsed) {
        return (
          <div className="flex flex-col items-center mb-2">
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "w-10 h-10 text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-950 mb-3",
                      isItemActive && "bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={10}>
                  <div className="space-y-1">
                    <p className="font-medium">{item.title}</p>
                    {item.submenuItems.map((subItem, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={cn("w-2 h-2 rounded-full", subItem.dotColor || "bg-gray-400")}></div>
                        <p className="text-xs text-gray-500">{subItem.title}</p>
                      </div>
                    ))}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            {/* Submenu dots */}
            <div className="flex flex-col items-center space-y-4">
              {item.submenuItems.map((subItem, index) => (
                <TooltipProvider key={index} delayDuration={300}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={subItem.href}>
                        <div className={cn(
                          "w-2 h-2 rounded-full cursor-pointer hover:scale-125 transition-transform",
                          subItem.dotColor || "bg-gray-400",
                          isRouteActive(subItem.href) && "ring-2 ring-violet-300 ring-offset-1"
                        )}></div>
                      </Link>
                    </TooltipTrigger> 
                    <TooltipContent side="right" sideOffset={10}>
                      <p>{subItem.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        );
      } else {
        return (
          <div className="mb-2">
            {/* Main item */}
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start h-10 px-3 text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-950 hover:text-violet-600 cursor-default",
                isItemActive && "bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400"
              )}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span className="flex-1 text-left">{item.title}</span>
            </Button>
            
            {/* Submenu items - always visible */}
            <div className="space-y-1 relative mt-2">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700"></div>
              
              {item.submenuItems.map((subItem, index) => (
                <div key={index} className="relative flex items-center">
                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href={subItem.href} className="ml-10 flex-1">
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start h-9 px-3 text-sm text-gray-600 dark:text-gray-400 hover:bg-violet-50 dark:hover:bg-violet-950 hover:text-violet-600",
                              isRouteActive(subItem.href) && 
                              "bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400"
                            )}
                          >
                            <div className="flex items-center gap-2 w-full">
                              <div className={cn("w-2 h-2 rounded-full flex-shrink-0", subItem.dotColor || "bg-gray-400")}></div>
                              <span className="flex-1 text-left">{subItem.title}</span>
                            </div>
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="right" sideOffset={10}>
                        <div className="flex items-center gap-2">
                          <div className={cn("w-2 h-2 rounded-full", subItem.dotColor || "bg-gray-400")}></div>
                          <p>{subItem.title}</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ))}
            </div>
          </div>
        );
      }
    }

    if (isCollapsed) {
      return (
        <div className="flex justify-center mb-2">
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "w-10 h-10 text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-950",
                      isItemActive && "bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={10}>
                <p>{item.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    } else {
      return (
        <div className="mb-2">
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start h-10 px-3 text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-950 hover:text-violet-600",
                      isItemActive && "bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400"
                    )}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.title}</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={8}>
                <p>{item.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    }
  };

  return (
    <TooltipProvider>
      <div className="flex flex-col h-full relative">
        {/* Header */} 
        <div className={cn("flex items-center flex-shrink-0 mb-3.5", isCollapsed ? "justify-center pb-3 px-3" : "pb-4 px-4")}>
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 bg-violet-500 rounded-lg">
              <Avatar className="text-sm font-medium">
                <AvatarImage src="/Images/logo-1.png" />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
            </div>
            {!isCollapsed && (
              <div className="ml-3 flex-1">
                <h1 className="text-xl font-bold"><span className="text-violet-600">ANI</span> ZONE.</h1>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className={cn("flex-1 overflow-y-auto", isCollapsed ? "px-1" : "px-2")}>
          {navigationItems.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="flex-shrink-0">
          <div className={cn("w-full", isCollapsed ? "px-1" : "px-2")}>
            {bottomItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </div>

          {/* Separator */}
          <Separator className="mt-3" />

          {/* User Profile */}
          <div className={cn( isCollapsed ? "pt-3 px-3" : "pt-4 px-4")}>
            {isCollapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex justify-center">
                    <Avatar className="text-sm font-medium w-8 h-8 cursor-pointer">
                      <AvatarImage src="/Images/logo-1.png" />
                      <AvatarFallback>AN</AvatarFallback>
                    </Avatar>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={10}>
                  <div>
                    <p className="font-medium">John Smith</p>
                    <p className="text-xs">johnsmith@gmail.com</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ) : (
              <div className="flex items-center">
                <Avatar className="text-sm font-medium w-8 h-8 cursor-pointer">
                  <AvatarImage src="/Images/logo-1.png" />
                  <AvatarFallback>AN</AvatarFallback>
                </Avatar>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">John Smith</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">johnsmith@gmail.com</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};