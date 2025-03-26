const frutas = ["maçã", "banana", "laranja"];
const numeros = [1, 2, 3, 4, 6];
//frutas[1] = "kiwi";
//frutas.unshift("kiwi", "uva");
//frutas.push ("uva");
//const ultimaFruta = frutas.pop();
//const sliceFrutas = frutas.slice(1, 2);
frutas.splice(0, 2, "kiwi", "uva");
// frutas.forEach((fruta) => {
// console.log(fruta);
// })
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
// for(let i = 0; i<frutas.length; i++){
for (const fruta of frutas) {
  //console.log(frutas.join("/"));
  //console.log(sliceFrutas);
  // console.log(fruta);
}
console.log(numerosPares);
// console.log(frutas[i]);}

const soma = numeros.reduce((accumulador, numero) => accumulador + numero, 0);
console.log(soma); // Saída: 10
