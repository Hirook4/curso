import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

export const OnlineUsers = () => {
    const countCtx = useContext(CountContext);

    const handleRemoveAll = () => {
        if (countCtx) {
            countCtx.setOnlineCount(0);
        }
    };

    return (
        <>
            <p>Online: {countCtx?.onlineCount ?? 0}</p>
            <button onClick={handleRemoveAll}>Remover Todos</button>
        </>
    );
};
