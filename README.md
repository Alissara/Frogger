## Frogger

[Frogger Live][link]

[link]: https://alissara.github.io/Frogger/

### Background

Frogger is an arcade game developed in 1981 by Konami. The objective of the game is to navigate frogs safely across a busy road without being hit by a motor vehicle.

### How to play

Use the arrow keys to move the frog around. Try to get the frog to the other side of the road.

### Technologies

- JavaScript is used for overall structure and game logic
- `HTML5 Canvas` for DOM manipulation, rendering, and animations.
- `Keymaster.js` to set arrow keys for player movement
- Webpack to bundle and serve up the various components.

### Technical implementation

Implemented `requestAnimationFrame` to update the animation on the screen.

```javascript
start() {
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
```

### Future features

- Multiple levels
- Multiple frog lives
- Frog homes
