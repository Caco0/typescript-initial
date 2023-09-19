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
