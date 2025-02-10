"use client"
import Image from "next/image";
import { useContext, useEffect, useReducer, useState } from "react";
import { Player } from "./components/Player";
import { Square } from "./components/Square";
import { Item } from "./Types/Item";
import { listReducer } from "@/reducers/ListReducer";
import { Header } from "./components/Header";
import { CountContext, CountProvider } from "./contexts/CountContext";

export default function Home() {
  const [firstName, setFirstName] = useState("Leo");
  const [lastName, setLastName] = useState("Souza");
  const [fullName, setFullName] = useState("");

  const [age, setAge] = useState(30);

  const handleLucas = () => {
    setFirstName("Lucas");
  }

  const handlePedro = () => {
    setFirstName("Pedro");
  }

  const handleAge = () => {
    setAge(90);
  }

  /* Tem 3 Etapas:
  1. Definição da função
  2. Quando vai rodar
  3. O que fazer quando ocorrer o unload? 
  */

  // Colocando apenas a função sem especificar esse código vai ser rodado toda vez que houver uma renderização
  useEffect(() => {
    console.log("Rodou o Effect Sem Especificar")
  });

  useEffect(() => {
    console.log("Rodou o Effect de Age")
  }, [age]); // Executado na primeira vez e fica monitorando determinado component

  /* Vai monitorar firstName e lastName e colocar o nome inteiro quando algumas dessas States forem alteradas */
  /* Esse método de usar não é recomendado pois é pesado  */
  useEffect(() => {
    setFullName(firstName + ' ' + lastName);
  }, [firstName, lastName]);

  /* Método recomendado, sem useEffect e sem useState */
  const completeName = firstName + " " + lastName;

  /* Exemplo Effect usando video, ver componente Player.tsx */
  const [playing, setPlaying] = useState(false);

  /* Exemplo CleanUp */
  const [show, setShow] = useState(false);

  /*
    Feito no ListReducer.ts
  
   Exemplo Reducer, ele serve para fazer as funções abaixo porem de forma mais organizada, é como se ele criasse um state ja com todas as funções abaixo inclusas nele, tem gente que gosta e tem gente que não
   const [list, setList] = useState<Item[]>([]);
  
   Adicionar item na lista
   const addNewItem = (text: string) => {
     setList([...list, {
       id: list.length,
       text,
       done: true
     }])
   }
  
   Alterar Texto
   const editText = (id: number, newText: string) => {
     setList(list.map(t => {
       if (t.id === id) {
         t.text === newText
       }
       return t;
     }));
   }
  
   Alterar Status 
   const changeStatus = (id: number) => {
     setList(list.map(t => {
       if (t.id === id) {
         t.done = !t.done;
       }
       return t;
     }));
   }
  
  Deletar Item 
   const removeItem = (id: number) => {
     setList(list.filter(t => t.id !== id));
   }
  */

  /* Usando Reducer */
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState('');

  const handleAddClick = () => {
    if (addField.trim() === '') return false;
    dispatch({
      type: 'add',
      payload: { text: addField.trim() }
    });
    setAddField('');
  }

  const handleCheckbox = (id: number) => {
    dispatch({
      type: 'toggleDone',
      payload: { id }
    });
  }

  const handleEdit = (id: number) => {
    const item = list.find(it => it.id === id);
    if (!item) return false;


    const newText = window.prompt('Editar Tarefa', item.text);
    if (!newText || newText?.trim() === '') return false;

    dispatch({
      type: 'editText',
      payload: { id, newText }
    });
  }

  const handleDelete = (id: number) => {
    if (!window.confirm('Tem certeza?')) return false;

    dispatch({
      type: 'remove',
      payload: { id }
    });
  }

  return (
    <>
      Meu nome é {firstName} e tenho {age} anos<br></br>
      <p>Nome inteiro: {fullName}</p>
      <p>Nome inteiro: {completeName}</p>
      <button className="border border-blue-400 m-3 p-3" onClick={handleLucas}>Lucas</button>
      <button className="border border-blue-400 m-3 p-3" onClick={handleAge}>Mudar Idade</button><br></br>
      <button className="border border-blue-400 m-3 p-3" onClick={handlePedro}>Pedro</button>
      <button className="border border-blue-400 m-3 p-3" onClick={handleAge}>Mudar Idade</button><br /><br />

      <div className="border border-white m-0 p-5">
        <h1>Exemplo real do Effect usando video</h1><br />
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl text-blue-400">{playing ? 'Rodando' : 'Pausado'}</p>
          <button onClick={() => setPlaying(!playing)} className="bg-blue-400 rounded-md p-3">Play/Pause</button>
          <Player src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" isPlaying={playing} />
        </div></div><br />

      <div className="border border-white m-0 p-5">
        <h1>CleanUp</h1><br />
        <div className="max-w-2xl mx-auto">
          <button className="bg-blue-400 rounded-md p-3" onClick={() => setShow(!show)}>Mostrar/Ocultar</button>
          {show && <Square />}
        </div></div><br></br>

      <div className="border border-white m-0 p-5">
        <h1>Usando Reducer - Lista de Tarefas</h1>
        <div className="flex max-w-2xl mx-auto border border-gray-400 rounded-md p-4 my-4">
          <input
            className="outline-none flex-1 rounded-md border border-white p-3 bg-transparent text-white" type="text"
            placeholder="Digite um item"
            value={addField}
            onChange={e => setAddField(e.target.value)} />
          <button onClick={handleAddClick} className="p-4">Add</button>
        </div>
        <ul className="max-w-2xl mx-auto">{list.map(item => (
          <li key={item.id}
            className="flex items-center p-3 my-3 border-b border-gray-800">

            <input
              type="checkbox"
              className="w-6 h-6 mr-4"
              defaultChecked={item.done}
              onClick={() => handleCheckbox(item.id)}
            />

            <p className="flex-1 text-lg">{item.text}</p>
            <button onClick={() => handleEdit(item.id)} className="mx-4 text-white hover:text-gray-500">Editar</button>
            <button onClick={() => handleDelete(item.id)} className="mx-4 text-white hover:text-gray-500">Excluir</button>
          </li>
        ))}
        </ul>
      </div><br></br>

      <div className="border border-white m-0 p-5">
        <h1>Usando Context - Contador</h1>
        <CountProvider><Header></Header></CountProvider>
      </div>
    </>
  );
}
