let nome: string = "Leonardo";
let idade: number = 25;
let email: string = "leo@mail.com";
let ip: string = "192.168.zero.1";
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);

//Importando do matematica.ts em CommonJS
const matematica = require("./matematica");
let n1 = 10;
let n2 = 5;
console.log(matematica.somar(n1, n2));

//Importando ES6
//Importando tudo de matematica.ts
import * as Matematica from "./matematica";
console.log(Matematica.somar(n1, n2));

//Importando algumas funções de matematica.ts
import { somar, subtrair } from "./matematica";
console.log(subtrair(n1, n2));

//Importando tudo de matematica.ts
import Matematicas from "./matematica";
console.log(Matematicas.multiplicar(n1, n2));
console.log(Matematicas.versao);

import validator from "validator";
console.log(validator.isEmail(email));
console.log(validator.isIP(ip));
