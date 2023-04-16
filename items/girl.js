export default class Girl {
  #x;
  #y;
  #width;
  #height;
  #image;
  #walkStep;
  #walkDirection;

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

  move(direction) {
    switch (direction) {
      case 1:
        break;

      case 2:
        break;

      case 3:
        break;

      case 4:
        break;
    }
  }

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
