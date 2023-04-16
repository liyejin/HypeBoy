export default class Girl {
  #x;
  #y;
  #width;
  #height;
  #image;
  #canvas;
  #ctx;

  constructor() {
    // image draw
    this.#image = document.getElementById("girl");

    // image location
    this.#x = 0;
    this.#y = 0;
    this.#width = 0;
    this.#height = 0;
  }

  draw() {
    let img = this.#image;
    let x = this.#x;
    let y = this.#y;
    let w = this.#width;
    let h = this.#height;

    ctx.drawImage(img, x, y, w, h);
  } //draw

  update() {} //update
}
