import { useTheme } from '../../../contexts/ThemeContext';
import { useEffect } from 'react';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-[3000ms] dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        <span className="ms-3 relative w-[120px] h-5 inline-block">
          <span
            className={`font-inter font-bold text-[15px] text-[#777777]  absolute left-0 top-0 transition-opacity duration-[2000ms] ${
              theme === 'light' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            DARK MODE
          </span>
          <span
            className={`font-inter font-bold text-[15px] text-[#777777] dark:text-[#D9D9D9] absolute left-0 top-0 transition-opacity duration-[2000ms] ${
              theme === 'dark' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            LIGHT MODE
          </span>
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
