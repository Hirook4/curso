import { LoggedUserContext } from "@/app/contexts/LoggedUser";
import { useContext } from "react";

export const Header = () => {
    /* Recebendo contexto */
    const loggedUserCtx = useContext(LoggedUserContext);

    /* Função para trocar usuário */
    const handleLogout = () => {
        loggedUserCtx?.setName('');
    }

    return (
        <header>
            <h1 className="text-3xl">Titulo da Pagina</h1>
            <h1>Usuário Logado: {loggedUserCtx?.name}</h1>
            <button onClick={handleLogout}>Trocar Usuário</button>
        </header>
    );
}
