// Boolean
let verdade: boolean = true;
let mentira: boolean = false;

// Number
let preco: number = 38.70;

// String
let nome: string = 'Arthur';

// Template
console.log(`Olá meu nome é ${nome}`);

// Arrays
let frutas: string[] = ['Banana', 'Maça'];
let UmeDois: number[] = [9,8,7,6,5,4];

// Tuplas
let alunoEidade: [string, number] = ['Fulano', 23];

// Enum
enum Cores {'Verde', 'Amarelo', 'Azul'};
let cor: Cores = Cores.Azul;

// Any
let qualquer: any = 'qualquer';
qualquer = 5;
qualquer = true;


// void
function alerta(): void{
    // alert('Operação não permitida');
}

//null e undefined
let u: undefined;
let n: null;

// Null e undefined são subtipos dos outros tipos

nome = null;
alunoEidade = undefined;