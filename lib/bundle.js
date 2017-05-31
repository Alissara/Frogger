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
    for (let i = 1; i <= 6; i++) {
      let car = new __WEBPACK_IMPORTED_MODULE_0__car__["a" /* default */]({
        pos: [(200 * i), 150],
        radius: 30,
        speed: -5
      });
      this.cars.push(car);
    }

    for (let i = 1; i <= 3; i++) {
      let car = new __WEBPACK_IMPORTED_MODULE_0__car__["a" /* default */]({
        pos: [(400 * i), 250],
        radius: 30,
        speed: -7
      });
      this.cars.push(car);
    }

    for (let i = 1; i <= 2; i++) {
      let car = new __WEBPACK_IMPORTED_MODULE_0__car__["a" /* default */]({
        pos: [(600 * i), 450],
        radius: 30,
        speed: 10
      });
      this.cars.push(car);
    }

    for (let i = 1; i <= 4; i++) {
      let car = new __WEBPACK_IMPORTED_MODULE_0__car__["a" /* default */]({
        pos: [(300 * i), 550],
        radius: 30,
        speed: 2
      });
      this.cars.push(car);
    }
  }

  addFrog() {
    const frog = new __WEBPACK_IMPORTED_MODULE_1__frog__["a" /* default */]();
    this.frog = frog;
    return frog;
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

}

Game.BG_COLOR = "black";
Game.DIM_X = 1200;
Game.DIM_Y = 700;

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.frog = this.game.addFrog();
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
      this.game.moveObjects();
      this.game.draw(this.ctx);
    }, 20);
  }


}

GameView.MOVES = {
  "up"    : [ 0, -100],
  "left"  : [-50,  0],
  "down"  : [ 0,  100],
  "right" : [ 50,  0],
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
    this.color = 'blue';
    this.radius = options.radius;
    // this.width = options.width;
    // this.height = options.height;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.fill();

    // ctx.fillRect(this.pos[0], this.pos[1], this.radius, this.radius);
  }

  move() {
    this.pos = [this.pos[0] + this.speed, this.pos[1]];
    let w = 1200;

    if (this.pos[0] >= w) {
      this.pos = [0, this.pos[1]];
    }
    if (this.pos[0] < 0) {
      this.pos = [w, this.pos[1]];
    }

  }
}

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
    this.pos = [600, 650];
    this.color = 'green';
    this.radius = 30;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.fill();

    // ctx.fillRect(this.pos[0], this.pos[1], this.radius, this.radius);
  }

  
}

/* harmony default export */ __webpack_exports__["a"] = (Frog);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map