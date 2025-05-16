import { useState } from "react";
import { useChat } from "../contexts/ChatContext";

type Props = {
    name: string;
}

export const ChatInput = ({ name }: Props) => {
    /* Context Chat, por ele que mandamos uma mensagem */
    const chatCtx = useChat();
    const [textInput, setTextInput] = useState('');

    const handleKeyUpAction = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code.toLowerCase() === 'enter') {
            if (textInput.trim() !== '') {
                chatCtx?.addMessage(name, textInput.trim());
                setTextInput('');
            }
        }
    };
    return (
        <input
            className="w-full bg-transparent text-white text-md outline-none"
            placeholder={`${name}, digite uma mensagem e pressione ENTER`}
            value={textInput}
            onChange={e => setTextInput(e.target.value)} onKeyUp={handleKeyUpAction} />
    );
}