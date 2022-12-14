class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    // Estaticos
    // Não faz referencia a uma pessoa e sim a CLASSE PESSOA
    static olhos = 2;

    static oi() {
        console.log('oi');
    }
    // Funciona Pessoa.oi(); Não funciona p4.oi();

    // Getter e Setter
    _nome = '';
    _sobrenome = '';
    _idade = 0;

    get nome() {
        return this._nome;
    }

    set nome(x) {
        this._nome = x;
    }

    get sobrenome() {
        return this._sobrenome;
    }

    set sobrenome(x) {
        this._sobrenome = x;
    }

    get idade() {
        return this._idade;
    }

    set idade(x) {
        this._idade = x;
    }

    passos = 0;
    andou() {
        this.passos++;
    }

    dizer() {
        console.log(`Eu sou ${this.nome} e tenho ${Pessoa.olhos} olhos`);
    }
}

let p1 = new Pessoa('Leonardo', 'Hirooka', 20);
let p2 = new Pessoa('Bruno', 'Henrique', 25);
console.log(`${p1.nome} tem ${p1.idade} anos e ${p2.nome} tem ${p2.idade}`);

p1.andou();
p1.andou();
p1.andou();
console.log(`${p1.nome} deu ${p1.passos} passos`);


// Herança
class Estudante extends Pessoa {
    constructor(nome, id) {
        super(nome); // Se refere a classe que esta extendendo (Pessoa)
        this.id = id;
    }
}

let p3 = new Estudante("Rodrigo", 1);
console.log(`Nome: ${p3.nome} ID: ${p3.id}`)
p3.dizer();

// Metodo Estatico
let = p4 = new Pessoa('Bia')
p4.dizer();


// Factory
function criarPessoa(nome, idade) {
    let p = new Pessoa(nome);
    p.idade = idade;
    return p;
}

let p5 = criarPessoa('Gui', 25);
console.log(`${p5.nome} tem ${p5.idade} anos`)