console.log('---------- Manipulação String ----------');
let nome = 'Leonardo Hirooka';

let resultado = nome.length;
let resultado2 = nome.indexOf('Hirooka');
let resultado3 = nome.slice(3, 8); // Pode ter parametro negativo
let resultado4 = nome.substring(3, 8);
let resultado5 = nome.replace('Hirooka', 'Souza');
let resultado6 = nome.toUpperCase(); // toLowerCase
let resultado7 = nome[9];
let resultado8 = nome.split(' ');

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
console.log(resultado6);
console.log(resultado7);
console.log(resultado8);

let telefone = '9';
// Quantos caracteres a String deve ter // Qual item completara a String caso nao tenha os caracteres
console.log(telefone.padStart(9, '@'));
console.log(telefone.padEnd(9, '@'));

console.log('---------- Manipulação Number ----------');
let n = 10.0001;
let n2 = '20';

let res = n.toString() + 5;
let res2 = n.toFixed(2);
let res3 = parseInt(n2) + 5;

console.log(res);
console.log(res2);
console.log(res3);

console.log('--- Manipulação Array(IMPORTANTE) ---');

let lista = ['fermento', 'açucar', 'ovo', 'farinha', 'corante', 'massa'];
let lista2 = ['prato', 'colher', 'garfo'];

let result = lista.toString();
let result2 = lista.join('---');
let result3 = lista.indexOf('corante'); // Mostra -1 se não encontrar
lista.pop(); // Remove o Ultimo Item
lista.shift(); // Remove o Primeiro Item
lista.push('Sal') // Insere um Novo Item
// delete lista[2];
lista.splice(3, 2); // Remove um Item do Array
lista[4] = 'cereja';
let result4 = lista.concat(lista2); // Concatena Arrays
let result5 = lista.sort(); // Ordena o Array
// lista.revert();

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

let numeros = [10, 5, 12, 20, 50];
let numeros2 = [];
let numeros3 = [];
let numeros4 = [];
let numeros5 = [];

// Dobra o valor de cada item e coloca em um array novo
numeros2 = numeros.map(function (item) {
    return item * 2;
})

// for (let i in numeros) {
//     numeros2.push(lista[i] * 2);
// }

// Filtra itens menores que 20
numeros3 = numeros.filter(function (item) {
    if (item < 20) {
        return true;
    } else {
        return false;
    }
})

// Verifica se TODOS os item cumprem as condições
numeros4 = numeros.every(function (item) {
    if (item > 20) {
        return true;
    }
    else {
        return false;
    }
})

// Busca algo no array - findIndex retorna a posição do item
numeros5 = numeros.find(function (item) {
    if (item == 12) {
        return true;
    } else {
        return false;
    }
})

console.log(numeros);
console.log(numeros2);
console.log(numeros3);
console.log(numeros4);
console.log(numeros5);

let arrayInclude = [1, 2, 3, 4, 5];
console.log(arrayInclude.includes(5));

console.log('-------- Manipulação de Data --------');

let d = new Date();
// let d = new Date(1999, 04, 20, 08, 30, 00);
// let d = new Date('2020-01-01 15:30:00');
// let d = new Date(999999); Milissegundos

console.log(d);
console.log(d.toDateString());
console.log(d.toUTCString());

let novoValor = d.getFullYear();
// Month = Mes
// Date = Dia atual (Numero)
// Day (Os dias da semana vão de 0 a 6, começando do domingo)
// Hours / Minutes / Seconds / Milliseconds
// Time ou Date.now() pega o Timestamp atual
console.log(novoValor);

d.setFullYear(1999);
d.setMonth(04);
d.setDate(20);
console.log(d);

d.setFullYear(d.getFullYear() + 20);
d.setHours(15);
console.log(d);

console.log('Timer Javascript')

let timer;

function comecar() {
    timer = setInterval(showTime, 10);
}

function parar() {
    clearInterval(timer);
}

function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ms = d.getMilliseconds();
    let txt = `${h}:${m}:${s}:${ms}`;
    document.querySelector('.demo').innerHTML = txt;
}

setTimeout(() => {
    alert('60 Segundos se Passaram')
}, 60000);

// Contagem de 0 a 10
// for (var i = 1; i <= 10; i++) {
//     (function (ind) {
//         setTimeout(function () { console.log(`${ind} segundos se passaram`); }, 1000 + (3000 * ind));
//     })(i);
// }

console.log('---------- Math ----------');
let valor = Math.round(5.80); // Arredonda para o mais proximo / Ceil para cima / Floor para baixo
// Math.min(10, 20, 30, 40, 50); Retorna o menor numero / max retorna o maior 
// Math.random() Retorna um numero aleatorio
console.log(valor);

console.log('---------- Desestruturação ----------');
// Transferir dados do objeto para variavel
let pessoa = {
    nome0: 'Leonardo',
    sobrenome0: 'Hirooka',
    social: {
        instagram: 'leohirooka',
        github: 'hirook4',
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
}
//    Trocando nome da variavel      Valor Padrão
let { nome0: pessoaNome, sobrenome0, idade0 = 20 } = pessoa;
let { instagram, github } = pessoa.social;
console.log(pessoaNome, sobrenome0, idade0, instagram, github);

// Pegando objeto dentro de objeto
// let { nome0, sobrenome0, social: { instagram } } = pessoa;
// console.log(nome0, sobrenome0, instagram);

// Desconstruindo no parametro
function mostrarNome({ nome0, sobrenome0 }) {
    return `${nome0} ${sobrenome0}`;
}

console.log(mostrarNome(pessoa));

// Desconstruindo Arrays
let array = ['Leonardo Hirooka', 'Leonardo', 'Hirooka', '@leohirooka'];
let [nomeCompelto1, nome1, sobrenome1, instagram1] = array
console.log(nomeCompelto1, nome1, sobrenome1, instagram1);

// Pegar somente um item do array
let [, a, , insta] = array;
console.log(`Nome: ${a} Usuario: ${insta}`);

// Array criado ja desconstruido
// let [nome, sobrenome] = ['Leonardo','Hirooka'];

console.log('---------- Operador Spread ----------')

let letras = ['a', 'b', 'c', 'd', 'e'];
let numerosSpread = [...letras, 6, 7, 8, 9, 10];
console.log(numerosSpread);

let infos = {
    nome: 'Leonardo',
    sobrenome: 'Hirooka'
}

let infoCompleta = {
    ...infos,
    pais: 'Brazil'
}
console.log(infoCompleta);

console.log('---------- Operador Rest ----------');

function adicionar(...n) {
    console.log(n)
}
adicionar(1, 2, 3, 4, 5);


function adicionarNome(nomes, ...novosNomes) {
    let novo = [...nomes, ...novosNomes]; return novo;
}
let nomes = ['Leonardo', 'Rodrigo']
let resulta = adicionarNome(nomes, 'Jonathan', 'Joseph');

console.log(resulta);


console.log('---------- Arrow Function ----------');

const soma = (x, y) => { return x + y; }
console.log(soma(10, 10));

const somar = (x, y) => x + y;
console.log(soma(5, 5));

// Somente um parametro
const nomeLength = nome => nome.length;
console.log(nomeLength('Leonardo'));


console.log('---------- Key, Values e Entries ----------')

let listaa = ['ovo', 'arroz', 'frango'];
console.log(Object.keys(listaa));
console.log(Object.values(listaa));
console.log(Object.entries(listaa));

let pessoaExemplo = {
    nome: 'Leo',
    idade: 25
}

console.log(Object.keys(pessoaExemplo));
console.log(Object.values(pessoaExemplo));
console.log(Object.entries(pessoaExemplo));


