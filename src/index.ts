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
