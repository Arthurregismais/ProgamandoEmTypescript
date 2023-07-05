// Boolean
var verdade = true;
var mentira = false;
// Number
var preco = 38.70;
// String
var nome = 'Arthur';
// Template
console.log("Ol\u00E1 meu nome \u00E9 ".concat(nome));
// Arrays
var frutas = ['Banana', 'Maça'];
var UmeDois = [9, 8, 7, 6, 5, 4];
// Tuplas
var alunoEidade = ['Fulano', 23];
// Enum
var Cores;
(function (Cores) {
    Cores[Cores["Verde"] = 0] = "Verde";
    Cores[Cores["Amarelo"] = 1] = "Amarelo";
    Cores[Cores["Azul"] = 2] = "Azul";
})(Cores || (Cores = {}));
;
var cor = Cores.Azul;
// Any
var qualquer = 'qualquer';
qualquer = 5;
qualquer = true;
// void
function alerta() {
    // alert('Operação não permitida');
}
//null e undefined
var u;
var n;
// Null e undefined são subtipos dos outros tipos
nome = null;
alunoEidade = undefined;
