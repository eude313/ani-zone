'use client';

import React, { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { themes } from '@/data';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"



export default function PreferencesPage() {
    const [selectedTheme, setSelectedTheme] = useState('system');
    const [activeTheme, setActiveTheme] = useState('system');
    const [showButtons, setShowButtons] = useState(false);
    const [systemPreference, setSystemPreference] = useState('light');
    const [effectiveTheme, setEffectiveTheme] = useState('light');

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            setSystemPreference(e.matches ? 'dark' : 'light');
        };

        setSystemPreference(mediaQuery.matches ? 'dark' : 'light');
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        const newEffectiveTheme = activeTheme === 'system' ? systemPreference : activeTheme;
        setEffectiveTheme(newEffectiveTheme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newEffectiveTheme);
    }, [activeTheme, systemPreference]);

    const isSyncWithSystem = activeTheme === 'system';

    const handleThemeSelect = (themeId) => {
        setSelectedTheme(themeId);
        setShowButtons(themeId !== activeTheme);
    };

    const handleSyncToggle = (checked) => {
        if (checked) {
            setSelectedTheme('system');
            setShowButtons('system' !== activeTheme);
        } else {
            setSelectedTheme(effectiveTheme);
            setShowButtons(effectiveTheme !== activeTheme);
        }
    };

    const handleSave = () => {
        setActiveTheme(selectedTheme);
        setShowButtons(false);
    };

    const handleCancel = () => {
        setSelectedTheme(activeTheme);
        setShowButtons(false);
    };
    
    return (
        <div className='space-y-6 max-w-4xl mx-auto p-6'>
            <div className="mb-10">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Preferences</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Select how you would like your interface to look. Select a theme or sync with your system and have automatic theme switching.
                </p>
            </div>
            
            <Separator/>
            
            <div className="flex items-center justify-between py-[2px]">
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Sync with system</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        Currently using: {effectiveTheme} theme
                        {activeTheme === 'system' && ` (${systemPreference} from system)`}
                    </span>
                </div>
                <div className="pr-4">
                    <Switch 
                        checked={isSyncWithSystem || selectedTheme === 'system'} 
                        onCheckedChange={handleSyncToggle}
                    />
                </div>
            </div>
            
            <Separator/>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {themes.map((theme) => {
                    const isSelected = selectedTheme === theme.id;
                    const isActive = activeTheme === theme.id;
                    const Icon = theme.icon;
                    
                    return (
                        <div
                            key={theme.id}
                            className={`border-2 rounded-lg p-4 cursor-pointer hover:shadow-sm transition-all  ${
                                isSelected ? 
                                    'border-violet-500 bg-violet-50 dark:bg-violet-950 dark:border-violet-400' : 'border-gray-200 dark:border-[#262626] bg-gray-200 dark:bg-[#262626] hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                            onClick={() => handleThemeSelect(theme.id)}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Icon className="w-4 h-4" />
                                <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{theme.title}</span>
                                {isActive && (
                                    <Badge>                                       
                                        Active
                                    </Badge>
                                )}
                            </div>
                            
                            <p className="text-sm text-gray-600 dark:text-gray-400 my-4">{theme.description}</p>
                            
                            <div className="w-full h-24 rounded border overflow-hidden">
                                <img 
                                    src={theme.imageUrl} 
                                    alt={`${theme.title} preview`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-500" style={{display: 'none'}}>
                                    {theme.title} Preview
                                </div>
                            </div>
                            
                            <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                                {theme.bottomText}
                            </div>
                        </div>
                    );
                })}
            </div>
        
            {/* Action Buttons */}
            {showButtons && (
                <div className="mt-6 flex justify-end gap-3 p-4 bg-gray-200 dark:bg-[#262626] rounded-lg border border-[#DBDBDB] dark:border-[#262626]">
                    <Button
                        variant="outline"
                        onClick={handleCancel}
                        className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                        Cancel
                    </Button>
                    <Button 
                        onClick={handleSave}
                        className="bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700"
                    >
                        Save changes
                    </Button>
                </div>
            )}

        </div>
    );
}