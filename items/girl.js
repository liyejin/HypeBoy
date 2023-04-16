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

  #delay;
  #isMoving;

  constructor() {
    // image draw
    this.#image = document.getElementById("girl");

    // image location
    this.#x = 0;
    this.#y = 0;
    this.#width = this.#image.width / 3;
    this.#height = this.#image.height / 4;


    // 걷는 방향
    this.#speed = 2;
    this.#goUp = false;
    this.#goRight = false;
    this.#goDown = false;
    this.#goLeft = false;
    this.#isMoving = false;

    // 왼/오른발 방향 delay
    this.#delay = 20;

    // 방향
    this.#walkDirection = 1;
    // 발돋움
    this.#walkStep = 1;
  }

  stop(direction) {
    switch (direction) {
      case "up":
        this.#goUp = false;
        this.#walkDirection = 1;
        this.#walkStep = 0;
        break;
      case "right":
        this.#goRight = false;
        this.#walkDirection = 1;
        this.#walkStep = 0;
        break;
      case "down":
        this.#goDown = false;
        this.#walkDirection = 1;
        this.#walkStep = 0;
        break;
      case "left":
        this.#goLeft = false;
        this.#walkDirection = 1;
        this.#walkStep = 0;
        break;
    }
  }
  move(direction) {
    switch (direction) {
      case "up":
        this.#goUp = true;
        this.#walkDirection = 0;
        break;
      case "right":
        this.#goRight = true;
        this.#walkDirection = 2;
        break;
      case "down":
        this.#goDown = true;
        this.#walkDirection = 1;
        break;
      case "left":
        this.#goLeft = true;
        this.#walkDirection = 3;
        break;
    }
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
    if(this.#delay==0){
      this.#walkStep = (this.#walkStep==1) ? 2 : 1;
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

}
