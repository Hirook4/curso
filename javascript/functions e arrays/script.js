console.log("---------- Funções ----------");

function gravidade() {
    console.log("A gravidade da Terra é")
    console.log(9.807)
}
gravidade();


function nomeCompleto(nome, sobrenome) {
    console.log(`Nome Completo: ${nome} ${sobrenome}`)
}
nomeCompleto("Leonardo", "Hirooka")


function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log("Resultado: " + resultado);
}
console.log(somar(10, 10))


function retornarSoma(n1, n2) {
    let resultado = n1 + n2;
    return resultado;
}
let soma = retornarSoma(5, 5);
console.log(soma);


console.log('---------- Arrow Function ----------');
const somarArrow = (x, y) => {
    let resultado = x + y;
    return resultado;
}
console.log(somarArrow(10, 5));


const sobrenome = (sob) => 'Leonardo ' + sob;
console.log(sobrenome('Hirooka'));


console.log('---------- Variavel Global ----------');
let count = 0;
function add() {
    count++;
}
add()
add()
add()
console.log(count);


console.log('------ Função Dentro de Função ------');
function total(a, b) {
    function multiplica(x) {
        return x * x;
    }

    let resultadoA = multiplica(a);
    let resultadoB = multiplica(b);
    return resultadoA + resultadoB;
}
console.log(total(2, 3))


console.log('');
console.log('---------- Arrays ----------');
let colors = ['red', 'green', 'blue'];
console.log(colors[2]);


let matriz = ['a', 'b', 'c', [1, 2, 3]];
console.log(matriz[3][1])

let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'açucar',
    'leite'
]

console.log(ingredientes)
ingredientes.push('canela');
console.log(ingredientes)
ingredientes.pop();
console.log(ingredientes)

console.log(`Total de Ingredientes: ${ingredientes.length}`);

let carros = ['bmw', 'ferrari', 'mercedes'];
console.log(carros[1]);


// Trocar Ferrari por Audi
carros[1] = 'audi';
console.log(carros);


// Adicionar Volvo na Lista
carros.push('Volvo');
console.log(carros);


// Exibir Numero de Elementos
console.log(carros.length);

console.log("---------- Objeto ----------");
let pessoa = {
    nome: 'Leonardo',
    idade: 90,
    pais: 'Brasil'
}
console.log(pessoa);


console.log("------ Função dentro de Objeto ------")
let pessoa2 = {
    nome: 'Leonardo',
    sobrenome: 'Hirooka',
    pais: 'Brasil',
    nomeCompleto: function () {
        return this.nome + ' ' + this.sobrenome;
    }
}
console.log(pessoa2.nomeCompleto());


console.log("---------- Loops ----------");
console.log("---------- For ----------");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let cores = ['branco', 'preto', 'vermelho', 'verde', 'azul'];
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

for (let i in cores) {
    console.log(cores[i]);
}

for (let cor of cores) {
    console.log(cor);
}

console.log("---------- While ----------");
let numero = 1
while (numero <= 10) {
    numero++
    console.log("Loop");
}

console.log("---------- Ordenação ----------");
let fruits = ['maça', 'uva', 'laranja', 'banana'];
fruits.sort(); // Ordem Alfabetica
fruits.reverse(); // Inverte o Array
console.log(fruits);

let bigFruits = fruits.filter((item) => {
    if (item.length > 4) {
        return true;
    }
})
console.log(bigFruits);


let ok = fruits.every((value) => {
    if (value.length > 2) {
        return true;
    }
})

if (ok) {
    console.log("Todos são maior que 3");
} else {
    console.log("Nem todos são maior que 3");
}


if (fruits.includes('uva')) {
    console.log("Tem Uva")
} else { console.log("Não Tem Uva") }


let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'BMW', year: 2018 },
    { brand: 'Ferrari', year: 2020 },
]

cars.sort((a, b) => {
    if (a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1
    } else {
        return 0;
    }
});

console.log(cars);


console.log("");
console.log("---------- Exercicio Função ----------");

// Exercicio 1
function calcPct(n1, n2) {
    let resultado = (n1 * n2) / 100;
    console.log(`${n1}% de ${n2} é ${resultado}`);
}
calcPct(50, 200);

// Exercicio 2
function calculaImovel(metro, quartos) {
    let valorMetro = 3000;
    if (quartos == 1) {
        return metro * valorMetro;
    } else if (quartos == 2) {
        return metro * (valorMetro * 1.2);
    } else {
        return metro * (valorMetro * 1.5);
    }
}
console.log(calculaImovel(100, 3))

// Exercicio 3
function login(id, senha) {
    if (id === 'Leo' && senha === '123') {
        console.log("Login Realizado")

    } else {
        console.log("Login Recusado")
    }

}
login('Leo', '123');

