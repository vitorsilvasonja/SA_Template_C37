class Form {
  constructor() {
    // CRIE OS ELEMENTOS DA CLASSE
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome: ")
    this.playButton = createButton("Jogar")
    this.title = createImg("../assets/title.png", "Título do jogo")
    this.greeting = createElement("h2")
  }

  setElementPosition() {
    // DEFINA A POSIÇÃO DOS ELEMENTOS
    this.input.position(width / 2 - 110, height / 2 - 80)
    this.playButton.position(width / 2 - 90, height / 2 - 20)
    this.title.position(120, 0)
    this.greeting.position(width / 2 - 300, height / 2 - 80)

    this.input.class("customInput")
    this.playButton.class("customButton")
    this.title.class("gameTitle")
    this.greeting.class("greeting")
  }


  hide() {
    // USE A FUNÇÃO PARA DESAPARECER OS ELEMENTOS
    this.input.hide()
    this.playButton.hide()
  }

  handleMousePressed() {
    // CRIE A FUNÇÃO DE PRESSIONAMENTO DE TECLA
    this.playButton.mousePressed(() => {
      this.input.hide()
      this.playButton.hide()
      var message = `Olá ${this.input.value()} <br> Aguarde os outros jogadores...`
      this.greeting.html(message)
      playerCount += 1
      player.name = this.input.value()
      player.index = playerCount
      player.updateCount(playerCount)
    })

    /* O símbolo usado para escrever a mensagem abaixo (laranja) é a crase. */
  }

  display() {
    // CHAME A FUNÇÃO DE POSIÇÃO DOS ELEMENTOS
    this.setElementPosition()
    // CHAME A FUNÇÃO DE PRESSIONAMENTO DE TECLA
    this.handleMousePressed()
  }
}