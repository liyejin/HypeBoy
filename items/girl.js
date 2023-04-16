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
  #isMoving;

  constructor() {
    // image draw
    this.#image = document.getElementById("girl");

    // image location
    this.#x = 0;
    this.#y = 0;
    this.#width = this.#image.width / 3;
    this.#height = this.#image.height / 4;

    // 발돋움
    this.#walkStep = 1;
    // 방향
    this.#walkDirection = 1;

    // speed
    this.#speed = 2;

    // delay
    this.#walkDelay = 20;

    // 움직이는 방향
    this.#goUp = false;
    this.#goRight = false;
    this.#goDown = false;
    this.#goLeft = false;
  }

  //뭔가 바뀌는 걸 다 여기서 기능하도록
  update() {
    // truthy
    let isMoving = this.#goUp || this.#goRight || this.#goDown || this.#goLeft;

    if (!isMoving) {
      this.#walkDirection = 1;
      this.#walkStep = 0;
      return;
    }

    if (this.#goUp) this.#y -= this.#speed;

    if (this.#goRight) this.#x += this.#speed;

    if (this.#goDown) this.#y += this.#speed;

    if (this.#goLeft) this.#x -= this.#speed;

    this.#walkDelay--;

    if (this.#walkDelay == 0) {
      this.#walkStep = this.#walkStep == 1 ? 2 : 1;
      this.#walkDelay = 20;
    }
  } //update

  move(direction) {
    switch (direction) {
      case "up":
        this.#goUp = true;
        this.#walkDirection = 0; // draw에서 px이 아님임을 지정해 줌
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

  stop(direction) {
    switch (direction) {
      case "up":
        this.#goUp = false;
        this.#walkDirection = 1;

        break;

      case "right":
        this.#goRight = false;
        this.#walkDirection = 1;

        break;

      case "down":
        this.#goDown = false;
        this.#walkDirection = 1;

        break;

      case "left":
        this.#goLeft = false;
        this.#walkDirection = 1;

        break;
    }
  } //stop

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
