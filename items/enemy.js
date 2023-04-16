export default class Enemy{
    #image;
    #x;
    #y;
    #width;
    #height;
    constructor(){
        this.#image = document.getElementById("enemy");
        this.#x = 0
        this.#y = 0;
        this.#width = this.#image.width;
        this.#height = this.#image.height;
    }

    update(){
        
    }

    draw(ctx){
        let img = this.#image;
        let x = this.#x;
        let y = this.#y;
        let w = this.#width;
        let h = this.#height;

        ctx.drawImage(img, x, y, w, h);
    }
}