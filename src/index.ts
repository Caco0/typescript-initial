/**Generics */

function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens);
}
const numArray = concatArray<number[]>([1, 3, 6], [8, 2]); // o retorno da concatenação dos arrays é tipado pelo <T> e podendo receber ainda qualquer tipo de array
const stringArray = concatArray<string[]>(
  ["Rafael"],
  ["Fortunato"],
  ["Dametto", "é um rapaz lindo, cheiroso e gostoso!!!"]
);
console.log(numArray);
console.log(stringArray);
