import { Language } from "@/interfaces/languages";

export const EnglishLevelCard = ({ info }: { info: Language }) => {
  const data = info.nivelIngles;

  return (
    <div
      className={`h-full w-full rounded-2xl p-5 shadow-md shadow-neutral-800 opacity-90 
      flex flex-col justify-center items-center bg-[#00997A]
      col-span-6 sm:col-span-5 md:col-span-4 lg:col-span-4`}
    >
      <p className="font-light text-lg text-center">
        {data.titulo.toUpperCase()}
      </p>
      <h2 className="font-bold text-6xl">A2</h2>
    </div>
  );
};
