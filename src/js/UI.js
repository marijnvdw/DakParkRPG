import { Actor, Vector, Keys, ScreenElement } from "excalibur";
import { Resources } from './resources.js';
import { Inventory } from './Inventory.js';

export class HotBar extends ScreenElement {

    onInitialize(engine) {
        this.graphics.use(Resources.inventory.toSprite())
        this.scale = new Vector(1.2, 1.2)
        this.anchor = new Vector(0.5, 0.5)
        this.pos = new Vector(window.innerWidth / 2, window.innerHeight - 30)//width: window.innerWidth, height: window.innerHeight
    }

    changeSprite() {
        this.graphics.use(Resources.playButton.toSprite())
    }
}