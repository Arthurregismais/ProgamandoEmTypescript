const idades = [20, 17, 14, 2];

const mostrarIdade = idades.map(idade => 'Tenho ' + idade + ' anos de vida');
console.log(mostrarIdade);

const maiorIdade = idades
    .filter(idade => idade >= 18)
    .map(idade => 'Tenho ' + idade + ' anos de vida e sou maior de idade');
console.log(maiorIdade);