class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.frog = this.game.frog;
    this.lastTime = 0;
  }

  bindKeyHandlers() {
    const frog = this.frog;

    Object.keys(GameView.MOVES).forEach((k) => {
      let move = GameView.MOVES[k];
      key(k, () => {
        let newX = frog.pos[0] + move[0];
        let newY = frog.pos[1] + move[1];
        if ((newX > 0 && newX < 1120) && (newY > -10 && newY < 565)) {
          frog.pos = [newX, newY];
        }
      });
    });
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }
}

GameView.MOVES = {
  "up"    : [ 0, -35],
  "left"  : [-35,  0],
  "down"  : [ 0,  35],
  "right" : [ 35,  0],
};

export default GameView;
