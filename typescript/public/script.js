"use strict";
/* tsc src/script.ts Gera Arquivo
tsc src/script.ts -w Watchmode - Live Server Typescript
tsc src/script.ts --noEmitOnError - Não gera arquivo se tiver erro no codigo
*/
console.log("Exemplos de Tipagem");
let nome = "Leo";
let idade = 30;
let existe = true;
console.log(nome, idade, existe);
// Array
let nomes = ["leo", "gui", "ana"];
let numeros = [1, 2, 3];
// Type Any
//let nome: any = ["Leo", 25, true]; Ignora essa tipagem
// Union Types
let age = 90; // Pode ser string ou number
function mostrarIdade(idade) {
    if (typeof idade === "string") {
        console.log(idade.toUpperCase());
    }
    else {
        console.log(idade);
    }
}
mostrarIdade(50);
mostrarIdade("50");
// Primeira Letra Maiuscula
function firstLetterUpperCase(name) {
    //Retornara uma string
    let firsLetter = name.charAt(0).toUpperCase();
    return firsLetter + name.substring(1);
}
console.log(firstLetterUpperCase("leonardo"));
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(10, 10));
let names = ["leo", "gui", "ana"];
nomes.forEach(function (nome) {
    if (typeof nome === "string") {
        console.log(nome.toUpperCase());
    }
    else {
        console.log(nome);
    }
});
// Objetos
// "?" deixa propriedade opcional
function resumo(usuario) {
    if (usuario.idade != undefined) {
        return `Ola ${usuario.nome} voce tem ${usuario.idade} anos`;
    }
    else {
        return `Ola ${usuario.nome}`;
    }
}
let u = { nome: "leo" };
newFunction();
function newFunction() {
    console.log(resumo(u));
}
function resumo2(usuario) {
    return `Ola ${usuario.nome}`;
}
resumo2({
    nome: "leonardo",
    idade: 25,
});
// Assertions
let idadeField = document.getElementById("idade");
console.log(idadeField.value);
// Type Literal (Mais ou menos inuteis)
function mostraTexto(texto, alinhamento) {
    return `<div style=text.align: ${alinhamento}">${texto}</div>`;
}
mostraTexto("A", "left");
mostraTexto("B", "right");
// mostraTexto("C", "blabla"); Nao sera aceito
// Inferência literal
function requisicao(url, method) { }
let req = {
    url: "https://google.com.br",
    method: "GET",
};
requisicao(req.url, req.method);
const somar2 = (n1, n2) => {
    return n1 + n2;
};
// Retorno Void
function removerElemento(el) {
    el.remove();
}
// removerElemento(document.getElementById("teste"));
