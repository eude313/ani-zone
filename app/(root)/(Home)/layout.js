"use client"

import React from 'react'

export default function HomeLayout({ children }) {
    return (
        <main className='relative w-full min-h-screen overflow-x-hidden'>
            { children }
        </main>
    )
}
