"use strict";
var Character = /** @class */ (function () {
    function Character(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    Character.prototype.attack = function () {
        console.log("Attack with strength ".concat(this.strength, " fire power"));
    };
    return Character;
}());
var p1 = new Character("Forceps", 10, 98);
console.log(p1);
p1.attack();
