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
        if ((newX > 0 && newX < 1200) && (newY > 0 && newY < 700)) {
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
  "up"    : [ 0, -50],
  "left"  : [-50,  0],
  "down"  : [ 0,  50],
  "right" : [ 50,  0],
};

export default GameView;
