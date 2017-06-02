class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.frog = this.game.frog;
  }

  bindKeyHandlers() {
    const frog = this.frog;

    Object.keys(GameView.MOVES).forEach((k) => {
      let move = GameView.MOVES[k];
      key(k, () => {
        let newX = frog.pos[0] + move[0];
        let newY = frog.pos[1] + move[1];
        if ((newX > 0 && newX < 1200) && (newY > -10 && newY < 630)) {
          frog.pos = [newX, newY];
        }
      });
    });
  }


  start() {
    this.bindKeyHandlers();
    window.setInterval(() => {
      this.game.step();
      this.game.draw(this.ctx);
    }, 20);
  }


}

GameView.MOVES = {
  "up"    : [ 0, -35],
  "left"  : [-35,  0],
  "down"  : [ 0,  35],
  "right" : [ 35,  0],
};

export default GameView;
