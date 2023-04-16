import Map from "../items/map.js"
import Boy from "../items/boy.js"
import Enemy from "../items/enemy.js"

export default class GameCanvas{
    #tid;
    #canvas;
    #ctx;

    constructor(){
        this.#tid = null;
        this.#canvas = document.createElement("canvas");
        document.body.append
    }

    update(){

    }

    draw(){

    }

    run(){
        this.#tid = setInterval(()=>{
            this.update();
            this.run();
        }, 17)
    }
    
}