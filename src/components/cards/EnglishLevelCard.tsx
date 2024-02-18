import { Language } from "@/interfaces/languages";
import { RedirectBadge } from "../badges/Redirect.badge";

export const EnglishLevelCard = ({ info }: { info: Language }) => {
  const data = info.nivelIngles;

  return (
    <div
      className={`grid grid-rows-2 grid-cols-1 gap-5
      col-span-6 sm:col-span-5 md:col-span-4 lg:col-span-4`}
    >
      <a
        href="http://www.youtube.com/@carlosdev-pi3yc"
        target="_blank"
        className={`relative h-full w-full rounded-2xl p-5 shadow-md shadow-neutral-800 opacity-90
        bg-[url('/gif/aboutme.gif')] bg-cover bg-center`}
      >
        <div className="absolute top-0 left-0 z-10 w-full h-full rounded-2xl bg-red-800/50"></div>
        <svg
          className="absolute z-20 top-3 right-3"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          height="1.5em"
          width="1.5em"
        >
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
        </svg>
        <div className="absolute z-20 bottom-3 left-3 flex items-center gap-2">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="2.3em"
            width="2.3em"
          >
            <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
          </svg>
        </div>
      </a>
      <div
        className={`h-full w-full rounded-2xl p-5 shadow-md shadow-neutral-800 opacity-90 bg-emerald-600
      flex flex-col justify-center items-center`}
      >
        <p className="font-light text-lg text-center">
          {data.titulo.toUpperCase()}
        </p>
        <h2 className="font-bold text-6xl">A2</h2>
      </div>
    </div>
  );
};
