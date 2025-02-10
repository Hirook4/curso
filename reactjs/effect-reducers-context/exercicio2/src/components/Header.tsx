import { PostContext } from "@/app/contexts/PostContext";
import { useContext, useState } from "react";

export const Header = () => {
    const postCtx = useContext(PostContext);

    const [titleInput, setTitleinput] = useState('');
    const [bodyInput, setBodyinput] = useState('');

    const handleAddButton = () => {
        if (titleInput && bodyInput) {
            postCtx?.addPost(titleInput, bodyInput)
            setTitleinput('');
            setBodyinput('');
        }
    }

    return (
        <header>
            <h1 className="text-3xl">Titulo da Pagina</h1>
            <div className="max-w-xl flex flex-col border gap-3 border-dotted border-gray-400 my-4 p-3">
                <input type="text" placeholder="digite um titulo" className="border border-gray-300 p-2 text-black text-xl" value={titleInput} onChange={e => setTitleinput(e.target.value)} />
                <textarea className="h-24 border border-gray-300 p-2 text-black text-xl" placeholder="digite um corpo" value={bodyInput} onChange={e => setBodyinput(e.target.value)}></textarea>
                <button className="bg-blue-500 p-3 text-white rounded-md" onClick={handleAddButton}>adicionar</button>
            </div>
        </header>
    );
}