class Frog {
  constructor() {
    this.pos = [560, 560];
    this.color = 'green';
    this.radius = 25;
  }

  draw(ctx) {
    // ctx.fillStyle = this.color;
    // ctx.beginPath();
    // ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    // ctx.fill();

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

export default Frog;
