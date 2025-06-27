import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

const Switchers = () => (
  <div className="flex flex-row gap-x-2 justify-end mt-10 mb-0">
    <ThemeSwitcher />
    <LanguageSwitcher />
  </div>
);

export default Switchers;
