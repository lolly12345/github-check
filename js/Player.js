class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;
    console.log(playerIndex);
    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    });
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
      console.log(playerCount);

    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  update() {
    console.log(this.index);
    var playerIndex = 'players/player' + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY

    })
    console.log(this.positionY)

  }

  static getPlayersInfo() {
    var playerinfoRef= database.ref('players');
    playerinfoRef.on('value', data => {
      allPlayers = data.val();
    //  console.log(allPlayers)
      

    })

   }
 

}
