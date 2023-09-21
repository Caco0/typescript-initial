class Character {
  name: string;
  strength: number;
  skill: number;
  constructor(name: string, strength: number, skill: number) {
    this.name = name;
    this.strength = strength;
    this.skill = skill;
  }

  attack(): void {
    console.log(`Attack with strength ${this.strength} fire power`);
  }
}

const p1 = new Character("Forceps", 10, 98);
console.log(p1);
p1.attack();
