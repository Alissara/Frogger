class Frog {
  constructor() {
    this.pos = [600, 595];
    this.color = 'green';
    this.radius = 25;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.fill();

    // ctx.fillRect(this.pos[0], this.pos[1], this.radius, this.radius);
  }

  isCollidedWith(carObject) {
    let radiiSum = this.radius + carObject.radius - 5;
    let x_1 = this.pos[0];
    let y_1 = this.pos[1];
    let x_2 = carObject.pos[0];
    let y_2 = carObject.pos[1];
    let dist = Math.sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2);
    return dist < radiiSum;
  }


}

export default Frog;
