class Game {
  constructor() { }

  start() {
    // INCLUA A CLASSE DO JOGO
    form = new Form()
    form.display()
    player = new Player();
    playerCount = player.getCount()
    car1 = createSprite(width / 2 - 50, height - 100)
    car1.addImage("car1", car1_Img)
    car1.scale = 0.07
    car2 = createSprite(width / 2 + 100, height - 100)
    car2.addImage("car2", car2_Img)
    car2.scale = 0.07
    cars = [car1, car2]



  }
  getState() {
    database.ref("gameState").on("value", function (data) {
      gameState = data.val()
    })
  }
  updateState(state) {
    database.ref("/").update({
      gameState: state
    }
    )
  }
  play() {
    // this.handleElements()
    drawSprites()
  }
}
