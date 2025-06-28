import { data } from '../../data';
import { createContext, useContext, useState } from 'react';
import useLocalStorage from 'use-local-storage';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('lang', 'en');

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const texts = data[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
