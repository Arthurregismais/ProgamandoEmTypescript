const numeros = [2,5,8,1,6, 9];

const pares = numeros.filter(numero => numero % 2 === 0)
    .map(numero => `Sou o ${numero} e sou um número par`);

const impares = numeros.filter(numero => numero %2 !==0)
    .map(numero => `Sou o ${numero} e sou um número ímpar` );

console.log(pares);
console.log(impares);