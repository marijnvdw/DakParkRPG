import { Actor, Vector, Clock, Keys } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Boss1 } from "./boss1.js"

export class Attack1 extends Actor {
    dmg
    constructor(x, y, event) {
        super()
        this.pos = new Vector(x, y)
        this.target = event
        this.xScale = 0.4
        this.yScale = 0.4
        this.lifeSpan = 0
    }

    onInitialize() {
        this.sprite = Resources.Boss1.toSprite()
        this.graphics.use(this.sprite)
        this.scale = new Vector(0.4, 0.4)

        this.on('collisionstart', (event) => this.doDmg())
        this.actions.moveTo(this.target.pos.x, this.target.pos.y, 400)
        this.actions.scaleTo(new Vector(1.3, 1.3), new Vector(1.5, 1.5)).die()
    }

    doDmg() {

    }
}