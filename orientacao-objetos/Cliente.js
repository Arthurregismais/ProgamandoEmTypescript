var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1 meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " de idade");
    };
    return Cliente;
}());
var francisco = new Cliente("Francisco", 20);
var apresentacao = francisco.apresentar();
console.log(apresentacao);
var roberval = new Cliente("Roberval", 39);
console.log(roberval.apresentar());
