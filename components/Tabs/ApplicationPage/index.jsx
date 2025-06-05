
import React, { useState } from 'react';
import { Languages, Cookie, CircleFadingPlus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ApplicationPage() {
    const [cookiesEnabled, setCookiesEnabled] = useState(false);
    const [DataSaverEnabled, setDataSaverEnabled] = useState(false);

    const { 
        currentLanguage, 
        languages, 
        changeLanguage, 
        getCurrentLanguageName,
        isLoading 
    } = useLanguage();

    const handleLanguageChange = (languageCode) => {
        changeLanguage(languageCode);
    };

    const handleCookiesToggle = (enabled) => {
        setCookiesEnabled(enabled);
    };

    const handleDataSaverToggle = (enabled) => {
        setDataSaverEnabled(enabled);
    }
    
    return (
        <div className='space-y-8 max-w-4xl mx-auto p-6'>
            <div className="mb-10">
                <div className="flex items-center space-x-2 mb-4"> 
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Language</h2>
                    <span className="bg-violet-900 text-white text-xs px-2 py-1 rounded-sm border-l-2 border-violet-600 uppercase tracking-wider flex items-center">
                        <Languages size={14}/>
                    </span>
                </div>

                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:items-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">
                        <strong>Note:</strong> The language you select will be applied to the interface of Ani zone, but it will not affect the content of the anime or manga you watch or read.
                    </p>
                    <Select value={currentLanguage} onValueChange={handleLanguageChange}>
                        <SelectTrigger className="w-[240px]">
                            <SelectValue>
                                {getCurrentLanguageName()}
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Available Languages</SelectLabel>
                                {languages.map((language) => (
                                    <SelectItem key={language.code} value={language.code}>
                                        <span className="flex items-center space-x-2">
                                            <span>{language.flag}</span>
                                            <span>{language.name}</span>
                                        </span>
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                
                {/* Show current selection */}
                <div className="mt-3 p-3 bg-gray-200 dark:bg-[#262626] rounded-md">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>Current language:</strong> {getCurrentLanguageName()}
                    </p>
                </div>
            </div>
            <Separator/>
            
            <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4"> 
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Cookies</h2>
                    <span className="bg-violet-900 text-white text-xs px-2 py-1 rounded-sm border-l-2 border-violet-600 uppercase tracking-wider flex items-center">
                        <Cookie size={14}/>
                    </span>
                </div>

                <div className="flex justify-between items-center space-x-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Note:</strong> These cookies help to improve the performance of Ani zone.
                    </p>
                    <Switch checked={cookiesEnabled} onCheckedChange={handleCookiesToggle}/>
                </div>
                
                <div className="mt-3 p-3 bg-gray-200 dark:bg-[#262626] rounded-md">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>Cookies:</strong> {cookiesEnabled ? 'Enabled' : 'Disabled'}
                    </p>
                </div>
            </div>
            <Separator/>
            
            <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4"> 
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Data Saver</h2>
                    <span className="bg-violet-900 text-white text-xs px-2 py-1 rounded-sm border-l-2 border-violet-600 uppercase tracking-wider flex items-center">
                        <CircleFadingPlus size={14}/>
                    </span>
                </div>

                <div className="flex justify-between items-center space-x-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Note:</strong> Reduce data usage by viewing lower quality versions of chapters.
                    </p>
                    <Switch checked={DataSaverEnabled} onCheckedChange={handleDataSaverToggle}/>
                </div>
                
                <div className="mt-3 p-3 bg-gray-200 dark:bg-[#262626] rounded-md">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>Data Saver:</strong> {DataSaverEnabled ? 'Enabled' : 'Disabled'}
                    </p>
                </div>
            </div>
            <Separator/>
        </div>
    )
}




