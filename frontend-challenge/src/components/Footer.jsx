import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { texts } = useLanguage();
  if (!texts) return null;
  const data = texts.footerSection;

  return (
    <div className=" max-h-[409px] flex flex-col justify-center pb-11 bg:gray py-[70px]">
      <h1 className="text-[#1F2937] font-inter font-semibold leading-[1.25] text-[42px] whitespace-pre-line dark:text-[#AEBCCF] max-md:text-center">
        {data.desc}
      </h1>
      <div className="flex flex-row max-md:flex max-md:flex-col max-md:gap-y-8 max-md:items-center justify-between max-w-7xl mt-11">
        <a
          className="text-[#AF0C48] text-xl font-medium font-inter underline decoration-solid dark:text-[#BAB2E7]"
          href={`mailto:${data.email}`}
        >
          {data.email}
        </a>
        <div className="flex flex-row gap-x-6">
          {data.social.map((social, index) => {
            return (
              <a
                key={index}
                href=""
                className={` social-link-${index} font-medium text-lg font-inter`}
              >
                {social}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
