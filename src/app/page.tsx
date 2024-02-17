"use client";

import {
  LanguageAndResume,
  InicialCard,
  FormCard,
  TechnologiesCard,
  EnglishLevelCard,
  LinkedinCard,
  ProjectsCard,
  GithubCard,
} from "@/components/cards";
import { useLanguageStore } from "@/store/language.store";
import info from "../info.json";
import { useEffect, useState } from "react";
import { Language } from "@/interfaces/languages";

export default function Home() {
  // const language = useLanguageStore((state) => state.language);
  const infoLenguage = useLanguageStore((state) => state.info);
  // const setInfoLenguage = useLanguageStore((state) => state.setInfo);
  // // const [infoLenguage, setInfoLenguage] = useState<Language>(info.español);

  // useEffect(() => {
  //   if (language === "english") {
  //     return setInfoLenguage();
  //   }
  //   setInfoLenguage();
  // }, [language, setInfoLenguage]);

  return (
    <div
      className={`
        grid grid-cols-12 gap-5
        grid-rows-[270px_240px_240px_240px_240px]
        sm:grid-rows-[240px_240px_240px_240px]
        md:grid-rows-[240px_240px_240px]
        lg:grid-rows-[240px_240px_240px_340px]
        md:w-[800px] lg:w-[1000px]`}
    >
      <InicialCard info={infoLenguage} />
      <LanguageAndResume />
      <GithubCard />
      <LinkedinCard />
      <EnglishLevelCard info={infoLenguage} />
      <ProjectsCard info={infoLenguage} />
      <TechnologiesCard />
      <FormCard info={infoLenguage} />
    </div>
  );
}
