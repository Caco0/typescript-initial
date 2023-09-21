"use strict";
/**
 * Data Modifiers --------------------------------------------
 * public -> todos acessam
 * private -> somente a classe dele tem acesso
 * protected -> a classe e todas subclasses tem acesso
 */
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
//Character Class
var Character = /** @class */ (function () {
    //Construtor for Character class
    function Character(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    // Attack Method
    Character.prototype.attack = function () {
        console.log("Attack with strength ".concat(this.strength, " Fire Power ").concat(this.skill, " points"));
    };
    return Character;
}());
/**
 * Herança de Classes
 */
var SuperHero = /** @class */ (function (_super) {
    __extends(SuperHero, _super);
    function SuperHero(name, strength, skill, powerMultiplier) {
        var _this = _super.call(this, name, strength, skill) || this;
        _this.powerMultiplier = powerMultiplier;
        return _this;
    }
    return SuperHero;
}(Character));
var p1 = new Character("Forceps", 10, 98);
var p2 = new SuperHero("Tijolo", 10, 50, 2);
console.log(p1);
p1.attack();
p2.attack();
