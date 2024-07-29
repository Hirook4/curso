/* Usando Children */
import { ReactNode } from "react"

/* type Props = {
    //Recebendo um children somente com a frase
    //children: string;

    //Recebendo um children que aceita varios tipos
    children: ReactNode
}
export const Card = ({ children }: Props) => {
    return (
        <div className="">{children}</div>
    )
}
 */

//Renderização Condicional
type Props = {
    frase: string;
    //Deixando autor opcional para fazer a condicional
    autor?: string;
}

export const Card = ({ frase, autor }: Props) => {

    return (
        <div className="w-96 border-2 border-blue-900 p-3 text-3xl text-center italic">
            <h3 className="text-3xl font-bold italic">{frase}</h3>
            {/* Se tem autor vai mandar ele direto */}
            <p className="text-right text-sm">{autor ?? "Autor Desconhecido"}</p>
        </div>
    );


}