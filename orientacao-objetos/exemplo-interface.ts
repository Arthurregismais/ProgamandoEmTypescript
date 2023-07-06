interface Fruta {
    nome: string;
    tamanho?: string;
    preco: number;
}

function ImprimirPreco (fruta: Fruta){
    console.log(fruta.preco);
}

let abacaxi = {nome:'Abacaxi', preco: 5.4};
ImprimirPreco(abacaxi);

let melancia = {nome:'Melancia', tamanho: 'Grande', preco: 9.3};
ImprimirPreco(melancia);