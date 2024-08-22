//Por conta do Next, no futuro veremos melhor
"use client"
import { CustomButton } from "@/components/CustomButton";
import { FormEvent, useState } from "react";
import { Person } from "@/types/Person";
import { TodoItem } from "@/types/TodoItem";
import { it } from "node:test";

const Page = () => {

  //Recomendado por conta da organização
  function handleClick() {
    alert("clicou")
  }

  //Outro exemplo com parametro
  const avisar = (msg: string) => {
    alert(msg);
  }

  /* Passando eventos via Props */
  const handleButton1 = () => alert("botao 1")
  const handleButton2 = () => alert("botao 2")
  const handleButton3 = () => alert("botao 3")

  /* Prevent Default, seria enviar o formulario sem atualizar a pagina */
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("mandando")
  }

  /* Para exemplo de State/Hook */
  /* Criando State usando Array Desconstruction e definindo valor inicial do count */
  const [count, setCount] = useState<number>(0)

  const maisUm = () => {
    /* Quando alteramos o count é como se fosse criado outro cound e ele é renderizado novamente */
    setCount(count + 1)
    console.log(count);
  }

  /* State em UI */
  const [revelado, setRevelado] = useState<boolean>(false);

  const mostrarSegredo = () => {
    setRevelado(!revelado);
  }

  /* State em Campo */
  const [nameInput, setNameInput] = useState('');
  const mostrarValor = () => {
    return "ola";
  }

  /* State em Tempo */
  const [contador, setContador] = useState(0);

  /* Ele executa tudo depois renderiza o que foi mudado por isso no alert vai aparecer 0 e depois o numero vai ser aumentado */
  const aumentar = () => {
    //alert(contador); /* Mostra o contador original de quando a função foi chamada */

    /* 
    Por conta da frase acima isso nao funcionaria, ele mostraria 1 de resultado 
    setContador(contador + 1);
    setContador(contador + 1);
    setContador(contador + 1);
    */

    /* Para atualizar uma variavel no meio da função devemos fazer como no exemplo abaixo */
    setContador(contador + 1);
    /* c pega o que esta de fato na fila de execução, então ele somaria com o valoro primeiro contador */
    setContador(c => c + 1);
    /* Mesma coisa que isso:
    function somar2(c) {
      return c +2
    } */
  }

  /* Objetos em State */

  const [fullName, setFullName] = useState<Person>(
    { name: '', lastName: '' }
  );

  const limparNome = () => {
    setFullName({ ...fullName, name: '' });
  }

  /* ########## Arrays em State ##########*/
  /* Exibindo */
  const [list, setList] = useState<TodoItem[]>([
    { id: 1, label: "Estudar", checked: false },
    { id: 2, label: "Caminhar", checked: true },
    { id: 3, label: "Jantar", checked: false }
  ]);

  /* Adicionando item no array*/
  /* Conforme vai sendo digitado vai atualizando o input */
  const [itemInput, setItemInput] = useState('');

  /* Recriando o array com a nova tarefa */
  const adicionarTarefa = () => {
    if (itemInput.trim() === '') return;
    /* Copia o array original e adiciona o novo valor */
    setList([...list, { id: list.length + 1, label: itemInput, checked: false }])
    setItemInput('');
  }

  /* Removendo item do array */
  const deletarTarefa = (id: number) => {
    /* Vai criar um novo array igual removendo apenas o item que clicamos */
    setList(list.filter(item => item.id !== id))
  }

  /* Editando item do array */
  const toggleTarefa = (id: number) => {
    /* 2 Caminhos
    1 - Criar um novo array com as novas informações (mais simples)
    2 - Usar o Map (tambem cria um novo Array) 
    */
    let newList = [...list];
    /* Após adicionarmos ID ao item temos que trocar esse metodo
      for (let i in newList) {
          newList[index].checked = !newList[index].checked
       } 
    */
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].checked = !newList[i].checked;
      }
    }

    setList(newList);
  }

  return (
    <div className="p-8">

      <div className="m-10">
        {/* Colocar handleClick() apenas quando tiver retorno*/}
        <button onClick={handleClick} className="p-2 bg-blue-700 text-white rounded-md">Clique Aqui</button><br /><br />
        <button onClick={() => avisar('aviso1')} className="p-2 bg-yellow-700 text-white rounded-md">Avisar</button><br /><br />

        <button onClick={function () {
          alert("clicou2");
        }} className="p-2 bg-purple-700 text-white rounded-md">Clique Aqui</button><br /><br />

        <button onClick={() => {
          alert("clicou3");
        }} className="p-2 bg-red-700 text-white rounded-md">Clique Aqui</button>
      </div>

      <div className="m-10">
        <h1>Passando eventos via Props</h1>
        <CustomButton label="clique aqui" aoClicar={handleButton1} />
        <CustomButton label="clique aqui 2" aoClicar={handleButton2} />
        <CustomButton label="clique aqui 3" aoClicar={handleButton3} />
      </div>

      <div className="m-10">
        <h1>Prevent Default</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="text" />
          <input className=" ml-3  bg-purple-700 rounded-md" type="submit" value=" Enviar" />
        </form>
      </div>

      <div className="m-10">
        <h1 className="text-3xl">State e Exemplos</h1>
        <div className="text-2xl">
          {/* Mesmo a encrementação sendo vista no console, ela nao atualiza na tela.
        A tela é inicialmente renderizada com o valor da variavel, porem ela nao atualiza sozinha em tela, pois o return ja ocorreu, então devemos disparar a renderização novamente usando os States.

        Criamos um State e definimos qual tag vai ser modificada, nesse caso vamos usar o count
        */}
          <p>{count}</p>
          <button className="p-2 bg-purple-700 rounded-md" onClick={maisUm}>+1</button>
        </div><br />
        <h1 className="text-xl">State em UI</h1>
        {revelado &&
          <div className=" mt-3 bg-yellow-900 ">Area Secreta</div>
        }
        <button className="p-2 bg-gray-700 rounded-md" onClick={mostrarSegredo}>{revelado ? 'Esconder Area Secreta' : 'Revelar Area Secreta'}</button>
      </div>

      <div className="m-10">
        <h1 className="text-xl">State em Campos</h1>

        {/* Consultar a State em vez de consultar o campo para pegar o valor, onChange vai mudar essa informação no State */}
        <input
          type="text"
          className="border border-black  text-xl text-black rounded-md"
          placeholder="Digite Seu Nome"
          value={nameInput}
          onChange={e => setNameInput(e.target.value)} /><br />
        <p>Seu nome é: {nameInput}</p>
        <button onClick={mostrarValor} className="p-2 text-sm bg-purple-700 rounded-md">Mostrar Valor</button>
      </div>

      <div className="m-10">
        <h1 className="text-xl">State em Contador</h1>
        <p>{contador}</p>
        <button onClick={aumentar} className="p-2 bg-purple-700 rounded-md">+1</button>
      </div>

      <div className="m-10">
        <h1 className="text-xl">Usando Objetos em States</h1>
        <input
          type="text"
          placeholder="Nome"
          className="border border-black text-2xl text-black rounded-md mb-3"
          value={fullName.name}
          /* Funcionaria, mas se tivesse que mudar um campo e tivesse muitos campos ficaria inviavel */
          onChange={e => setFullName({ name: e.target.value, lastName: fullName.lastName })} /><br />

        <input
          type="text"
          placeholder="Sobrenome"
          className="border border-black text-2xl text-black rounded-mb"
          value={fullName.lastName}
          /* Cria objeto fullName e altera apenas a propriedade lastName*/
          onChange={e => setFullName({ ...fullName, lastName: e.target.value })} />
        <p className="my-2">Meu nome completo é:</p>
        <p>{fullName.name} {fullName.lastName}</p>
        <button onClick={limparNome} className="rounded-md bg-blue-500 p-2">Limpar Nome</button>
      </div>

      <div className="m-10">
        <h1 className="text-xl">Arrays com State</h1>
        {/* Sempre quando um Array é alterado ele tem que ser recriado na memoria e não alterado */}
        <h2 >Lista de Tarefas</h2>
        <div className="flex w-full max-w-lg my-3 p-4 rounded-mdbg-gray-700 border-2 border-gray">
          <input type="text" placeholder="0 que deseja fazer?" className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
            value={itemInput}
            onChange={e => setItemInput(e.target.value)} />
          <button onClick={adicionarTarefa}>Adicionar</button>
        </div>
        <p className="my-4">{list.length} itens na lista</p>
        <ul className="w-full max-w-lg list-disc pl-5">
          {list.map(item => (
            <li key={item.id}>
              <input onClick={() => toggleTarefa(item.id)} className="w-6 h-6 mr-3" type="checkbox" checked={item.checked} />
              {item.label} < button onClick={() => deletarTarefa(item.id)} className="hover:underline">[ deletar ]</button></li>))}
        </ul>

      </div>



    </div >
  );
}

export default Page;