declare class Character {
    name: string;
    strength: number;
    skill: number;
    constructor(name: string, strength: number, skill: number);
    attack(): void;
}
declare const p1: Character;
