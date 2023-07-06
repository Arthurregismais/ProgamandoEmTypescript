var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var politico = /** @class */ (function () {
    function politico(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    politico.prototype.declararImpostoDeRenda = function (taxa) {
        if (taxa === void 0) { taxa = 10; }
        console.log("Eu ".concat(this.nome, " paguei ").concat(this.salario * taxa / 100, " de imposto de renda"));
    };
    return politico;
}());
var senador = /** @class */ (function (_super) {
    __extends(senador, _super);
    function senador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    senador.prototype.declararImpostoDeRenda = function (taxa) {
        if (taxa === void 0) { taxa = 14; }
        console.log('Senador paga mais imposto de renda!');
        _super.prototype.declararImpostoDeRenda.call(this);
    };
    return senador;
}(politico));
var Flavio = new politico('Flavio Dino', 14000);
Flavio.declararImpostoDeRenda();
var Alan = new senador('Alan Rick', 20000);
Alan.declararImpostoDeRenda();
