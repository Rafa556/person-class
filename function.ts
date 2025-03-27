function criaContador() {
  let contador = 0; // variável privada

  return function () {
    contador++; // incrementa o contador
    return contador; // retorna o valor atual do contador
  };
}

const contador1 = criaContador();
console.log(contador1()); // Saída: 1
console.log(contador1()); // Saída: 2

const contador2 = criaContador();
console.log(contador2()); // Saída: 1 (contagem separada do contador1)
