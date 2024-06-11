import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class PickupItem extends Actor {
    constructor(item) {
        super()
        this.item = item
    }

    onInitialize() {
        const sprite = Resources[this.item].toSprite()
        this.graphics.use(sprite)
        this.pos = new Vector(300, 300)
    }

    // onCollisionEnd() {
    //     this.scene.Player.addChild(`${item}`)
    // }
}