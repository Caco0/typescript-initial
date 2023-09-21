/**
 * Decorators
 */

function apiVersion(version: any) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version });
  };
}

function minLength(length: number) {
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => "[Api]-> " + _value;
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(
          `Nome da Api muito pequeno, ${length} é a quantidade mínima de caracteres!`
        );
      } else {
        _value = value;
      }
    };
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}
// Atribute Decorator

class Api {
  @minLength(5)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const api = new Api("Usuário");
console.log(api.name);
