type robot = {
    readonly id: number | string;
    name: string;
};
interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}
declare const bot1: robot;
declare const bot2: robot2;
declare class Pessoa implements robot2 {
    id: string | number;
    name: string;
    constructor(id: number | number, name: string);
    sayHello(): string;
}
declare const p: Pessoa;
