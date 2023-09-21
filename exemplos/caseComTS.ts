import { type } from "os";

type Hero = {
  nome: string;
  vulgo: string;
  telefone: number;
};

function ligarPara(heroi: Hero): string {
  return "Ligando para: " + heroi.telefone;
}

ligarPara({
  nome: "Rafael",
  vulgo: "Batman",
  telefone: 34524807,
});

//Tipos de Variáveis------------------------

//primitivos
let ligado: boolean = false;
let nome: string = "Rafael";
let idade: number = 25;
let altura: number = 1.65;

//especiais
let nulo: null = null;
let indefinito: undefined = undefined;

// abrangentes
let qualquer: any = "oi"; // recebe qualquer entrada -> string, number, boolean, null, undefined, void
let vazio: void;

//objeto -> sem previsibilidade
let produto: object = {
  name: "Rafael",
  cidade: "Limeira",
  idade: 25,
  altura: 1.65,
};

//objeto tipado -> com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};
let meuProduto: ProdutoLoja = {
  nome: "TÊNIS",
  preco: 100.5,
  unidades: 10,
};
// arrays ----------------------------------------------

let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nomes: string[] = ["Rafael", "João", "Maria"];
let alunos: Hero[] = [
  {
    nome: "Rafael",
    vulgo: "Batman",
    telefone: 34524807,
  },
  {
    nome: "João",
    vulgo: "Spiderman",
    telefone: 34524807,
  },
  {
    nome: "Maria",
    vulgo: "Flash",
    telefone: 34524807,
  },
];
let dados: Array<string> = ["Felipe", "Rafael", "Elias"];

let infos: (string | number)[] = ["Felipe", 2, "Maria"];

/**
 * TUPLAS
 */

let boleto: [string, number, boolean] = ["Conta de água", 200, true];

/**
 * Data
 */
let aniversario: Date = new Date("2023-09-02 03:00");
console.log(aniversario.toString());

/**
 * Data
 */
let aniversario: Date = new Date("2023-09-02 03:00");
// console.log(aniversario.toString());

// /**
//  * Funções
//  */

function somar(a: number, b: number): number {
  return a + b;
}
function addTohello(name: string): string {
  return `Hello ${name}`;
}

let calculo: number = somar(4, 7);

function callToPhone(phone: number | string): number | string {
  return phone;
}

async function getDataBase(id: number): Promise<string> {
  return "Rafael";
}

console.log(callToPhone("19974096150"));

// interfaces (type x interface)

type robot = {
  readonly id: number | string;
  name: string;
};

interface robot2 {
  readonly id: number | string;
  name: string;
  sayHello(): string;
}

const bot1: robot = {
  id: "1",
  name: "Jaspion",
};
const bot2: robot2 = {
  id: "1",
  name: "Jaspion",
  sayHello: function (): string {
    throw new Error("Function not implemented.");
  },
};
// console.log(bot1, bot2);
class Pessoa implements robot2 {
  id: string | number;
  name: string;
  constructor(id: number | number, name: string) {
    this.id = id;
    this.name = name;
  }
  sayHello(): string {
    return `I am ${this.name} e meu ID é ${this.id}`;
  }
}
const p = new Pessoa(1, "Wolverine");
console.log(p.sayHello());

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

// Sub Classe
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

/**Generics */

// o retorno da concatenação dos arrays é tipado pelo <T> e podendo receber ainda qualquer tipo de array
function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens);
}
const numArray = concatArray<number[]>([1, 3, 6], [8, 2]);
const stringArray = concatArray<string[]>(
  ["Rafael"],
  ["Fortunato"],
  ["Dametto", "é um rapaz lindo, cheiroso e gostoso!!!"]
);
console.log(numArray);
console.log(stringArray);
