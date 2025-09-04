import animaisData from './animais.json';

class AbrigoAnimais {

  constructor() {
    //trazendo os animais do json
    this.animais = animaisData; //loco nao se importa
    this.brinquedosValidos = ["RATO", "BOLA", "LASER", "CAIXA", "NOVELO", "SKATE"];
  }


  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {

    //separando por virgula
    const pessoa1 = brinquedosPessoa1.split(',').map((e) => e.trim().toUpperCase());
    const pessoa2 = brinquedosPessoa2.split(',').map((e) => e.trim().toUpperCase());
    
    const listaAnimais = this.ordemAnimais.split(',').map((a) => a.trim());

  }
}

export { AbrigoAnimais as AbrigoAnimais };
