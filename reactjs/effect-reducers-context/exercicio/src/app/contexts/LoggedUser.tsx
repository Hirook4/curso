"use client";
import { createContext, ReactNode, useState } from "react";

/* Type do contexto */
type ContextType = {
    name: string
    setName: (n: string) => void;
}
/* Criando contexto */
export const LoggedUserContext = createContext<ContextType | null>(null);

/* Criando provider */
export const LoggedUserProvider = ({ children }: { children: ReactNode }) => {
    /* State dentro do provider para fazer alterações dos valores */
    const [name, setName] = useState('Joao');
    return (
        <LoggedUserContext.Provider value={{ name, setName }}>{children}</LoggedUserContext.Provider>
    );
}