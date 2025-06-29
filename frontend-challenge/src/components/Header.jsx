import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { texts } = useLanguage();
  if (!texts) return null;
  const data = texts.headerSection;
  return (
    <div className="">
      <nav className="flex justify-between max-md:justify-center items-center p-4">
        <div className="bg-[#EEEBFF] rounded-full dark:bg-indigo-800 max-md:hidden">
          <p className="text-2xl leading-8 font-semibold font-inter text-[#7B61FF] mx-4 my-2 rotate-45 dark:text-[#8F88FF]">
            O
          </p>
        </div>
        <div className="flex space-x-12">
          <a href="#skills" className="nav-btn mt-1">
            {data.label1}
          </a>
          <a href="#projects" className="nav-btn mt-1">
            {data.label2}
          </a>
          <a
            href="mailto:oguzsahiinn@gmail.com"
            className="w-[131px] h-[52px] social-btn dark:bg-white dark:-text-[#3730A3] flex items-center justify-center"
          >
            {data.label3}
          </a>
        </div>
      </nav>
    </div>
  );
}
