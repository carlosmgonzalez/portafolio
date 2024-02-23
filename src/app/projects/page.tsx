"use client";

import { ChatWithPdf } from "@/components/projects/ChatWithPdf";
import { SpotifyClone } from "@/components/projects/SpotifyClone";
import { TodoApp } from "@/components/projects/TodoApp";
import Link from "next/link";

import info from "../../info.json";
import { useEffect, useState } from "react";
import { Language } from "@/interfaces/languages";
import { useLanguageStore } from "@/store/language.store";
import { NextAuth } from "@/components/projects/NextAuth";

export default function Projects() {
  const infoLenguage = useLanguageStore((state) => state.info);

  return (
    <div className="w-full md:w-[800px] lg:w-[1000px]">
      <nav className={`w-full flex justify-start items-center mb-5 gap-2`}>
        <Link
          href="/"
          className={`p-1 rounded-full bg-neutral-700/50 hover:bg-neutral-700/80 
          hover:scale-105 transition-all ease-in-out delay-100`}
        >
          <svg
            className="text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="2.5em"
            width="2.5em"
          >
            <path d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" />
          </svg>
        </Link>
        <h2 className="text-white font-medium">
          {infoLenguage.proyectos.inicio}
        </h2>
      </nav>
      <div
        className={`grid grid-col-1 gap-5 justify-items-center sm:grid-cols-2`}
      >
        <ChatWithPdf info={infoLenguage} />
        <SpotifyClone info={infoLenguage} />
        <TodoApp info={infoLenguage} />
        <NextAuth info={infoLenguage} />
      </div>
    </div>
  );
}
