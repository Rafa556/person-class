//FUNÇÃO

// function Pessoa() {
//   this.idade = 0;

//   const self = this;
//   setInterval(function () {
//     self.idade++;
//     console.log(self.idade);
//   }, 1000);
// }

// let comparaComThis = function (param) {
//   console.log(this === param);
// };

// comparaComThis(global);

// const obj = {};
// comparaComThis = comparaComThis.bind(obj);
// comparaComThis(global);
// comparaComThis(obj);

// let comparaComThisArrow = (param) => console.log(this === param);
// comparaComThisArrow(global);
// comparaComThisArrow(module.exports);

// comparaComThisArrow = comparaComThisArrow.bind(obj);
// comparaComThisArrow(obj);
// comparaComThisArrow(module.exports);

// const fabricante = ["Mercedes", "Audi", "BMW"];

// function imprimir(nome, indice) {
//   console.log(`${indice + 1}. ${nome}`);
// }

// fabricante.forEach(imprimir);
// fabricante.forEach((fabricante) => console.log(fabricante));

// const notas = [7.7, 6.5, 5.2, 9.8, 3.6, 7.1, 10.0];

// const notasBaixas1 = [];
// for (let i in notas) {
//   if (notas[i] < 7) {
//     notasBaixas1.push(notas[i]);
//   }
// }

// console.log(notasBaixas1);

// const notasBaixas2 = notas.filter(function (nota) {
//   return nota < 7;
// });

// console.log(notasBaixas2);

// const notasBaixas3 = notas.filter((nota) => nota > 7);
// console.log(notasBaixas3);

// class Pessoa {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   falar() {
//     console.log(`Meu nome é ${this.nome}`);
//   }
// }

// const p1 = new Pessoa("João");
// p1.falar();

// const criarPessoa = (nome) => {
//   return {
//     falar: () => console.log(`Meu nome é ${nome}`),
//   };
// };

// const p2 = criarPessoa("João");
// p2.falar();

//OBJETOS ------------------------------------------------------------------

// const pessoa = {
//   nome: "João",
// };
// pessoa.nome = "Pedro";
// console.log(pessoa);

// // pessoa = { nome: "Ana" };
// Object.freeze(pessoa);

// pessoa.nome = "Maria";

// const pessoaConstante = Object.freeze({ nome: "João" });
// console.log(pessoaConstante);

// const a = 1;
// const b = 2;
// const c = 3;

// const obj1 = { a: a, b: b, c: c };
// const obj2 = { a, b, c };
// console.log(obj1, obj2);

// const nomeAttr = "nota";
// const valorAttr = 7.87;

// const obj3 = {};
// obj3[nomeAttr] = valorAttr;
// console.log(obj3);

// const sequencia = {
//   _valor: 1,
//   get valor() {
//     return this._valor++;
//   },
//   set valor(valor) {
//     if (valor > this._valor) {
//       this._valor = valor;
//     }
//   },
// };

// console.log(sequencia.valor, sequencia.valor);
// sequencia.valor = 1000;
// console.log(sequencia.valor, sequencia.valor);
// console.log(sequencia.valor, sequencia.valor);

// const pessoa = {
//   nome: "Rebeca",
//   idade: 2,
//   peso: 13,
// };

// console.log(Object.keys(pessoa));
// console.log(Object.values(pessoa));
// console.log(Object.entries(pessoa));

// Object.entries(pessoa).forEach(([chave, valor]) => {
//   console.log(`${chave}: ${valor}`);
// });

// Object.defineProperty(pessoa, "dataNascimento", {
//   enumerable: true,
// writable: false,
//   value: "01/01/2021",
// });

// pessoa.dataNascimento = "01/01/2020";
// console.log(pessoa.dataNascimento);

// const dest = { a: 1 };
// const ob1 = { b: 2 };
// const ob2 = { c: 3, a: 4 };
// const obj = Object.assign(dest, ob1, ob2);

// Object.freeze(obj);
// obj.c = 345;
// console.log(obj);

// Object.prototype.attr0 = "0";
// const avo = { attr1: "A" };
// const pai = { _proto_: avo, attr2: "B", attr3: "3" };
// const filho = { _proto_: pai, attr3: "C" };
// console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

