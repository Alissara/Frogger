class Car {
  constructor(options) {
    this.pos = options.pos;
    this.speed = 5;
    this.color = 'blue';
    this.radius = 25;
    // this.width = options.width;
    // this.height = options.height;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.fill();
  }

  move() {
    this.pos = [this.pos[0] + this.speed, this.pos[1]];

    if (this.pos[0] >= 1000) {
      this.pos = [0, this.pos[1]];
    }
  }
}

export default Car;
