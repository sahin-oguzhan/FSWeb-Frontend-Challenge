import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

const Switchers = () => (
  <div className="flex flex-row gap-x-2 justify-end mt-5">
    <ThemeSwitcher />
    <span className="text-[#777777] font-inter font-bold text-[15px]">|</span>
    <LanguageSwitcher />
  </div>
);

export default Switchers;