// const carro = {
//   velAtual: 0,
//   velMax: 200,
//   acelerarMais(delta) {
//     if (this.velAtual + delta <= this.velMax) {
//       this.velAtual += delta;
//     } else {
//       this.velAtual = this.velMax;
//     }
//   },
//   status() {
//     return `${this.velAtual} KM/h de ${this.velMax} KM/h`;
//   },
// };
// const ferrari = {
//   modelo: "F40",
//   velMax: 324,
// };

// const volvo = {
//   modelo: "V40",
//   status() {
//     return `${this.modelo}: ${super.status()}`;
//   },
// };

// Object.setPrototypeOf(ferrari, carro);
// Object.setPrototypeOf(volvo, carro);

// console.log(ferrari);
// console.log(volvo);

// volvo.acelerarMais(250);
// console.log(volvo.status());

// ferrari.acelerarMais(350);
// console.log(ferrari.status());

// const pai = { nome: "Pedro", corCabelo: "preto" };

// const filha1 = Object.create(pai);
// filha1.nome = "Ana";
// console.log(filha1.corCabelo);

// const filha2 = Object.create(pai, {
//   nome: { value: "Bia", writable: false, enumerable: true },
// });
// console.log(filha2.nome);
// filha2.nome = "Carla";
// console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

// console.log(Object.keys(filha1));
// console.log(Object.keys(filha2));

// for (let key in filha2) {
//   filha2.hasOwnProperty(key)
//     ? console.log(key)
//     : console.log(`Por herança: ${key}`);
// }

// console.log(typeof String);
// console.log(typeof Array);
// console.log(typeof Object);

// String.prototype.reverse = function () {
//   return this.split("").reverse().join("");
// };

// console.log("Ecola Cod3r".reverse());

// Array.prototype.first = function () {
//   return this[0];
// };

// console.log([1, 2, 3, 4, 5].first());

// function Aluno(nome, nota) {
//   Pessoa.call(this, nome);
//   this.nota = nota;
// }

// Aluno.prototype = Object.create(Pessoa.prototype);
// Aluno.prototype.constructor = Aluno;
// Aluno.prototype.apresentar = function () {
//   console.log(`Meu nome é ${this.nome} e minha nota é ${this.nota}`);
// };

// const aluno1 = new Aluno("Carlor", 8);
// aluno1.apresentar();

// function multiplicador(fator) {
//   return function (numero) {
//     return numero * fator;
//   };
// }
// const dobro = multiplicador(2);
// console.log(dobro(5));
// console.log(dobro(10));

// function apresentar(nome = "Desconhecido", idade = 18) {
//   console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`);
// }
// apresentar();
// apresentar("Ana");
// apresentar("Pedro", 25);

// class Calculadora {
//   static somar(a, b) {
//     return a + b;
//   }
//   static subtrair(a, b) {
//     return a - b;
//   }
// }
// console.log(Calculadora.somar(5, 3));
// console.log(Calculadora.subtrair(7, 2));

// const contaBancaria = {
//   saldo: 0,
//   get saldoAtual() {
//     return this.saldo;
//   },
//   set deposito(valor) {
//     if (valor > 0) {
//       this.saldo += valor;
//     } else {
//       console.log("Depósito deve ser um número positivo");
//     }
//   },
// };

// contaBancaria.deposito = 100;
// console.log(contaBancaria.saldoAtual);
// contaBancaria.deposito -= 50;

// class Avo {
//   constructor(sobrenome) {
//     this.sobrenome = sobrenome;
//   }
// }

// class Pai extends Avo {
//   constructor(sobrenome, profissão = "Professor") {
//     super(sobrenome);
//     this.profissão = profissão;
//   }
// }
// class Filho extends Pai {
//   constructor() {
//     super("Silva");
//   }
// }

// const filho = new Filho();
// console.log(filho);

//ARRAY -----------------------------------------------------------------------------

// const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

// aprovados.forEach(function (nome, indice) {
//   console.log(`${indice + 1}) ${nome}`);
// });

// aprovados.forEach((nome) => console.log(nome));

// const exibirAprovados = (aprovado) => console.log(aprovado);
// aprovados.forEach(exibirAprovados);

// Array.prototype.forEach2 = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

// aprovados.forEach(function (nome, indice) {
//   console.log(`${indice + 1}) ${nome}`);
// });

// const nums = [1, 2, 3, 4, 5];

// let resultado = nums.map(function (e) {
//   return e * 2;
// });

// console.log(resultado);

// const soma10 = (e) => e + 10;
// const triplo = (e) => e * 3;
// const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;
// resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
// console.log(resultado);

