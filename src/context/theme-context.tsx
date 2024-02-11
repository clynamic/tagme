import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

export type ThemeColor = "dawn" | "dusk";

export type ThemeWidth = "narrow" | "wide";

export interface Theme {
  color: ThemeColor;
  width: ThemeWidth;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const defaultTheme: Theme = { color: "dawn", width: "narrow" };
  const [theme, setTheme] = useState<Theme>(
    JSON.parse(localStorage.getItem("theme") || JSON.stringify(defaultTheme))
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
