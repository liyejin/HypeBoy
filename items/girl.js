export default class Girl {
  #x;
  #y;
  #width;
  #height;
  #image;
  #walkStep;
  #walkDirection;
  #speed;
  #goUp;
  #goRight;
  #goDown;
  #goLeft;
  #walkDelay;

  constructor() {
    // image draw
    this.#image = document.getElementById("girl");

    // image location
    this.#x = 0;
    this.#y = 0;
    this.#width = this.#image.width / 3;
    this.#height = this.#image.height / 4;

    // 발돋움
    this.#walkStep = 0;

    // 방향
    this.#walkDirection = 1;
  }

  update() {
    if (this.#goUp) {
      this.#y -= this.#speed;
    }
    if (this.#goRight) {
      this.#x += this.#speed;
    }
    if (this.#goDown) {
      this.#y += this.#speed;
    }
    if (this.#goLeft) {
      this.#x -= this.#speed;
    }
    this.#delay--;
    if (this.#delay == 0) {
      this.#walkStep = this.#walkStep == 1 ? 2 : 1;
      this.#delay = 20;
    }
  } //update

  draw(ctx) {
    let img = this.#image;
    let x = this.#x;
    let y = this.#y;
    let w = this.#width;
    let h = this.#height;
    let sx = this.#walkStep * w;
    let sy = this.#walkDirection * h;

    ctx.drawImage(img, sx, sy, w, h, x, y, w, h);
  } //draw

  update() {} //update
}
