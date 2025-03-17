class celular {
  constructor() {
    this.cor = "prataz"
  }

  ligar() {
    console.log("uma ligação")
    return 'ligando'
  }
}

let objeto = new celular();

console.log(objeto.ligar())