type Hero = {
  name: string;
  vulgo: string;
};

function printObjeto(pessoa: Hero) {
  console.log(pessoa);
}

printObjeto({ name: "Rafael Dametto", vulgo: "Batman" });
