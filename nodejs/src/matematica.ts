// Exportando ES6
let versao = "1.0";
export function somar(x: number, y: number): number {
  return x + y;
}

export function subtrair(x: number, y: number): number {
  return x - y;
}

function multiplicar(x: number, y: number): number {
  return x * y;
}
//Export unico
export default {
  somar: somar,
  multiplicar: multiplicar,
  versao,
};
//Exportando padrao do Node/CommonJS
module.exports.somar = somar;
module.exports.subtrair = subtrair;
