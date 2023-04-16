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
    this.#enemy = [];

    // time ID
    this.#tid = null;

    // keyboard handler
    this.#canvas.onkeydown = this.keyDownHandler.bind(this);
    this.#canvas.onkeyup = this.keyUpHandler.bind(this);
  }


  keyUpHandler(e) {
    switch (e.key) {
      case "ArrowUp":
        this.#girl.stop("up");
        break;
      case "ArrowRight":
        this.#girl.stop("right");
        break;
      case "ArrowDown":
        this.#girl.stop("down");
        break;
        case "ArrowLeft":
        this.#girl.stop("left");
        break;
    }
  }
  keyDownHandler(e) {
    switch (e.key) {
      case "ArrowUp":
        this.#girl.move("up");
        break;
      case "ArrowRight":
        this.#girl.move("right");
        break;
      case "ArrowDown":
        this.#girl.move("down");
        break;
        case "ArrowLeft":
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
    
    this.#enemy = new Enemy();
  } //update

  run() {
    this.#tid = setInterval(() => {
      this.update();
      this.draw();
    }, 16);
  } //run

} //class
