import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function Projects() {
  const { texts } = useLanguage();
  if (!texts) return null;
  const data = texts.projectsSection;

  return (
    <div id="projects" className="">
      <h1 className="font-inter font-semibold text-5xl text-[#1F2937] pb-8 dark:text-baslik">
        {texts.projectsTitle}
      </h1>
      <div className="grid grid-cols-3 max-md:grid-cols-2 gap-y-10 max-md:items-center">
        {data.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-between min-h-[500px] max-w-[300px] rounded overflow-hidden shadow-lg"
            >
              <img className="h-[160px] w-[300px]" src={project.image} />
              <div className="px-6 py-4 flex-1 overflow-y-auto">
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
