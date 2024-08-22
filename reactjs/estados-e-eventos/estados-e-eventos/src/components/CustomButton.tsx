type Props = {
    label: string;
    aoClicar: () => void; //Pode ser qualquer nome, nesse caso criamos o nosso aoClicar
}

export const CustomButton = ({ label, aoClicar }: Props) => {
    return (
        <button onClick={aoClicar} className="p-3 mr-3 text-white bg-blue-700 rounded-md">{label}</button>
    );
}