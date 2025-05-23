class Person {
  /*Classe*/

  private name: string; /*Private: só pode ser usado dentro da classe */
  private currentAge: number;

  create(name: string, age: number): string {
    /*Parametros dentro dos () / Tipagem do método "Void", pois não retorna um valor */
    this.name = name;
    this.currentAge = age;

    const messageUpper = this.toUpperCase(name);
    const birthYear = this.calculateBirthDate(age);

    const result = `Name: ${messageUpper}, Birth Year: ${birthYear}, Age: ${age}`;
    return result;
  }

  getYearOfAge(age: number): string {
    const currentYear = new Date().getFullYear();
    const targetYear = currentYear + (age - this.currentAge);

    const messageUpper = this.toUpperCase(this.name);
    const result = `Name: ${messageUpper}, New Birth Year: ${age}, in the year ${targetYear}`;
    return result;
  }

  calculateBirthDate(age: number): number {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    return year - age;
  }

  toUpperCase(input: string): string {
    return input.toUpperCase();
  }
}

function main() {
  const person = new Person();
  const result = person.create("Rafael", 23).toUpperCase;
  const yearOfAge = person.getYearOfAge(28);

  const person2 = {
    name: "Rafael".toUpperCase,
    age: 23,
    create(input: string) {
      const name = input.toUpperCase();
      return name;
    },
    info: {
      height: 1.75,
      weight: 80,
      details: {},
    },
    carrer: {
        companies: [{
            name: "GFT-Brasil",
            position: "Tester",
            duration: 0.6,
        },
        {
            name: "Itaú-Unibanco",
            position: "Analista de Sistema",
            duration: 2,
        },
        {
            name: "Taranto",
            position: "almoxarifado",
            duration: 10,
        },
        {
            name: "Field Control",
            position: "Analista de qualidade",
            duration: 0.8,
        },
    ]
    }
  };

  console.log(person);
  //console.log(person2.create("Rafael"));
  console.log(person2.info.height);
  console.log(person2.carrer.companies);
}