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
