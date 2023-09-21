/**
 * Data Modifiers --------------------------------------------
 * public -> todos acessam
 * private -> somente a classe dele tem acesso
 * protected -> a classe e todas subclasses tem acesso
 */

//Character Class
class Character {
  protected name: string;
  strength: number;
  skill: number;
  //Construtor for Character class
  constructor(name: string, strength: number, skill: number) {
    this.name = name;
    this.strength = strength;
    this.skill = skill;
  }
  // Attack Method
  attack(): void {
    console.log(
      `Attack with strength ${this.strength} Fire Power ${this.skill} points`
    );
  }
}

/**
 * Herança de Classes
 */

class SuperHero extends Character {
  powerMultiplier: number;

  constructor(
    name: string,
    strength: number,
    skill: number,
    powerMultiplier: number
  ) {
    super(name, strength, skill);
    this.powerMultiplier = powerMultiplier;
  }
}
const p1 = new Character("Forceps", 10, 98);
const p2 = new SuperHero("Tijolo", 10, 50, 2);
console.log(p1);
p1.attack();
