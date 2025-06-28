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

  const isDark = theme === 'dark';

  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isDark}
          onChange={toggleTheme}
        />
        <div
          className={`w-[55px] h-[24px] rounded-full flex items-center p-1 transition-colors duration-1000 ${
            isDark ? 'bg-gray-700' : 'bg-[#4731D3]'
          }`}
        >
          <div
            className={`h-[16px] w-[15px] rounded-full relative transition-all duration-1000 ${
              isDark
                ? 'translate-x-0 bg-yellow-300'
                : 'translate-x-8 bg-yellow-300'
            }`}
          >
            {isDark && (
              <div className="absolute h-4 w-[15px] rounded-full bg-gray-700 -right-[5px]"></div>
            )}
          </div>
        </div>
        <span className="ms-3 relative w-[120px] h-5 inline-block">
          <span
            className={`font-inter font-bold text-[15px] text-[#777777] absolute left-0 top-0 transition-opacity duration-1000 ${
              !isDark ? 'opacity-100' : 'opacity-0'
            }`}
          >
            DARK MODE
          </span>
          <span
            className={`font-inter font-bold text-[15px] text-[#D9D9D9] absolute left-0 top-0 transition-opacity duration-1000 ${
              isDark ? 'opacity-100' : 'opacity-0'
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
