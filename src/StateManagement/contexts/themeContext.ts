import type { Dispatch } from "react";
import React from "react";


interface ThemeContextType {
    theme:"light" | "dark";
    setTheme:Dispatch<"light" | "dark">
}

const ThemeContext = React.createContext<ThemeContextType>({} as ThemeContextType)

export default ThemeContext;