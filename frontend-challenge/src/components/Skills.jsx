import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function Skills() {
  const { texts } = useLanguage();
  if (!texts) return null;
  const data = texts.skillsSection;
  return (
    <div id="skills" className="flex flex-col gap-y-8">
      <h1 className="text-5xl leading-none font-semibold dark:text-baslik">
        {data.title}
      </h1>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-x-8 gap-y-10 w-full">
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
