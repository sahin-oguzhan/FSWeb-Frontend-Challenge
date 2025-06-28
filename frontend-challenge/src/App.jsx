import Header from './components/Header';
import Hero from './components/Hero';
import Switchers from './components/Switcher/Switchers';
import Skills from './components/Skills';
import './App.css';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Flip, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import { useEffect } from 'react';
import { useTheme } from './contexts/ThemeContext';
import { useLanguage } from './contexts/LanguageContext';
import { SlActionRedo } from 'react-icons/sl';

function App() {
  const { texts, language } = useLanguage();
  const themeData = texts.themeNotify;
  const langData = texts.languageNotify;
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      toast(themeData.dark);
    } else if (theme === 'light') {
      toast(themeData.light);
    }
  }, [theme]);

  useEffect(() => {
    if (language) {
      toast(langData.lang);
    }
  }, [language]);

  return (
    <div className="min-h-screen max-w-full dark:bg-[#252128]">
      <div className="flex flex-col max-w-6xl mx-auto">
        <div className="flex flex-col gap-y-4 mb-10">
          <ToastContainer
            position="top-left"
            autoClose={3000}
            theme={theme === 'dark' ? 'dark' : 'light'}
            transition={Slide}
            newestOnTop
          />
          <Switchers />
          <Header />
        </div>
        <div className="flex flex-col gap-y-[100px]">
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </div>
      </div>
      <div className="max-w-full bg-[#F9F9F9] dark:bg-[#141414] mt-[100px]">
        <div className="max-w-6xl mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
