import { useEffect } from "react";

export function useSetTheme(theme: "light" | "dark") {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.toggle("dark", theme === "dark");
      }
    }
  }, [theme]);
}
