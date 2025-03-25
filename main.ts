class Person { /*Classe*/

    private name: string;/*Private: só pode ser usado dentro da classe */
    private currentAge: number;

    create(name: string, age: number): void { /*Parametros dentro dos () / Tipagem do método "Void", pois não retorna um valor */
        this.name = name;
        this.currentAge = age;

        const messageUpper = this.upperMessage(name);
        const birthYear = this.calculateBirthDate(age);

        const result = `Name: ${messageUpper}, Birth Year: ${birthYear}, Age: ${age}`;
        console.log(result);
    }

    updateAge(newAge: number): void {
        const currentYear = new Date().getFullYear();
        const targetYear = currentYear + (newAge - this.currentAge);

        this.currentAge = newAge;

        const messageUpper = this.upperMessage(this.name);
        const result = `Name: ${messageUpper}, New Birth Year: ${newAge}, in the year ${targetYear}`;
        console.log(result);
    }

    calculateBirthDate(age: number): number {
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        return year - age;

    }

    upperMessage(message: string): string {
        return message.toUpperCase();
    }
}

function main() {
    const person = new Person();
    person.create("Rafael", 23);

    person.updateAge(24);
}

main();