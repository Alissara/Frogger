/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__car__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frog__ = __webpack_require__(5);



class Game {
  constructor() {
    this.cars = [];
    this.frog = {};

    this.addCars();
    this.addFrog();
  }

  addCars() {
    this.addCarsInLane(5, 240, 80, -4, 1);
    this.addCarsInLane(3, 400, 150, -7, 2);
    this.addCarsInLane(4, 300, 220, -10, 3);

    this.addCarsInLane(5, 300, 360, 3, 4);
    this.addCarsInLane(2, 600, 430, 10, 1);
    this.addCarsInLane(3, 350, 500, 5, 5);
  }

  addCarsInLane(numCar, spaceBw, yLane, speed, color) {
    for (let i = 1; i <= numCar; i++) {
      let car = new __WEBPACK_IMPORTED_MODULE_0__car__["a" /* default */]({
        pos: [(spaceBw * i), yLane],
        speed: speed,
        color: color
      });
      this.cars.push(car);
    }
  }

  addFrog() {
    this.frog = new __WEBPACK_IMPORTED_MODULE_1__frog__["a" /* default */]();
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

    this.drawLineDash(ctx, 140);
    this.drawLineDash(ctx, 210);
    this.drawLineDash(ctx, 420);
    this.drawLineDash(ctx, 490);


    this.cars.forEach(car => {
      car.draw(ctx);
    });

    this.frog.draw(ctx);
  }

  drawLineDash(ctx, yLane) {
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.setLineDash([30, 50]);
    ctx.moveTo(0, yLane);
    ctx.lineTo(1200, yLane);
    ctx.stroke();
  }

  moveObjects(delta) {
    this.cars.forEach(car => {
      car.move(delta);
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

  step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
    this.checkWin();
  }
}

Game.DIM_X = 1200;
Game.DIM_Y = 630;

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (GameView);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Car {
  constructor(options) {
    this.pos = options.pos;
    this.speed = options.speed;
    this.color = options.color;
    this.radius = 25;
  }

  draw(ctx) {
    const img = new Image();
    img.src = `assets/car${this.color}.png`;
    ctx.drawImage(img, this.pos[0], this.pos[1], 60, 60);
  }

  move(timeDelta) {
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offsetX = this.speed * velocityScale;
    this.pos = [this.pos[0] + offsetX, this.pos[1]];

    let w = 1200;
    if (this.pos[0] >= w) {
      this.pos = [-50, this.pos[1]];
    }
    else if (this.pos[0] < -50) {
      this.pos = [w, this.pos[1]];
    }
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000/60;

/* harmony default export */ __webpack_exports__["a"] = (Car);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_view__ = __webpack_require__(1);



document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */].DIM_X;
  canvasEl.height = __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */].DIM_Y;

  const ctx = canvasEl.getContext("2d");
  const game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */]();
  new __WEBPACK_IMPORTED_MODULE_1__game_view__["a" /* default */](game, ctx).start();
});


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Frog {
  constructor() {
    this.pos = [560, 560];
    this.radius = 25;
  }

  draw(ctx) {
    const img = new Image();
    img.src = "assets/frog.png";
    ctx.drawImage(img, this.pos[0], this.pos[1], 80, 80);
  }

  isCollidedWith(carObject) {
    let radiiSum = this.radius + carObject.radius;
    let x_1 = this.pos[0] + 30;
    let y_1 = this.pos[1] + 30;
    let x_2 = carObject.pos[0] + 30;
    let y_2 = carObject.pos[1] + 30;
    let dist = Math.sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2);
    return dist < radiiSum;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Frog);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map