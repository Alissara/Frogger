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

export default Car;
