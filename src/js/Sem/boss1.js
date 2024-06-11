import { Actor, Vector, Clock, Keys } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'

export class Boss1 extends Actor {
    attackSpeed = 300
    attackCD = 0
    constructor() {
        super()
    }

    onInitialize() {
        // this.sprite = Resources.Player.toSprite()
        // this.graphics.use(this.sprite)
        this.pos = new Vector(600, 600)
    }

    attack(attackNumber) {
        console.log(attackNumber)
    }

    onPostUpdate() {
        if (this.attackCD < this.attackSpeed) {
            this.attackCD++
        } else {
            this.attackCD = 0
            this.attack(this.getRandomInt(10))
        }

    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}