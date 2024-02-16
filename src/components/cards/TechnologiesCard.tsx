import { technologiesIcons } from "@/lib/technologies-icons";

export const TechnologiesCard = () => {
  return (
    <div
      className={`h-[240px] w-full bg-rose-800 rounded-2xl p-5 shadow-md shadow-neutral-800 opacity-90
      col-span-7 sm:col-span-5 md:col-span-4`}
    >
      <div className="grid w-full h-full grid-cols-4 grid-rows-4 gap-2 place-content-center place-items-center">
        {technologiesIcons.map((item) => (
          <div key={item.name}>{item.icon}</div>
        ))}
      </div>
    </div>
  );
};
