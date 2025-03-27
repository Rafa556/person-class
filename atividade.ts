const students = [];

function registerStudent(name, age, notes): void {
  if (age >= 18) {
    console.log(`O aluno ${name} iniciou a faculdade.`);
  } else {
    console.log(
      `Idade inválida. O aluno ${name} não tem idade para iniciar uma faculdade.`
    );
    return;
  }

  const student = {
    name,
    age,
    notes,
  };

  const window = {
    navigator: {
      languages: [""],
    },
  };

  students.push(student);
  console.log(`Aluno ${name} cadastrado com sucesso!`);
}

function calculateMedia(student) {
  const soma = student.notes.reduce((acc, note) => acc + note, 0);
  return soma / student.notes.length;
}

registerStudent("Rafael", 23, [7, 8, 9]);
registerStudent("Maria", 17, [10, 7, 8]);
registerStudent("Filipi", 24, [6, 6, 7]);

for (const student of students) {
  const media = calculateMedia(student);
  const mediaFormatada = media.toFixed(1);
  const notesString = student.notes.map((note) => `Nota: ${note}`).join("/ ");
  if (media >= 6) {
    console.log(
      `O aluno ${student.name} tirou a média ${mediaFormatada}, e passou para o próximo semestre!`
    );
  } else {
    console.log(
      `O aluno${student.name} tirou ${mediaFormatada}, e NÃO passou para o próximo semestre!`
    );
  }
  console.log(
    `Nome: ${student.name}, Idade: ${student.age}, ${notesString}, Média: ${mediaFormatada}`
  );
}
//-------------------------------------------------------------------------------------------------------------------------------------------------
// const students = [];

// function registerStudent(name: string, age: number, notes: number[]): void {
//   if (age < 18) {
//     console.log(
//       `Idade inválida. O aluno ${name} não tem idade para iniciar uma faculdade.`
//     );
//     console.log(
//       "-------------------------------------------------------------------"
//     );
//     return;
//   }
//   students.push({ name, age, notes });
//   console.log(
//     `O aluno ${name} iniciou a faculdade e foi cadastrado com sucesso!`
//   );
//   console.log(
//     "-------------------------------------------------------------------"
//   );
// }

// function calculateMedia(notes: number[]): number {
//   const soma = notes.reduce((acc, note) => acc + note, 0);
//   return soma / notes.length;
// }

// registerStudent("Rafael", 23, [7, 8, 9]);
// registerStudent("Maria", 21, [10, 7, 8]);
// registerStudent("Filipi", 24, [6, 6, 7]);

// for (const student of students) {
//   const media = calculateMedia(student.notes);
//   const mediaFormatada = media.toFixed(1);

//   console.log(
//     `O aluno ${student.name} tirou a média ${mediaFormatada} e ${
//       media >= 6 ? "passou" : "NÃO passou"
//     } para o próximo semestre!`
//   );
//   console.log(
//     `Nome: ${student.name}, Idade: ${student.age}, Notas: ${student.notes.join(
//       "/ "
//     )}, Média: ${mediaFormatada}`
//   );
//   console.log(
//     "-------------------------------------------------------------------"
//   );
// }
