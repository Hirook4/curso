alert("Hello World")

console.log("Hello World")

let nome = "Leo"
let idade = 20
let logado = true
let lista = ["arroz", "frango", "beterraba"]
let nomeCompleto = { nome: "Leo", idade: "Hirooka" }

console.log("Nome: " + nome + " Idade: " + idade)
console.log(logado)
console.log(lista)
console.log(nomeCompleto)

console.log(typeof nome)

let templateString = `${nome} ${idade}`
console.log(templateString)

// Comentario em uma linha

/*

Comentario em varias linhas

*/

if (idade >= 60) {
    console.log("Idoso")
} else if (idade > 18 && idade < 60) {
    console.log("Adulto")
} else {
    console.log("Criança")
}

let isMember = true
let shipping = isMember ? 5 : 30;
console.log("Frete: " + shipping)
console.log(isMember ? "Membro" : "Não Membro")

let adulto = idade >= 18 ? true : false;
console.log(adulto)

let alternativa = "B";
switch (alternativa) {
    case "A":
        console.log("1")
        break;
    case "B":
        console.log("2")
        break;
    case "C":
        console.log("3")
        break;

    default: console.log("Vazio")
        break;
}