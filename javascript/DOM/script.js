console.log('Selecionando Elementos Pela Tag');
console.log(document.getElementsByTagName('h1'));

console.log('Selecionando Elementos Pela Classe');
console.log(document.getElementsByClassName('botao'));

console.log('Selecionando Elemento Pelo ID');
console.log(document.getElementById('teste'));

console.log('Query Selector h1, .botao, #teste');
console.log(document.querySelector('h1'));

console.log('Selecionando Elementos Dentro de Outros');
console.log(document.querySelectorAll('#teste ul li'));


// Manipulando Elementos
function mudar() {
    const teste = document.getElementById('teste');
    const ul = teste.querySelector('ul');

    // // Altera o Primeiro Children
    ul.children[0].innerHTML = "Item Alterado"

    // // Altera Todos os li
    // ul.innerHTML = "<li>Item Alterado</li>";

    // Adiciona Algo no Elemento
    let newLi = document.createElement("li");
    newLi.innerText = "Item Novo";
    ul.appendChild(newLi);

    // Adiciona Algo Antes ou Após o Elemento .after / .before
    let newButton = document.createElement("button");
    newButton.innerHTML = "Botão Após";
    ul.after(newButton);


    console.log(ul.innerHTML);
}

// Manipulando Atributos
function exemploInput() {
    const input = document.querySelector('input');
    console.log(input.getAttribute('placeholder'));

    if (input.hasAttribute('type')) {
        console.log('Tem type')
    } else {
        console.log('Não Tem type')
    }

    input.setAttribute('type', 'text');
}

// Manipulando Classes
function clickClass() {
    const h1 = document.querySelector('h1');
    h1.classList.toggle('amarelo');
}

// onClick
function clicou() {
    alert("Click");
}

document.querySelector('.botao').addEventListener("click", function () {
    clicou()
});

// onKey
function apertou() {
    console.log('APERTOU')
}

function segurou() {
    console.log('SEGUROU')
}

function soltou() {
    console.log('SOLTOU');
}

document.addEventListener('keydown', apertou) // Funcionar na tela toda

// Lista de Tarefas

const input = document.querySelector('input');
const lista = document.getElementById('lista');

function soltar(e) {
    if (e.key === 'Enter') {
        let newLi = document.createElement("li");
        newLi.innerText = input.value;
        lista.appendChild(newLi);
        input.value = '';
    }
}

input.addEventListener('keyup', soltar);