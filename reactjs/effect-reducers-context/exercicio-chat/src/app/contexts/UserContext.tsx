import { createContext, ReactNode, useContext, useState } from "react";

/* Type */
type UserContext = {
    user: string;
    setUser: (newUser: string) => void;
}
/* Context */
export const UserContext = createContext<UserContext | null>(null)

/* Provider */
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState('');
    return (
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    );
}

/* Hook */
export const useUser = () => useContext(UserContext);