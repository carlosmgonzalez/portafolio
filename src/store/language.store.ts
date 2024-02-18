import { Language } from "@/interfaces/languages";
import { create } from "zustand";
import info from "../info.json";
import { devtools } from "zustand/middleware";

interface State {
  language: "english" | "spanish";
  setLanguage: () => void;
  info: Language;
}

export const useLanguageStore = create<State>()(
  devtools((set) => ({
    language: "spanish",
    info: info.español,
    setLanguage: () =>
      set((state) => {
        const newLanguage =
          state.language === "spanish" ? "english" : "spanish";
        return {
          language: newLanguage,
          info: newLanguage === "english" ? info.ingles : info.español,
        };
      }),
  }))
);
