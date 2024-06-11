import { Actor, Vector, Clock, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Player extends Actor {

    constructor() {
        super()
    }

    onInitialize() {
        this.sprite = Resources.Player.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(300, 300)
        //this.on("collisionstart", () => this.interact())
    }

    interact() {

    }


    onPostUpdate(engine) {
        let kb = engine.input.keyboard

        if (kb.isHeld(Keys.W)) {
            this.pos.y--
        }
        if (kb.isHeld(Keys.A)) {
            this.pos.x--
        }
        if (kb.isHeld(Keys.S)) {
            this.pos.y++
        }
        if (kb.isHeld(Keys.D)) {
            this.pos.x++
        }
    }
}