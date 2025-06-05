// contexts/LanguageContext.js
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語 (Japanese)', flag: '🇯🇵' },
  { code: 'fr', name: 'Français (French)', flag: '🇫🇷' },
  { code: 'es', name: 'Español (Spanish)', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch (German)', flag: '🇩🇪' },
  { code: 'ko', name: '한국어 (Korean)', flag: '🇰🇷' },
  { code: 'zh', name: '中文 (Chinese)', flag: '🇨🇳' },
  { code: 'pt', name: 'Português (Portuguese)', flag: '🇵🇹' },
  { code: 'it', name: 'Italiano (Italian)', flag: '🇮🇹' },
  { code: 'ru', name: 'Русский (Russian)', flag: '🇷🇺' }
];

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(true);

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('ani-zone-language');
    if (savedLanguage && languages.find(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
    setIsLoading(false);
  }, []);

  // Save language to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('ani-zone-language', currentLanguage);
    }
  }, [currentLanguage, isLoading]);

  const changeLanguage = (languageCode) => {
    const language = languages.find(lang => lang.code === languageCode);
    if (language) {
      setCurrentLanguage(languageCode);
      console.log('Language changed to:', language.name);
      
      // You can add additional logic here like:
      // - Updating document.documentElement.lang
      // - Triggering translations reload
      // - Analytics tracking
      document.documentElement.lang = languageCode;
    }
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  const getCurrentLanguageName = () => {
    const current = getCurrentLanguage();
    return `${current.flag} ${current.name}`;
  };

  const value = {
    currentLanguage,
    languages,
    changeLanguage,
    getCurrentLanguage,
    getCurrentLanguageName,
    isLoading
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};