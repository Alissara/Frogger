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
    this.addCarsInLane(6, 200, 80, -5);
    this.addCarsInLane(3, 400, 150, -7);
    this.addCarsInLane(2, 600, 220, -10);

    this.addCarsInLane(4, 300, 360, 2);
    this.addCarsInLane(2, 600, 430, 10);
    this.addCarsInLane(4, 300, 500, 5);
  }

  addCarsInLane(numCar, spaceBw, yLane, speed) {
    for (let i = 1; i <= numCar; i++) {
      let car = new Car({
        pos: [(spaceBw * i), yLane],
        radius: 25,
        speed: speed
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

    ctx.fillStyle = '#abb8ce';
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y / 9 * 1);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 70, Game.DIM_X, Game.DIM_Y / 9 * 3);
    ctx.fillStyle = '#abb8ce';
    ctx.fillRect(0, 280, Game.DIM_X, Game.DIM_Y / 9 * 1);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 350, Game.DIM_X, Game.DIM_Y / 9 * 3);
    ctx.fillStyle = '#abb8ce';
    ctx.fillRect(0, 560, Game.DIM_X, Game.DIM_Y / 9 * 1);

    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.setLineDash([30, 50]);
    ctx.moveTo(0, 140);
    ctx.lineTo(1200, 140);
    ctx.stroke();

    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.setLineDash([30, 50]);
    ctx.moveTo(0, 210);
    ctx.lineTo(1200, 210);
    ctx.stroke();

    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.setLineDash([30, 50]);
    ctx.moveTo(0, 420);
    ctx.lineTo(1200, 420);
    ctx.stroke();

    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.setLineDash([30, 50]);
    ctx.moveTo(0, 490);
    ctx.lineTo(1200, 490);
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

    var modalWin = document.getElementById('myModal-win');
    if (this.frog.isCollidedWith(car) && modalWin.style.display !== 'block') {

      var modal = document.getElementById('myModal');
      var span = document.getElementsByClassName("close")[0];
      modal.style.display = "block";
      span.onclick = () => {
          modal.style.display = "none";
          this.frog.pos = [560, 560];
      };
      window.onclick = (event) => {
          if (event.target === modal) {
              modal.style.display = "none";
              this.frog.pos = [560, 560];
          }
      };
    }
    });
  }

  checkWin() {
    var modalCol = document.getElementById('myModal');
    if (this.frog.pos[1] < 35 && modalCol.style.display !== 'block') {

      var modal = document.getElementById('myModal-win');
      var span = document.getElementsByClassName("close-win")[0];
      modal.style.display = "block";
      span.onclick = () => {
          modal.style.display = "none";
          this.frog.pos = [560, 560];
      };
      window.onclick = (event) => {
          if (event.target === modal) {
              modal.style.display = "none";
              this.frog.pos = [600, 595];
          }
      };
    }
  }

  step() {
    this.moveObjects();
    this.checkCollisions();
    this.checkWin();
  }
}

Game.DIM_X = 1200;
Game.DIM_Y = 630;

export default Game;
