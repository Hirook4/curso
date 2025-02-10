import { useEffect, useRef } from "react";

type Props = {
    src: string;
    isPlaying: boolean;
}

export const Player = ({ src, isPlaying }: Props) => {
    /* Definindo useRef, a partir dele vamos conseguir executar uma ação em um elemento na tela */
    const videoTag = useRef<HTMLVideoElement>(null);

    /* Use effect monitorando a renderização do isPlaying */
    useEffect(() => {
        if (isPlaying) {
            videoTag.current?.play();
        } else {
            videoTag.current?.pause();
        }
    }, [isPlaying])
    return (
        <video ref={videoTag} src={src} loop playsInline></video>
    );
}

