import { atom } from "nanostores";

export type LanguageState = "english" | "spanish";

export const language = atom<LanguageState>("spanish");
