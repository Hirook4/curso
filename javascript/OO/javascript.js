class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    passos = 0;
    andou() {
        this.passos++;
    }
}

let p1 = new Pessoa('Leonardo', 'Hirooka', 25);
let p2 = new Pessoa('Bruno', 'Henrique', 25);
console.log(`${p1.nome} tem ${p1.idade} anos e ${p2.nome} tem ${p2.idade}`);

p1.andou();
p1.andou();
p1.andou();
console.log(`${p1.nome} deu ${p1.passos} passos`);