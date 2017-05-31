class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  start() {
    window.setInterval(() => {
      this.game.moveObjects();
      this.game.draw(this.ctx);
    }, 20);
  }


}

GameView.MOVES = {
  "up"    : [ 0, -100],
  "left"  : [-100,  0],
  "down"  : [ 0,  100],
  "right" : [ 100,  0],
};

export default GameView;
