/**Generics */

function concatArray(...itens: any[]): any[] {
  return new Array().concat(...itens);
}
const numArray = concatArray([1, 3, 6], [8, 2]);

const stringArray = concatArray(
  ["Rafael"],
  ["Fortunato"],
  ["Dametto", "é um rapaz lindo, cheiroso e gostoso!!!"]
);
console.log(numArray);
console.log(stringArray);
