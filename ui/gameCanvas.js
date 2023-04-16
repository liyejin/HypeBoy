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
    this.#canvas.tabIndex = 0;
    this.#canvas.focus();

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

    // keyboard input
    this.#canvas.onkeydown = this.keyDownHandler.bind(this);
  }

  keyDownHandler(e) {
    switch (e.key) {
      case "ArrowUp":
        console.log("up")
        this.#girl.move("up");
        break;
      case "ArrowRight":
        console.log("down")
        this.#girl.move("right");
        break;
      case "ArrowDown":
        console.log("down")
        this.#girl.move("down");
        break;
        case "ArrowLeft":
          console.log("left")
        this.#girl.move("left");
        break;
    }
  }

  draw() {
    this.#map.draw(this.#ctx);
    this.#girl.draw(this.#ctx);
  } //draw

  update() {
    this.#girl.update();
  } //update

  run() {
    this.#tid = setInterval(() => {
      this.update();
      this.draw();
    }, 16);
  } //run

} //class
