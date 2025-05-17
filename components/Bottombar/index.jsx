"use client"

import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { 
  Home, Globe,
  LogOut, Star,
  User, Bell, 
  Paintbrush,
  Search, Cog, 
  X, Moon, Sun, 
  LogIn, KeyRound,
  GalleryVertical,  
} from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import { Input } from "../ui/input";
import { useTheme } from 'next-themes';
import ThemeSwitch from '../ThemeSwitch';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from 'react';
import { Badge } from "../ui/badge";

export default function Bottombar() {
  const [activeTab, setActiveTab] = useState('home');
  const [hoveredTab, setHoveredTab] = useState(null);
  const [searchDropupOpen, setSearchDropupOpen] = useState(false);
  const [settingsDropupOpen, setSettingsDropupOpen] = useState(false);
  const dropupRef = useRef(null);
  const { theme } = useTheme();
  
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search', hasDropup: true },
    { id: 'libray', icon: GalleryVertical, label: 'Library' },
    { id: 'settings', icon: Cog, label: 'Settings', hasDropup: true }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropupRef.current && !dropupRef.current.contains(event.target)) {
        setSearchDropupOpen(false);
        setSettingsDropupOpen(false);
        if (activeTab === 'search' || activeTab === 'settings') {
          setActiveTab('home');
        }
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    const tab = tabs.find(t => t.id === tabId);
    
    if (tab?.hasDropup) {
      if (tabId === activeTab) {
        if (tabId === 'search') {
          const newDropupState = !searchDropupOpen;
          setSearchDropupOpen(newDropupState);
          setSettingsDropupOpen(false);
          
          if (!newDropupState) {
            setActiveTab('home');
          }
        } else if (tabId === 'settings') {
          const newDropupState = !settingsDropupOpen;
          setSettingsDropupOpen(newDropupState);
          setSearchDropupOpen(false);
          
          if (!newDropupState) {
            setActiveTab('home');
          }
        }
      } else {
        setActiveTab(tabId);
        if (tabId === 'search') {
          setSearchDropupOpen(true);
          setSettingsDropupOpen(false);
        } else if (tabId === 'settings') {
          setSettingsDropupOpen(true);
          setSearchDropupOpen(false);
        }
      }
    } else {
      setActiveTab(tabId);
      setSearchDropupOpen(false);
      setSettingsDropupOpen(false);
    }
  };

  const closeSearchDropup = () => {
    setSearchDropupOpen(false);
    if (activeTab === 'search') {
      setActiveTab('home');
    }
  };

  const closeSettingsDropup = () => {
    setSettingsDropupOpen(false);
    if (activeTab === 'settings') {
      setActiveTab('home');
    }
  };

  const menuItems = [
    {
      icon: <Paintbrush />,
      title: "Appearance",
      description: theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      action: <ThemeSwitch />,
      shortcut: null,
      href: null 
    },
    {
      icon: <Globe />,
      title: "Language",
      description: "Switch language",
      action: null,
      shortcut: "⌘L",
      href: "/language" 
    },
    {
      icon: <User />,
      title: "Terms and Conditions",
      description: "Below are terms and conditions this site.",
      action: null,
      shortcut: "⌘T",
      href: "/terms" 
    }
  ];

  return (
    <div className="h-full w-full relative p-2" ref={dropupRef}>
      {searchDropupOpen && (
        <div className="px-2 sm:p-0">
          <Card className="absolute bottom-full left-0 w-full mb-2 rounded-t-md rounded-b-[0px] sm:rounded-lg shadow-lg">
            <CardHeader className="flex justify-between items-center mb-1">
              <h2 className="font-semibold">Search</h2>
              <Button variant="outline" size="icon" onClick={closeSearchDropup}>
                <X/>
              </Button>
            </CardHeader>
            
            <CardContent className="space-y-2 px-0">
              <div className="relative px-2">
                <div className="flex w-full items-center space-x-2">
                  <Input type="search" placeholder="Search"
                  className="w-full py-2 px-3 bg-gray-100 dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <Button size="icon">
                    <Search/>
                  </Button>
                </div>
              </div>
            
              <div className="space-y-2">
                <p className="px-2 text-xs text-gray-500 dark:text-gray-400 space-y-2">Recent Searches</p>
                <div className="space-y-2 px-2 max-h-[250px] overflow-y-auto overflow-x-hidden">
                  <Link
                    //prefetch={false}
                    className="flex items-center space-x-4 rounded-md hover:border hover:shadow-md p-1 transition-all"
                    href='/'
                  >
                    <div className="w-18 h-24 flex-shrink-0 aspect-[3/4.5] overflow-hidden rounded-md group">
                      <Image 
                        src="/5e373050dd49bd0ce6db9e43cb3ecf7b.jpg"
                        alt='name' 
                        width={64} 
                        height={96} 
                        unoptimized
                        className="object-cover object-center size-full w-full h-full transition-all group-hover:scale-110"
                      />
                      
                    </div>
                    <div className="flex-1 space-y-3">
                      <p className="text-sm font-medium leading-none truncate">
                        Movie title goes here.
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        Movie/ Season description goes here.
                      </p>
                      <div className="flex space-x-2">
                        <Badge><Star className="mr-1 size-3.5 fill-white stroke-light" /> 6.1</Badge>
                        <Badge>Movie</Badge>
                        <Badge>2015</Badge>
                      </div>
                    </div>
                  </Link>
                  <Link
                    className="flex items-center space-x-4 rounded-md hover:border hover:shadow-md p-1 transition-all"
                    href='/'
                  >
                    <div className="w-18 h-24 flex-shrink-0 aspect-[3/4.5] overflow-hidden rounded-md group">
                      <Image 
                        src="/5e373050dd49bd0ce6db9e43cb3ecf7b.jpg"
                        alt='name' 
                        width={64} 
                        height={96} 
                        unoptimized
                        className="object-cover object-center size-full w-full h-full transition-all group-hover:scale-110"
                      />
                      
                    </div>
                    <div className="flex-1 space-y-3">
                      <p className="text-sm font-medium leading-none truncate">
                        Movie title goes here.
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        Movie/ Season description goes here.
                      </p>
                      <div className="flex space-x-2">
                        <Badge><Star className="mr-1 size-3.5 fill-white stroke-light" /> 6.1</Badge>
                        <Badge>Movie</Badge>
                        <Badge>2015</Badge>
                      </div>
                    </div>
                  </Link>
                  <Link
                    className="flex items-center space-x-4 rounded-md hover:border hover:shadow-md p-1 transition-all "
                    href='/'
                  >
                    <div className="w-18 h-24 flex-shrink-0 aspect-[3/4.5] overflow-hidden rounded-md group">
                      <Image 
                        src="/5e373050dd49bd0ce6db9e43cb3ecf7b.jpg"
                        alt='name' 
                        width={64} 
                        height={96} 
                        unoptimized
                        className="object-cover object-center size-full w-full h-full transition-all group-hover:scale-110"
                      />
                      
                    </div>
                    <div className="flex-1 space-y-3">
                      <p className="text-sm font-medium leading-none truncate">
                        Movie title goes here.
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        Movie/ Season description goes here.
                      </p>
                      <div className="flex space-x-2">
                        <Badge><Star className="mr-1 size-3.5 fill-white stroke-light" /> 6.1</Badge>
                        <Badge>Movie</Badge>
                        <Badge>2015</Badge>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {settingsDropupOpen && (
        <div className="px-2 sm:p-0">
          <Card className="absolute bottom-full left-0 w-full mb-2 rounded-t-md rounded-b-[0] sm:rounded-lg shadow-lg p-2 sm:p-3">
            <CardHeader className="flex justify-between items-center mb-1 px-0">
              <h2 className="font-medium">Settings</h2>
              <Button variant="outline" size="icon" onClick={closeSettingsDropup}>
                <X/>
              </Button>
            </CardHeader>
            
            <CardContent className="space-y-4 px-0">
              <div className="space-y-3">
                {menuItems.map((item, index) => {
                  const content = (
                    <>
                      <div className="flex items-center space-x-2">
                        {item.icon}
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {item.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      {item.action ? (
                        item.action
                      ) : item.shortcut ? (
                        <p className="text-sm text-muted-foreground">
                          {item.shortcut}
                        </p>
                      ) : null}
                    </>
                  );
                  
                  return item.href ? (
                    <a 
                      key={index} 
                      href={item.href}
                      className="flex items-center space-x-4 rounded-md hover:border hover:shadow-md p-4 no-underline text-inherit"
                    >
                      {content}
                    </a>
                  ) : (
                    <Label key={index} className="flex items-center space-x-4 rounded-md hover:border hover:shadow-md p-4">
                      {content}
                    </Label>
                  );
                })}
              </div>
              
              <div className="pt-4 pb-2 px-1 border-t">
                <div className="flex items-center gap-3">
                  <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
                    <LogIn className="h-4 w-4" />
                    <span>Log In</span>
                  </Button>
                  <Button variant="default" className="flex-1 flex items-center justify-center gap-2">
                    <KeyRound className="h-4 w-4" />
                    <span>Sign Up</span>
                  </Button>
                </div>
                {/* <div className="flex items-center space-x-4"> 
                  <Button variant="destructive" className="w-full flex items-center justify-center space-x-2">
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </Button> 
                </div>*/}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <nav className="h-full w-full flex items-center">
        <div className="flex justify-around w-full ">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const isHovered = hoveredTab === tab.id;
            const showLabel = isActive || isHovered;
            
            return (
              <button
                key={tab.id}
                className={`font-bold relative flex flex-col items-center justify-center flex-1 py-2 focus:outline-none 
                  transition-colors rounded-md duration-200  ${
                  isActive
                  ? 'text-white bg-violet-500 dark:bg-violet-600'
                  : isHovered
                  ? 'text-white bg-violet-400 dark:text-[#7F22FE] dark:bg-transparent'
                  : 'text-gray-500 dark:text-gray-400'
                }`}
                onClick={() => handleTabClick(tab.id)}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <div className="flex items-center justify-center">
                  <Icon 
                    size={20} 
                    className={
                      isActive ? 
                      'stroke-white fill-white' 
                      : isHovered ? 
                      'stroke-white dark:stroke-[#7F22FE]' : 'stroke-gray-500 dark:stroke-gray-400'
                    } 
                  />
                </div>
                
                {showLabel && (
                  <span className="text-xs font-medium mt-1 text-center">
                    {tab.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}