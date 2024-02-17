import { Language } from "@/interfaces/languages";
import Link from "next/link";

export const ProjectsCard = ({ info }: { info: Language }) => {
  const data = info.proyectos;

  return (
    <Link
      href="/projects"
      className={`relative w-full h-full rounded-2xl p-5 shadow-md shadow-neutral-800 opacity-90
        hover:scale-105 transition-all ease-in-out delay-100 
        col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-8
        bg-[url('/gif/coding.gif')] bg-cover bg-center
        flex flex-col justify-center
      `}
    >
      <div className="w-full h-full absolute top-0 left-0 rounded-2xl bg-fuchsia-800/50 p-5">
        <div>
          <h2 className="text-xl font-medium text-white">{data.titulo}</h2>
          <p className="text-white font-light">{data.descripcion}</p>
        </div>
      </div>
      <svg
        className="text-white absolute top-5 right-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        height="2em"
        width="2em"
      >
        <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
      </svg>
    </Link>
  );
};
