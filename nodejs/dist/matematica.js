"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtrair = exports.somar = void 0;
// Exportando ES6
let versao = "1.0";
function somar(x, y) {
    return x + y;
}
exports.somar = somar;
function subtrair(x, y) {
    return x - y;
}
exports.subtrair = subtrair;
function multiplicar(x, y) {
    return x * y;
}
//Export unico
exports.default = {
    somar: somar,
    multiplicar: multiplicar,
    versao,
};
//Exportando padrao do Node/CommonJS
module.exports.somar = somar;
module.exports.subtrair = subtrair;
