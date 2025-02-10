import { createContext, ReactNode, useContext, useEffect, useState } from "react"

const STORAGE_KEY = 'themeContextKey' /* Para persistir o tema escolhido */

type ThemeContext = {
    theme: string;
    setTheme: (newTheme: string) => void
}

export const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    /* Verifica se tem algum item no local storage e pega, caso nao tenho retorna light */
    const [theme, setTheme] = useState(
        localStorage.getItem(STORAGE_KEY) || "light"
    );
    /* Alterando o tema de acordo com a State theme */
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);