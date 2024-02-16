import { create } from "zustand";

interface State {
  language: "english" | "spanish";
  setLanguage: () => void;
}

export const useLanguageStore = create<State>()((set) => ({
  language: "spanish",
  setLanguage: () =>
    set((state) => ({
      language: state.language === "spanish" ? "english" : "spanish",
    })),
}));
