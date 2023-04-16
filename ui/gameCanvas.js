import Girl from "../items/girl.js";
import Enemy from "../items/enemy.js";
import Map from "../items/map.js";

export default class GameCanvas {
  #canvas;
  #ctx;
  #tid;
  #map;
  #girl;
  #enemy;

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

    // class_map
    this.#map = new Map();

    // class_enemy
    this.#enemy = new Enemy();

    // time ID
    this.#tid = null;
  }

  run() {
    this.#tid = setInterval(() => {
      this.update();
      this.draw();
    }, 16);
  } //run

  draw() {
    this.#map.draw(this.#ctx);
    this.#girl.draw(this.#ctx);
  } //draw

  update() {
    this.#girl.update();
  } //update
} //class
