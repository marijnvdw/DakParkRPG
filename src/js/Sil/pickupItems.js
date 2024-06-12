
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from '../resources.js';
import { Player } from "../Player.js";

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

    CollisionHandeler() {
        this.scene.Player.addChild([this.item])
    }
}