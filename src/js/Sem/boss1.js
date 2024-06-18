import { Actor, Vector, Clock, Keys, Color } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Player } from "../Player.js"
import { Attack1 } from './boss1Attacks.js'
import { playerVisual } from "../playerVisual.js"

export class Boss1 extends Actor {
    attackSpeed = 200
    attackCD = 0
    hp = 100
    maxHp = 100
    constructor() {
        super({ width: Resources.Boss1.width, height: Resources.Boss1.height })
    }

    onInitialize() {
        this.sprite = Resources.Krab.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(600, 600)
        let rangeDetector = new Actor({ radius: 5000 })
        this.addChild(rangeDetector)
        rangeDetector.on('precollision', (event) => this.attack(event, Math.ceil(Math.random() * 10)))
    }

    attack(event, attackNumber) {
        this.attackPattern;
        if (event.other instanceof playerVisual) {
            if (this.attackCD >= this.attackSpeed) {
                if (attackNumber <= 9) {
                    this.attackPattern = new Attack1(this.pos.x, this.pos.y, event.other)
                    this.scene.add(this.attackPattern)
                    this.attackCD = 0
                } else {
                    this.graphics.use()
                    this.actions.moveTo(event.other.pos, 7500)
                    // setTimeout(() => {
                    this.graphics.use(this.sprite)
                    // }, 100);
                    this.attackCD = 100
                    console.log(this.pos)
                }
            }
        }
    }

    onPostUpdate() {
        if (this.attackCD < this.attackSpeed) {
            this.attackCD++
        }
    }
}