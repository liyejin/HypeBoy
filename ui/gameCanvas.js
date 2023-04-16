import Girl from "../items/Girl";

export default class GameCanvas {
  #canvas;
  #ctx;
  #girl;

  constructor() {
    // create canvas
    this.#canvas = document.createElement("canvas"); // canvas 생성(가져오기 X)
    document.body.append(this.#canvas);
    this.#ctx = this.#canvas.getContext("2d");

    // canvas size
    this.#canvas.width = 700;
    this.#canvas.height = 500;

    // class_girl
    this.#girl = new Girl();
  }

  draw(ctx) {
    this.#girl.draw(this.#ctx);
  } //draw

  update() {
    this.#girl.update();
  } //update
} //class
