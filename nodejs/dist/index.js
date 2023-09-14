"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let nome = "Leonardo";
let idade = 25;
let email = "leo@mail.com";
let ip = "192.168.zero.1";
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);
//Importando do matematica.ts em CommonJS
const matematica = require("./matematica");
let n1 = 10;
let n2 = 5;
console.log(matematica.somar(n1, n2));
//Importando ES6
//Importando tudo de matematica.ts
const Matematica = __importStar(require("./matematica"));
console.log(Matematica.somar(n1, n2));
//Importando algumas funções de matematica.ts
const matematica_1 = require("./matematica");
console.log((0, matematica_1.subtrair)(n1, n2));
//Importando tudo de matematica.ts
const matematica_2 = __importDefault(require("./matematica"));
console.log(matematica_2.default.multiplicar(n1, n2));
console.log(matematica_2.default.versao);
const validator_1 = __importDefault(require("validator"));
console.log(validator_1.default.isEmail(email));
console.log(validator_1.default.isIP(ip));
