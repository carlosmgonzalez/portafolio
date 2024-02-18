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

export default function Home() {
  const infoLenguage = useLanguageStore((state) => state.info);

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
