import { useLanguage } from '../contexts/LanguageContext.jsx';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  const { texts } = useLanguage();
  if (!texts) return null;
  const data = texts.heroSection;
  return (
    <div className="flex flex-row max-md:flex-col max-md:gap-y-10 items-center gap-x-10 max-h-[428px] justify-between ">
      <div className="flex flex-col gap-y-8">
        <div className="flex items-center ">
          <div className="h-[2px] w-16 bg-indigo-800 mr-4 dark:bg-[#BAB2E7]"></div>
          <p className="text-indigo-800 dark:text-[#B7AAFF]">{data.name}</p>
        </div>

        <h1 className="max-w-[587px] max-md:max-w-[400px] text-gray-800 text-6xl font-bold whitespace-pre-line dark:text-[#AEBCCF] max-md:text-[40px]">
          {data.greeting}
        </h1>

        <p className="max-w-[587px] max-md:max-w-[400px] text-gray-500 text-lg leading-7 font-normal font-inter whitespace-pre-line dark-text-[#FFFFFF] max-md:text-base">
          {data.intro}
        </p>
        <div className="flex flex-row gap-x-4 ">
          <a
            className="social-btn bg-[#3730A3] text-[#FFFFFF] dark:text-black dark:bg-[#E1E1FF]"
            href="mailto:oguzhan.sahin99@outlook.com"
          >
            {data.label}
          </a>
          <a
            className="social-btn dark:text-[#E1E1FF] dark:bg-[#383838]"
            href="https://github.com/sahin-oguzhan"
          >
            <FaGithub size={25} />
            Github
          </a>
          <a
            className="social-btn dark:text-[#E1E1FF] dark:bg-[#383838]"
            href="https://www.linkedin.com/in/oguzsahiinn/"
          >
            <FaLinkedin size={25} />
            LinkedIn
          </a>
        </div>
      </div>
      <div>
        <img
          className="w-[476px] h-[375px] rounded-2xl shadow-multi object-cover"
          src="/image.png"
          alt=""
        />
      </div>
    </div>
  );
}
