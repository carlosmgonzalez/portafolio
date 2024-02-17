import { Language } from "@/interfaces/languages";
import { create } from "zustand";
import info from "../info.json";

interface State {
  language: "english" | "spanish";
  setLanguage: () => void;
  info: Language;
  setInfo: () => void;
}

export const useLanguageStore = create<State>()((set, get) => ({
  language: "spanish",
  info: info.ingles,
  setLanguage: () =>
    set((state) => {
      return { language: state.language === "spanish" ? "english" : "spanish" };
    }),
  setInfo: () =>
    set((state) => {
      get().setLanguage();
      return {
        info: state.language === "english" ? info.ingles : info.español,
      };
    }),
}));
