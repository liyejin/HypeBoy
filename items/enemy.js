export default class Enemy {
    #image;
    #x;
    #y;
    #width;
    #height;
    #speed
    constructor(x, y) {
        this.#image = document.getElementById("enemy");
        this.#x = x;
        this.#y = y;
        this.#width = 40;
        this.#height = 35;

        this.#speed = 3;
    }

    update() {
        this.#y += this.#speed;
    }

    draw(ctx) {
        let img = this.#image;
        let x = this.#x;
        let y = this.#y;
        let w = this.#width;
        let h = this.#height;

        ctx.drawImage(img, x, y, w, h);
    }
}