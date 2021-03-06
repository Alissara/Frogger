import Game from "./game";
import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");

  // const startOrReset = () => {
    const game = new Game();
    new GameView(game, ctx).start();
  // };

  // key("space", startOrReset);

});
