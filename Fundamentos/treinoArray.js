const numeros = [1, 2, 3, 4, 5, 6];

const somar = (numero) => {
  let some = 0;
  for (let i = 0; i < numero.length; i++) {
    some += numero[i];
  }
  return some;
};

const resultado = somar(numeros);
console.log(`A soma dos número é ${resultado}`);

const parNum = (num) => {
  const pares = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      pares.push(num[i]);
    }
  }
  return pares;
};

const numsPares = parNum(numeros);
console.log(`Os números pares dão ${numsPares}`);

const pessoas = [
  { nome: "Rafa", idade: 23 },
  { nome: "Nicolas", idade: 12 },
  { nome: "Mariana", idade: 20 },
];

const nomePessoa = pessoas.map((pessoa) => pessoa.nome);
console.log(nomePessoa);

pessoas.forEach((pessoa) => {
  console.log(`Nome: ${pessoa.nome}/ Idade: ${pessoa.idade}`);
});

const frutas = ["maçã", "pessêgo", "banana", "laranja", "kiwi", "toranja"];

const contarFrutas = (fruta) => fruta.length;
const total = contarFrutas(frutas);

frutas.unshift("Maracuja");
console.log(`Lista de frutas: ${frutas}`);
console.log(`A quantidade de frutas é ${total}`);

const ultimaFruta = frutas.pop();
console.log(`Removemos a ${ultimaFruta}`);
