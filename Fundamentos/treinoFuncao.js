function somar(num1, num2) {
  return num1 + num2;
}

const resultado = somar(4, 3);
console.log(`O resultado é: ${resultado}.`);

function isPar(num) {
  return num % 2 === 0 ? "É par" : "É ímpar";
}

console.log(isPar(4));
console.log(isPar(5));

function contarVogais(texto) {
  const vogais = texto.match(/[aeiou]/gi);
  return vogais ? vogais.length : 0;
}

console.log(contarVogais("Bee"));

const pessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};

const pessoa2 = pessoa("Carlos");
pessoa2.falar();

function maiorNum(numero1, numero2) {
  return numero1 > numero2 ? numero1 : numero2;
}

function menorNum(numero1, numero2) {
  return numero1 < numero2 ? numero1 : numero2;
}

const number1 = 8;
const number2 = 2;
const maior = maiorNum(number1, number2);
const menor = menorNum(number1, number2);

console.log(`O maior número é ${maior}`);
console.log(`O menor número é ${menor}`);

const pessoa1 = {
  nome: "Rafa",
  idade: 23,
  falar: function () {
    return `Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
  },
};

function exibir(pessoa1) {
  console.log(pessoa1.falar());
}

exibir(pessoa1);
