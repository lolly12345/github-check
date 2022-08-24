class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(800, 300, 10, 10,);
    car2 = createSprite(400, 300, 10, 10,);
    car1.addImage(car1_img);
    car2.addImage(car2_img);
    car1.scale = 0.1
    car2.scale = 0.1
    cars = [car1, car2];


  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }


  update(state) {
    database.ref("/").update({
      gameState: state
    })

  }

  play() {
    this.handleElements();
    Player.getPlayersInfo()
    cars = [car1,car2];

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6)
      var index = 0;
      for (var i in allPlayers) {
        index = index + 1

        //use data from database to display the cars
        var x = allPlayers[i].positionX
        var y = allPlayers[i].positionY
        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;
        //console.log(x)

      }
    }



    if (keyIsDown(UP_ARROW)) {
      player.positionY += 10
      player.update();

    }


    drawSprites()

  }
}
