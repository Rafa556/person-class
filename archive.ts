const { email, name: string } = {
  email: "fernandes@gmail.com".toUpperCase(),
  name: "rafael fernandes".toUpperCase(),
};

console.log(`my name is ${name} and my email is ${email}`);

function somar(a, b): number {
  return a + b;
}

const resultado = somar(5, 3);

//----------------------------------------------

const somar1 = (a, b): number => a + b;

const resultado1 = somar1(5, 3);

//----------------------------------------------

const somar2 = function (a: number, b: number): number {
  return a + b;
};

const resultado2 = somar2(5, 3);

console.log(resultado, resultado1, resultado2);

function createPerson(name: string, age: number) {
  const person = [
    {
      name,
      age,
    },
    {
      name,
      age,
    },
  ];

  return person;
}

const person = createPerson("jailson", 23);

console.log(person);

function maiorIdade(idade: number): void {
  if (idade >= 60) {
    console.log("É uma pessoa idosa");
  } else if (idade >= 18) {
    console.log("É maior de idade");
  } else {
    console.log("É menor de idade");
  }
}

maiorIdade(60);

const valor = 10;
valor > 10
  ? console.log("Valor e maior que 10 reais")
  : console.log("Valor e não maior que 10 reais");

const list = [1, "a", 1.2];
const list2 = [1, "a", 1.2];

list2[1] = 2;

const names = ["Rafael", "Filipi"];

const namesUser = names.map((name) => name.toUpperCase());
console.log(namesUser);
