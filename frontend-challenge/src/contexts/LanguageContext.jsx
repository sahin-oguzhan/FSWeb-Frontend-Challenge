import { data } from '../../data';
import { createContext, useContext, useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import axios from 'axios';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('lang', 'en');
  const [texts, setTexts] = useState(null);

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.post(
          'https://reqres.in/api/workintech',
          data,
          {
            headers: {
              'x-api-key': 'reqres-free-v1',
            },
          },
        );
        setTexts(response.data[language]);
        console.log('API response (language):', response.data[language]);
      } catch (err) {
        console.error('API error:', err);
      }
    };

    postData();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
