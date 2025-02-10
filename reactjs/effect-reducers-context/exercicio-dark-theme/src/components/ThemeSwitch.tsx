import { useTheme } from "@/contexts/ThemeContext";

export const ThemeSwitch = () => {
    const themeCtx = useTheme();

    const handleThemeSwitch = () => {
        if (themeCtx) {
            themeCtx.setTheme(themeCtx.theme === 'dark' ? 'light' : 'dark');
        }
    };

    return (
        <div
            className={`fixed top-0 left-0 right-0 p-3 text-center cursor-pointer 
                ${themeCtx?.theme === 'dark' ? 'text-white' : 'text-black'}`}
            onClick={handleThemeSwitch}
        >
            {themeCtx?.theme === 'dark' && 'Mudar para Light'}
            {themeCtx?.theme === 'light' && 'Mudar para Dark'}
        </div>
    );
};
