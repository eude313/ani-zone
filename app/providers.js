"use client";

import React from "react";
import {HeroUIProvider} from '@heroui/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";


export function Providers({ children }) {
  
    return (
        <HeroUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
            {children}
            </NextThemesProvider>
        </HeroUIProvider>
    )
}