/**
 * Data Modifiers --------------------------------------------
 * public -> todos acessam
 * private -> somente a classe dele tem acesso
 * protected -> a classe e todas subclasses tem acesso
 */
declare class Character {
    protected name: string;
    strength: number;
    skill: number;
    constructor(name: string, strength: number, skill: number);
    attack(): void;
}
/**
 * Herança de Classes
 */
declare class SuperHero extends Character {
    powerMultiplier: number;
    constructor(name: string, strength: number, skill: number, powerMultiplier: number);
}
declare const p1: Character;
declare const p2: SuperHero;
