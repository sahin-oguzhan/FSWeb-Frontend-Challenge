import { useLanguage } from '../../../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="font-inter font-bold text-[15px] text-[#777777]"
    >
      {language === 'tr' ? (
        <span className="text-indigo-800">ENGLISH</span>
      ) : (
        <>
          <span className="text-indigo-800 dark:text-[#B7AAFF]">TÜRKÇE</span>'YE
          GEÇ
        </>
      )}
    </button>
  );
};

export default LanguageSwitcher;
