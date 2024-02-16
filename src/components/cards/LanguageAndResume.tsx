"use client";

import { useLanguageStore } from "@/store/language.store";

export const LanguageAndResume = () => {
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const language = useLanguageStore((state) => state.language);

  return (
    <div
      className={`w-full h-full grid 
      grid-rows-2 grid-cols-1 gap-5
      lg:grid-cols-2 lg:grid-rows-1
      col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-4`}
    >
      <button
        onClick={() => setLanguage()}
        className={`w-full h-full rounded-2xl p-5 shadow-md shadow-neutral-800 
        opacity-90 bg-violet-800 flex flex-col justify-center items-center`}
      >
        <h2 className="font-semibold text-3xl">
          {language === "english" ? "EN" : "ES"}
        </h2>
        <div className="flex">
          <span
            className={`text-lg ${
              language === "english" ? "font-normal" : "font-light"
            }`}
          >
            EN
          </span>
          <span className="font-light text-lg">/</span>
          <span
            className={`text-lg ${
              language === "spanish" ? "font-normal" : "font-light"
            }`}
          >
            ES
          </span>
        </div>
      </button>
      <a
        href="/resume.pdf"
        download={true}
        className={`w-full h-full rounded-2xl p-4 shadow-md shadow-neutral-800 opacity-90 bg-amber-800 
        flex flex-col justify-center items-center`}
      >
        <h2 className="text-3xl text-cente font-semibold">CV</h2>
        <svg fill="currentColor" viewBox="0 0 16 16" height="2em" width="2em">
          <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z" />
          <path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z" />
        </svg>
      </a>
    </div>
  );
};
