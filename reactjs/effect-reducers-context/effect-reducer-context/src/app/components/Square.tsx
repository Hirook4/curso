import { useEffect } from "react";

export const Square = () => {
    useEffect(() => {
        console.log("Rodou Effect do Square")

        /* Função que sera rodada quando o componente for removido da tela */
        return () => {
            console.log("Rodou CleanUp do Square")
        }
    });

    return (
        <div className="w-40 h-40 bg-red-400"></div>
    );
}