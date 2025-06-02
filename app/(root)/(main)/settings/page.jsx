'use client'

import { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  Zap, 
  Heart, 
  Sparkles, 
  Clock, 
  Star,
  Palette
} from 'lucide-react'

const navigationItems = [
  { id: 'trending', label: 'Trending', icon: TrendingUp },
  { id: 'action', label: 'Action', icon: Zap },
  { id: 'romance', label: 'Romance', icon: Heart },
  { id: 'animation', label: 'Animation', icon: Sparkles },
  { id: 'horror', label: 'Horror', icon: Clock },
  { id: 'special', label: 'Special', icon: Star },
  { id: 'drama', label: 'Drama', icon: Palette },
]

export default function SettingsPage() {
  const [activeItem, setActiveItem] = useState('trending')
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsSticky(scrollPosition > 52)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo content above nav */}
      <div className="h-32 bg-gradient-to-b from-blue-500 to-purple-600 flex items-center justify-center">
        <h1 className="text-white text-2xl font-bold">Scroll down to see sticky behavior</h1>
      </div>
      
      {/* Navigation Bar 
      <nav 
        className={`
          bg-white/80 backdrop-blur-md border-b border-gray-200/50 
          transition-all duration-300 ease-in-out z-50
          ${isSticky ? 'fixed top-[56px] left-0 right-0 shadow-lg' : 'relative'}
        `}
      >*/}
      <nav 
         className="sticky top-[64px] z-40 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-1 py-3">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              const isActive = activeItem === item.id
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`
                    flex items-center space-x-2 px-4 py-2.5 rounded-full
                    transition-all duration-200 ease-in-out
                    hover:bg-gray-100/80 hover:scale-105
                    ${isActive 
                      ? 'bg-gray-900 text-white shadow-md' 
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  <IconComponent 
                    size={18} 
                    className={`
                      transition-transform duration-200
                      ${isActive ? 'scale-110' : ''}
                    `}
                  />
                  <span className="text-sm font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Demo content below nav */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="space-y-8">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-3">
                {navigationItems.find(item => item.id === activeItem)?.label} Content #{i + 1}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