// const carrinho = [
//   '{ "nome": "Borracha", "preco": 3.45}',
//   '{ "nome": "Caderno", "preco": 13.90}',
//   '{ "nome": "Kir de Lapis", "preco": 41.22}',
//   '{ "nome": "Caneta", "preco": 7.50}',
// ];

// const paraObjeto = (json) => JSON.parse(json);
// const valorPreco = (produto) => produto.preco;

// const resultado = carrinho.map(paraObjeto).map(valorPreco);
// console.log(resultado );

// Array.prototype.map2 = function (callback) {
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     newArray.push(callback(this[i], i, this));
//   }
//   return newArray;
// };
// const carrinho = [
//   '{ "nome": "Borracha", "preco": 3.45}',
//   '{ "nome": "Caderno", "preco": 13.90}',
//   '{ "nome": "Kir de Lapis", "preco": 41.22}',
//   '{ "nome": "Caneta", "preco": 7.50}',
// ];

// const paraObjeto = (json) => JSON.parse(json);
// const valorPreco = (produto) => produto.preco;

// const resultado = carrinho.map2(paraObjeto).map2(valorPreco);
// console.log(resultado);

// const produtos = [
//   { nome: "NoteBook", preco: 2499, fragil: true },
//   { nome: "iPad Pro", preco: 4199, fragil: true },
//   { nome: "Copo de Vidro", preco: 12.49, fragil: true },
//   { nome: "Copo de Plástico", preco: 18.99, fragil: false },
// ];

// console.log(
//   produtos.filter(function (p) {
//     return false;
//   })
// );

// const caro = (produto) => produto.preco >= 500;
// const fragil = (produto) => produto.fragil;

// console.log(produtos.filter(caro).filter(fragil));

// Array.prototype.filter2 = function (callback) {
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       newArray.push(this[i]);
//     }
//   }
// };
// const produtos = [
//   { nome: "NoteBook", preco: 2499, fragil: true },
//   { nome: "iPad Pro", preco: 4199, fragil: true },
//   { nome: "Copo de Vidro", preco: 12.49, fragil: true },
//   { nome: "Copo de Plástico", preco: 18.99, fragil: false },
// ];

// const caro = (produto) => produto.preco >= 500;
// const fragil = (produto) => produto.fragil;

// console.log(produtos.filter(caro).filter(fragil));

// const alunos = [
//   { nome: "João", nota: 7.3, bolsista: false },
//   { nome: "Maria", nota: 9.2, bolsista: true },
//   { nome: "Pedro", nota: 9.8, bolsista: false },
//   { nome: "Ana", nota: 8.7, bolsista: true },
// ];

// console.log(alunos.map((a) => a.nota));
// const resultado = alunos
//   .map((a) => a.nota)
//   .reduce(function (acc, atual) {
//     console.log(acc, atual);
//     return acc + atual;
//   }, 0);

// console.log(resultado);

// const alunos = [
//   { nome: "João", nota: 7.3, bolsista: false },
//   { nome: "Maria", nota: 9.2, bolsista: true },
//   { nome: "Pedro", nota: 9.8, bolsista: false },
//   { nome: "Ana", nota: 8.7, bolsista: true },
// ];

// const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
// console.log(alunos.map((a) => a.bolsista).reduce(todosBolsistas));

// const algumBolsita = (resultado, bolsista) => resultado || bolsista;
// console.log(alunos.map((a) => a.bolsista).reduce(algumBolsita));

// Array.prototype.reduce2 = function (callback) {
//   let acc = this[0];
//   for (let i = 1; i < this.length; i++) {
//     acc = callback(acc, this[i], i, this);
//   }
//   return acc;
// };

// const soma = (total, valor) => total + valor;
// const nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.reduce2(soma));

// const alunos = [
//   { nome: "Joao", nota: 7.9 },
//   { nome: "Maria", nota: 9.2 },
// ];

// //Imperativo
// let total1 = 0;
// for (let i = 0; i < alunos.length; i++) {
//   total1 += alunos[i].nota;
// }
// console.log(total1 / alunos.length);

// //Declarativo
// const getNota = (aluno) => aluno.nota;
// const soma = (total, atual) => total + atual;

// const total2 = alunos.map(getNota).reduce(soma);
// console.log(total2 / alunos.length);

const nums = [1, 2, 3, 4, 5];

const soma = nums.map((a) => {
  return a + 2;
});

console.log(soma, nums);
