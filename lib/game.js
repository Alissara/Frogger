import Car from "./car";
import Frog from "./frog";

class Game {
  constructor() {
    this.cars = [];
    this.frog = {};

    this.addCars();
    this.addFrog();
  }

  addCars() {
    for (let i = 1; i <= 6; i++) {
      let car = new Car({
        pos: [(200 * i), 150],
        radius: 30,
        speed: -5
      });
      this.cars.push(car);
    }

    for (let i = 1; i <= 3; i++) {
      let car = new Car({
        pos: [(400 * i), 250],
        radius: 30,
        speed: -7
      });
      this.cars.push(car);
    }

    for (let i = 1; i <= 2; i++) {
      let car = new Car({
        pos: [(600 * i), 450],
        radius: 30,
        speed: 10
      });
      this.cars.push(car);
    }

    for (let i = 1; i <= 4; i++) {
      let car = new Car({
        pos: [(300 * i), 550],
        radius: 30,
        speed: 2
      });
      this.cars.push(car);
    }
  }

  addFrog() {
    this.frog = new Frog();
    // return frog;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y / 7 * 1);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 100, Game.DIM_X, Game.DIM_Y / 7 * 2);
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 300, Game.DIM_X, Game.DIM_Y / 7 * 1);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 400, Game.DIM_X, Game.DIM_Y / 7 * 2);
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 600, Game.DIM_X, Game.DIM_Y / 7 * 1);

    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.setLineDash([30, 50]);
    ctx.moveTo(0, 200);
    ctx.lineTo(1200, 200);
    ctx.stroke();

    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.setLineDash([30, 50]);
    ctx.moveTo(0, 500);
    ctx.lineTo(1200, 500);
    ctx.stroke();


    this.cars.forEach(car => {
      car.draw(ctx);
    });

    this.frog.draw(ctx);
  }

  moveObjects() {
    this.cars.forEach(car => {
      car.move();
    });
  }

  checkCollisions() {
    this.cars.forEach(car => {
      if (this.frog.isCollidedWith(car)) {
        alert("SPLAT!");
        this.frog.pos = [600, 650];
      }
    });
  }

  checkWin() {
    if (this.frog.pos[1] === 50) {
      alert("You Win");
      this.frog.pos = [600, 650];
    }
  }

  step() {
    this.moveObjects();
    this.checkCollisions();
    this.checkWin();
  }
}

Game.DIM_X = 1200;
Game.DIM_Y = 700;

export default Game;
