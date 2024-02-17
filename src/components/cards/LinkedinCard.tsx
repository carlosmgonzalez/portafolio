export const LinkedinCard = () => {
  return (
    <a
      className={`relative w-full h-full rounded-2xl p-4 shadow-md opacity-90 shadow-neutral-800  bg-cyan-800 
      hover:scale-105 transition-all ease-in-out delay-100
      col-span-6 sm:col-span-5 md:col-span-4 lg:col-span-4
      flex justify-center items-center`}
      href="https://www.linkedin.com/in/carlosmgonzalez1998/"
      target="_blank"
    >
      <svg
        className="absolute top-5 right-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        height="2em"
        width="2em"
      >
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
      </svg>
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="6em" width="6em">
        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
      </svg>
      <p className="absolute bottom-5 left-5 text-lg font-medium">Linkedin</p>
    </a>
  );
};
