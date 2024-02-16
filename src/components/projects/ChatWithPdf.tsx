import Image from "next/image";

export const ProjectChatWithPdf = () => {
  return (
    <div className="relative [&>div]:hover:block">
      <Image
        src="/images/chat-with-pdf-1.png"
        alt="project twitter"
        width="320"
        height="320"
        className="rounded-md aspect-video"
      />
      <div className="absolute top-0 left-0 z-10 hidden bg-neutral-700/70 w-full h-full rounded-md p-2 tra">
        <h2 className="text-white font-medium text-lg">Chat With PDF</h2>
      </div>
    </div>
  );
};
