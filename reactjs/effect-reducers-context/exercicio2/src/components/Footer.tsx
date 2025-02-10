import { PostContext } from "@/app/contexts/PostContext";
import { useContext } from "react";

export const Footer = () => {
    const postCtx = useContext(PostContext);
    return (
        <footer>Total de Posts: {postCtx?.posts.length}</footer>
    );
}