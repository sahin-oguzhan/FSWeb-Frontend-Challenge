import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function Skills() {
  const { texts } = useLanguage();
  const data = texts.skillsSection;
  return (
    <div className="flex flex-col gap-y-8 max-h-[179px] pb-[200px]">
      <h1 className="text-5xl leading-none font-semibold dark:text-baslik">
        {data.title}
      </h1>
      <div className="flex flex-row gap-x-8 w-full">
        {data.skills.map((skill, index) => {
          return (
            <div key={index} className="flex flex-col ">
              <h2 className="text-3xl text-indigo-700 font-medium font-inter mb-4 dark:text-altbaslik">
                {skill.name}
              </h2>
              <p className="text-xs leading-4 font-normal text-gray-500 font-inter dark:text-[#FFFFFF]">
                {skill.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
