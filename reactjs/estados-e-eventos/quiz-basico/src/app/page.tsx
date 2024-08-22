'use client'

import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/Questions";
import { useState } from "react";

const Page = () => {
  const title = 'Quiz Basico'
  /* State da pergunta */
  const [currentQuestion, setCurrentQuestion] = useState(0);
  /* Lista de respostas */
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: number) => {
    /* Pega resposta e salva */
    setAnswers([...answers, answer]);
    /* Carrega proxima pergunta */
    nextQuestion();
  }

  /* Função de carregar proxima pergunta */
  const nextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  /* Função de reiniciar jogo */
  const handleRestart = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }

  return (
    /* w-full - até o fim da tela, h-screen - até o fim da tela disponivel */
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          {!showResult &&
            /* O atributo question vai receber  */
            < QuestionItem question={questions[currentQuestion]} count={currentQuestion + 1} onAnswer={handleAnswer} />
          }
          {showResult && <Results questions={questions} answers={answers} />}
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} Pergunta${questions.length === 1 ? '' : 's'}`
          }

          {showResult &&
            <button onClick={handleRestart} className="px-3 py-2 rounded-md bg-blue-800 text-white">Reiniciar</button>
          }
        </div>
      </div>
    </div>
  );
}

export default Page;