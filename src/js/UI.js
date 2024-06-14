import { Actor, Vector, ScreenElement, Sprite } from "excalibur";
import { Resources } from './resources.js';
import { Player } from "./Player.js";

export class HotBar extends ScreenElement {
    constructor(player) {
        super();
        this.player = player; // Reference to the player
    }

    onInitialize(engine) {
       
    }

    OnKeyPress() {
        this.graphics.use(Resources.inventory.toSprite());
        this.scale = new Vector(1.2, 1.2);
        this.anchor = new Vector(0.5, 0.5);
        this.pos = new Vector(window.innerWidth / 2, window.innerHeight - 30);
    }
}

export class HotBarItems extends ScreenElement {
    constructor(item, slot) {
        super();
    }

    onInitialize(engine) {
        
    }
}

export class HpBar extends ScreenElement {
    onInitialize(engine) {
        // Initialization for HpBar
    }
}
