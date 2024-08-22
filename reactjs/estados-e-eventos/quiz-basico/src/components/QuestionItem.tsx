import { Question } from "@/types/Question"
import { useState } from "react";

type Props = {
    question: Question;
    count: number;
    /* onAnswer mandando alternativa que ele escolheu */
    onAnswer: (answer: number) => void;
}

export const QuestionItem = ({ question, count, onAnswer }: Props) => {

    /* Verificar se questão esta correta */
    /* Para saber qual foi clicada criamos uma state nesse componente */
    const [selected, setSelected] = useState<number | null>(null);

    const checkQuestion = (key: number) => {
        if (selected === null) {
            setSelected(key);
            setTimeout(() => {
                onAnswer(key);
                setSelected(null);
            }, 1800);
        }
    }

    return (
        <div>
            <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
            {/* Listar alternativas */}
            <div>{question.options.map((item, key) => (
                <div key={key} onClick={() => checkQuestion(key)} className={
                    `border border-blue-300 px-3 py-2 rounded-md text-lg mb-4 bg-blue-100
                
                    /* Selecionando alternativa */
                    ${selected !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}

                    /* Acertou a alternativa */
                    ${selected !== null && selected === question.answer && selected === key && 'bg-green-100 border-green-300'}
                
                      /* Errou a alternativa */
                    ${selected !== null && selected !== question.answer && selected === key && 'bg-red-100 border-red-300'}
                
               `}>{item}</div>
            ))}
            </div>
        </div >
    );
}