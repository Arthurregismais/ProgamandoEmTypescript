class Cliente {

    nome: string;
    idade: number;

    constructor (nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} de idade`
    }
    
}

let francisco: Cliente = new Cliente("Francisco", 20);
let apresentacao = francisco.apresentar();

console.log(apresentacao);

let roberval: Cliente = new Cliente("Roberval", 39);
console.log(roberval.apresentar());