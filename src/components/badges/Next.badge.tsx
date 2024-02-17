export const NextBadge = () => {
  return (
    <div className="px-2 py-1.5 rounded-full bg-sky-800 flex items-center gap-1">
      <svg fill="none" viewBox="0 0 15 15" height="1.3em" width="1.3em">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M0 7.5a7.5 7.5 0 1111.697 6.216L4.907 4.21A.5.5 0 004 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 010 7.5zM10 10V4h1v6h-1z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-sm">Next.Js</span>
    </div>
  );
};
