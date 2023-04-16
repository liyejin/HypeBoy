export default class Map{
    #image;
    #x;
    #y;
    #width;
    #height;
    constructor(){
        this.#image = document.getElementById("map");
        this.#x = 0
        this.#y = 0;
        this.#width = 700;
        this.#height = 500;
    }

    draw(ctx){
        ctx.drawImage(this.#image, this.#x, this.#y, this.#width, this.#height);
    }
}