'use client';

import React, { useState } from 'react';
import { 
  ChevronDown,
  Hash,
  MoreHorizontal,
  Menu, X
} from 'lucide-react';
import Link from "next/link";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator";
import { navigationItems, bottomItems } from '@/data';
import { buttonVariants } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Sidebar({ isCollapsed = false, isScreenSmall = false, onToggleCollapse }) {
  const [isCustomersOpen, setIsCustomersOpen] = useState(true);

  const NavItem = ({ item, isBottom = false }) => {
    if (item.hasSubmenu) {
      if (isCollapsed) {
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "w-10 h-10 text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-950",
                        item.submenuItems.some(sub => sub.isActive) && "bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" align="start" className="w-48">
                    {item.submenuItems.map((subItem, index) => (
                      <DropdownMenuItem key={index} asChild>
                        <Link
                          href={subItem.href}
                          className={cn(
                            "cursor-pointer",
                            subItem.isActive && "bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400"
                          )}
                        >
                          {subItem.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      } else {
        return (
          <Collapsible open={item.title === 'Customers' ? isCustomersOpen : false} onOpenChange={setIsCustomersOpen}>
            <CollapsibleTrigger asChild>
              <Link href={item.href}>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-10 px-3 text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-950"
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span className="flex-1 text-left">{item.title}</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", item.isOpen && "rotate-180")} />
                </Button>
              </Link>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1">
              {item.submenuItems.map((subItem, index) => (
                <Link key={index} href={subItem.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start h-9 pl-12 text-sm text-gray-600 dark:text-gray-400 hover:bg-violet-50 dark:hover:bg-violet-950",
                      subItem.isActive && "bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400"
                    )}
                  >
                    {subItem.title}
                  </Button>
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>
        );
      }
    }

    if (isCollapsed) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={item.href}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-950"
                >
                  <item.icon className="h-5 w-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{item.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    } else {
      return (
        <Link
          href={item.href}
          className={buttonVariants({ 
            variant: "ghost",
            className: "w-full justify-start h-10 px-3 text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-950"
          })}
        >
          <item.icon className="h-5 w-5 mr-3" />
          <span>{item.title}</span>
        </Link>
      );
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 relative">
      {/* Toggle Button */}
      {!isScreenSmall && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleCollapse}
          className="absolute top-4 -right-8 z-60 w-8 h-8 bg-white dark:bg-gray-900 border
           border-violet-200 dark:border-violet-700 rounded-full shadow-sm text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950"
        >
          {isCollapsed ? (
            <Menu className="h-4 w-4" />
          ) : (
            <X className="h-4 w-4" />
          )}
        </Button>
      )}

      {/* Header */} 
      <div className={cn("flex items-center", isCollapsed ? "justify-center p-3" : "p-4")}>
        <div className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 bg-violet-500 rounded-lg">
            <Hash className="w-5 h-5 text-white" />
          </div>
          {!isCollapsed && (
            <div className="ml-3 flex-1">
              <div className="w-6 h-1 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
              <div className="w-8 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className={cn("flex-1 space-y-1", isCollapsed ? "px-2" : "px-2")}>
        {navigationItems.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </nav>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Bottom Navigation */}
      <div className={cn("space-y-1", isCollapsed ? "px-2" : "px-2")}>
        {bottomItems.map((item, index) => (
          <NavItem key={index} item={item} isBottom />
        ))}
      </div>

      {/* Spacer */}
      <Separator
        className="mt-1"
      />

      {/* User Profile */}
      <div className={cn( isCollapsed ? "p-3" : "p-4")}>
        {isCollapsed ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-center">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/api/placeholder/32/32" alt="John Smith" />
                    <AvatarFallback className="bg-gray-300 dark:bg-gray-600 text-gray-700
                     dark:text-gray-300 text-xs">
                      JS
                    </AvatarFallback>
                  </Avatar>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">
                <div>
                  <p className="font-medium">John Smith</p>
                  <p className="text-xs">johnsmith@gmail.com</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <div className="flex items-center">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/api/placeholder/32/32" alt="John Smith" />
              <AvatarFallback className="bg-gray-300 dark:bg-gray-600 text-gray-700
               dark:text-gray-300">
                JS
              </AvatarFallback>
            </Avatar>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">John Smith</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">johnsmith@gmail.com</p>
            </div>
            <Button variant="ghost" size="sm" className="p-1">
              <MoreHorizontal className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};