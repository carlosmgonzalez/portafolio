import { Language } from "@/interfaces/languages";
import Image from "next/image";

export const InicialCard = ({ info }: { info: Language }) => {
  const data = info.inicial;

  return (
    <div
      className={`relative w-full h-full rounded-2xl p-5 shadow-md shadow-neutral-800
      opacity-90 bg-teal-800  overflow-hidden flex flex-col gap-3
      col-span-12 sm:col-span-12 md:col-span-10 lg:col-span-8`}
    >
      <div className="waves">
        <div className="wave circulo a"></div>
        <div className="wave circulo b"></div>
        <div className="wave circulo c"></div>
      </div>
      <div className="z-10 flex justify-between items-center sm:items-start gap-2">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">
            <span className="text-4xl ">{data.saludo}</span>
            <br />
            <span className="text-lg">{data.nombre}</span>
          </h1>
          <div className="hidden sm:block p-2 bg-neutral-300/50 rounded-md sm:w-80">
            <h2 className="font-normal text-sm">
              &quot;{data.descripcion}&quot;
            </h2>
          </div>
        </div>
        <Image
          src={`/images/foto-perfil.jpg`}
          alt="foto de perfil"
          width={400}
          height={400}
          className=" self-start rounded-full w-[100px] h-[100px] sm:w-[200px] sm:h-[204px] sm:rounded-3xl sm:self-center"
        />
      </div>
      <div className="z-10 p-2 sm:hidden bg-neutral-300/50 rounded-md sm:w-80">
        <h2 className="font-normal text-sm">&quot;{data.descripcion}&quot;</h2>
      </div>
      <div className="absolute bottom-5 left-5 z-10 flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="bg-amber-700 p-2 rounded-lg text-xs font-semibold inline-block">
            {data.primerDato}
          </div>
          <div className="bg-sky-800 p-2 rounded-lg text-xs font-semibold inline-block">
            {data.segundoDato}
          </div>
        </div>
      </div>
    </div>
  );
};
