/* tsc src/script.ts Gera Arquivo
tsc src/script.ts --noEmitOnError
Não gera arquivo se tiver erro no codigo */

console.log("Exemplos de Tipagem");
let nome: string = "Leo";
let idade: number = 30;
let existe: boolean = true;
console.log(nome, idade, existe);

// Array
let nomes: string[] = ["leo", "gui", "ana"];
let numeros: number[] = [1, 2, 3];

// Type Any
//let nome: any = ["Leo", 25, true]; Ignora essa tipagem

// Union Types
let age: string | number = 90; // Pode ser string ou number

function mostrarIdade(idade: string | number) {
  if (typeof idade === "string") {
    console.log(idade.toUpperCase());
  } else {
    console.log(idade);
  }
}
mostrarIdade(50);
mostrarIdade("50");

// Primeira Letra Maiuscula
function firstLetterUpperCase(name: string): string {
  //Retornara uma string
  let firsLetter = name.charAt(0).toUpperCase();
  return firsLetter + name.substring(1);
}

console.log(firstLetterUpperCase("leonardo"));

function somar(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(somar(10, 10));

let names = ["leo", "gui", "ana"];
nomes.forEach(function (nome) {
  if (typeof nome === "string") {
    console.log(nome.toUpperCase());
  } else {
    console.log(nome);
  }
});

// Objetos
// "?" deixa propriedade opcional
function resumo(usuario: { nome: string; idade?: number }) {
  if (usuario.idade != undefined) {
    return `Ola ${usuario.nome} voce tem ${usuario.idade} anos`;
  } else {
    return `Ola ${usuario.nome}`;
  }
}

let u = { nome: "leo" };

newFunction();
function newFunction() {
  console.log(resumo(u));
}

// Type e Interface

// Nao alteravel
/* type User = {
  nome: string;
  idade: number;
}; */

// Alteravel
interface User {
  nome: string;
  idade: number;
}

function resumo2(usuario: User) {
  return `Ola ${usuario.nome}`;
}

resumo2({
  nome: "leonardo",
  idade: 25,
});
