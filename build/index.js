"use strict";
// interfaces (type x interface)
var bot1 = {
    id: "1",
    name: "Jaspion",
};
var bot2 = {
    id: "1",
    name: "Jaspion",
    sayHello: function () {
        throw new Error("Function not implemented.");
    },
};
// console.log(bot1, bot2);
var Pessoa = /** @class */ (function () {
    function Pessoa(id, name) {
        this.id = id;
        this.name = name;
    }
    Pessoa.prototype.sayHello = function () {
        return "I am ".concat(this.name, " e meu ID \u00E9 ").concat(this.id);
    };
    return Pessoa;
}());
var p = new Pessoa(1, "Wolverine");
console.log(p.sayHello());
