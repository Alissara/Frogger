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

export default Frog;
