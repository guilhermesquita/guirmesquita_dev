import { create } from "zustand";
import { persist } from "zustand/middleware";

interface VisualTheme {
  isDarkMode: boolean;
  setMode: () => void;
}

export const useThemeStore = create<VisualTheme>()(
  persist(
    (set) => ({
      isDarkMode: true,
      setMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (state) => {
        if (state) {
          const mode = state.isDarkMode ? "dark" : "light";
          window.document.documentElement.classList.remove("dark", "light");
          window.document.documentElement.classList.add(mode);
        }
      },
    }
  )
);

const getClassMode = (isDarkMode: boolean) => (isDarkMode ? "dark" : "light");

useThemeStore.subscribe((state, prevState) => {
  if (state.isDarkMode !== prevState.isDarkMode) {
    window.document.documentElement.classList.remove(
      getClassMode(prevState.isDarkMode)
    );
    window.document.documentElement.classList.add(
      getClassMode(state.isDarkMode)
    );
  }
});
