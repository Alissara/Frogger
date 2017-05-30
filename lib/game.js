import Car from './car';

Game.BG_COLOR = "black";
Game.DIM_X = 1000;
Game.DIM_Y = 600;

class Game {
  constructor() {
    this.cars = [];

    this.addCars();
  }

  addCars() {
    let car = new Car({ pos: [500, 300] });
    this.cars.push(car);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.cars.forEach(car => {
      car.draw(ctx);
    });
  }

  moveObjects() {
    this.cars.forEach(car => {
      car.move();
    });
  }

}

export default Game;
