import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function Projects() {
  const { texts } = useLanguage();
  if (!texts) return null;
  const data = texts.projectsSection;

  return (
    <div id="projects" className="max-h-[575px] flex flex-col">
      <h1 className="font-inter font-semibold text-5xl text-[#1F2937] pb-8 dark:text-baslik">
        {texts.projectsTitle}
      </h1>
      <div className="flex flex-row max-md:flex-col max-md:items-center max-md:gap-y-10 justify-between w-full">
        {data.map((project, index) => {
          return (
            <div
              key={index}
              className="flex-1 max-w-[300px] rounded overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-[225px]"
                src={project.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="text-indigo-700 font-inter text-3xl font-medium dark:text-altbaslik">
                  {project.name}
                </div>
                <p className="text-gray-500 font-inter text-sm leading-[1.25] h-[157px] dark:text-[#FFFFFF]">
                  {project.desc}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 gap-x-2 flex">
                {project.apps.map((app, index) => {
                  return (
                    <span key={index} className="apps">
                      {app}
                    </span>
                  );
                })}
              </div>
              <div className="flex justify-between px-6">
                <a
                  target="_blank"
                  className="text-indigo-800 decoration-solid underline font-inter font-medium text-base dark:text-[#E1E1FF]"
                  href={project.github}
                >
                  Github
                </a>
                <a
                  target="_blank"
                  className="text-indigo-800 decoration-solid underline font-inter font-medium text-base dark:text-[#E1E1FF]"
                  href={project.view}
                >
                  View Site
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
