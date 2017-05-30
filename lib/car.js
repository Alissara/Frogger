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

module.exports = Car;
