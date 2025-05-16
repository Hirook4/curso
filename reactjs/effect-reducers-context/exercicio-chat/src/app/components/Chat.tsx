/*
- Precisamos saber o nome do usuario
- Precisamos do historico de mensagens
- Input para adicionar mensagens
*/

import { useUser } from "../contexts/UserContext";
import { ChatInput } from "./ChatInput";
import { NameInput } from "./NameInput";

export const Chat = () => {
    const userCtx = useUser();

    /* Se não tiver context não vai aparecer nada */
    if (!userCtx) return null;
    /* Caso não tenho usuario retorna compnente para pegar usuario  */
    if (!userCtx.user) return <NameInput />

    return (
        <div className="border border-white/30 rounded-md">
            <div className="h-96 p-3 overflow-y-scroll">
                ...
            </div>
            <div className="border-t border-t-white/30 p-3">
                <ChatInput name={userCtx.user} />
            </div>
            <div className="border-t border-t-white/30 p-3">
                <ChatInput name={'bot'} />
            </div>
        </div >
    )
}