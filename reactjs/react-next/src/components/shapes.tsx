/* Exportando default */
/* const Default = () => {
    return (
        <div className="w-80 h-32 bg-blue-950 text-white">Exportado como Default</div>
    );
} */
/* export default Default; */



/* Exportando componentes separados */
/* export const Square = () => {
    return (
        <div className="w-52 h-32 bg-blue-950 text-white">Texto</div>
    );
}

export const Circle = () => {
    return (
        <div className="w-52 h-32 rounded-full bg-blue-950 text-white">Texto</div>
    );
} */

/* Juntando dois componentem em um e exportando */
import { Circle } from "./circle";
import { Square } from "./square";
export const Shapes = () => {
    return (
        <div><Circle></Circle><Square></Square></div>
    );
}