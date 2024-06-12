import { Actor, Vector, Clock, Keys } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Player } from "../Player.js"
import { Attack1 } from './boss1Attacks.js'

export class Boss1 extends Actor {
    attackSpeed = 300
    attackCD = 0
    constructor() {
        super({ width: Resources.Boss1.width, height: Resources.Boss1.height })
    }

    onInitialize() {
        this.sprite = Resources.Boss1.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(600, 600)

        let rangeDetector = new Actor({ radius: 5000 })
        this.addChild(rangeDetector)
        rangeDetector.on('precollision', (event) => this.attack(event, Math.ceil(Math.random() * 10)))
    }

    attack(event, attackNumber) {
        this.attackPattern;
        if (event.other instanceof Player) {
            if (this.attackCD >= this.attackSpeed) {
                if (attackNumber <= 9) {
                    this.attackPattern = new Attack1(this.pos.x, this.pos.y, event.other)
                    this.scene.add(this.attackPattern)
                } else {
                    this.actions.moveTo(event.other.pos, 750)
                }

                this.attackCD = 0
            }
        }

    }

    onPostUpdate() {
        if (this.attackCD < this.attackSpeed) {
            this.attackCD++
        }
    }
}