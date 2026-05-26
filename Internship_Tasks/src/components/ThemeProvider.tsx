"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// 1. Types define karein strict compliance ke liye
type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 2. Context initialize karein strict type configuration ke saath
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState<boolean>(false);

  // Initial load par local storage aur system preference lookups synchronize karein
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    } else if (prefersLight) {
      setTheme("light");
    }
    
    setMounted(true);
  }, []);

  // Theme change hone par structural DOM configurations map karein
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark"; // Smooth browser scrollbar themes maintain karne ke liye
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
    
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Dynamic wrapper component loading loops avoid karne ke liye content layer */}
      <div className={mounted ? "contents" : "opacity-0 transition-opacity duration-300"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// 3. Custom hook with strong error handling boundary
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error("useTheme must be strictly executed within a valid <ThemeProvider /> context element boundary.");
  }
  
  return context;
}