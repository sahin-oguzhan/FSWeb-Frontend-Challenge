import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function Profile() {
  const { texts } = useLanguage();
  if (!texts) return null;
  const data = texts.profileSection;

  return (
    <div className="max-h-[355px] max-md:max-h-[180px] flex flex-col border-t-2 border-indigo-200">
      <h1 className="text-5xl leading-none font-semibold mb-6 pt-8 text-left dark:text-baslik">
        {data.title}
      </h1>
      <div className="flex flex-row max-md:flex-col w-full max-md:gap-y-8 gap-x-8">
        <div className="flex flex-col w-1/2 max-md:w-full">
          <h2 className="text-3xl text-indigo-700 mb-2 font-inter font-medium dark:text-altbaslik">
            {data.title}
          </h2>
          <table className="w-full">
            <tbody>
              {data.profile.profileList.map((profile, index) => (
                <tr key={index}>
                  <td className="font-inter text-lg text-[#000000] font-semibold align-top pr-6 pb-2 whitespace-nowrap dark:text-[#FFFFFF]">
                    {profile.label}
                  </td>
                  <td className="font-inter text-lg text-[#000000] font-semibold align-top pb-2 dark:text-[#FFFFFF]">
                    {profile.item}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col w-1/2 max-md:w-full items-start justify-start h-full pt-0">
          <h2 className="text-3xl text-indigo-700 font-inter font-medium mb-4 dark:text-altbaslik">
            {data.aboutMe.name}
          </h2>
          <p className="font-inter text-gray-500 text-lg whitespace-pre-line dark:text-[#FFFFFF]">
            {data.aboutMe.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
