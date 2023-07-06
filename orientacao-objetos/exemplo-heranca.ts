class politico {

    nome: string;
    salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    declararImpostoDeRenda (taxa: number = 10){
        console.log(`Eu ${this.nome} paguei ${this.salario * taxa /100} de imposto de renda`);
    }
}

class senador extends politico {
    
    declararImpostoDeRenda(taxa: number = 14) {
        console.log('Senador paga mais imposto de renda!');
        super.declararImpostoDeRenda();
    }
}

let Flavio = new politico('Flavio Dino', 14000);
Flavio.declararImpostoDeRenda();

let Alan = new senador('Alan Rick', 20000);
Alan.declararImpostoDeRenda();