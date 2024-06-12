import { Actor, Vector, Clock, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Player extends Actor {
    dash = true
    dashCD = 0

    constructor() {
        super({ width: Resources.Player.width, height: Resources.Player.height })
        let inventory = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    onInitialize() {
        this.sprite = Resources.Player.toSprite()
        this.graphics.use(this.sprite)
        this.scale = new Vector(0.125, 0.125)
        this.pos = new Vector(300, 300)
        //this.on("collisionstart", () => this.interact())
    }

    interact() {

    }


    onPostUpdate(engine) {
        let kb = engine.input.keyboard

        //movement
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

        //dash mechanic
        if (kb.wasPressed(Keys.Space) && this.dash === true) {
            this.dash = false
            if (kb.isHeld(Keys.W)) {
                this.pos.y -= 50
            }
            if (kb.isHeld(Keys.A)) {
                this.pos.x -= 50
            }
            if (kb.isHeld(Keys.S)) {
                this.pos.y += 50
            }
            if (kb.isHeld(Keys.D)) {
                this.pos.x += 50
            }
        }

        if (this.dashCD < 300) {
            this.dashCD++
        } else {
            this.dashCD = 0
            this.dash = true
        }

    }
}