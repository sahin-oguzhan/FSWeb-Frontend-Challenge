export default function Header() {
  return (
    <div>
      <nav className="flex justify-between items-center p-4">
        <div className="bg-[#EEEBFF] rounded-full dark:bg-indigo-800">
          <p className="text-2xl leading-8 font-semibold font-inter text-[#7B61FF] mx-4 my-2 rotate-45 dark:text-[#8F88FF]">
            O
          </p>
        </div>
        <div className="flex space-x-8">
          <p className="nav-btn">Skills</p>
          <p className="nav-btn">Projects</p>
          <p className="text-lg leading-7 font-medium font-inter text-indigo-800 border-2 px-6 py-2 border-indigo-800 rounded-lg dark:bg-white dark:-text-[#3730A3]">
            Hire me
          </p>
        </div>
      </nav>
    </div>
  );
}
