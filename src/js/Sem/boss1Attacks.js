import { Actor, Vector, Clock, Keys, PostKillEvent } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Boss1 } from "./boss1.js"
import { Player } from "../Player.js"
import { playerVisual } from "../playerVisual.js"

export class Attack1 extends Actor {
    dmg
    constructor(x, y, event) {
        super({ width: Resources.Boss1.width, height: Resources.Boss1.height })
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
        this.dmg = 10
        // const player = this.scene.Player
        // console.log(player)


        this.on('collisionstart', (event) => this.doDmg(event))
        this.actions.moveTo(this.target.pos.x, this.target.pos.y, 600)
        this.actions.scaleTo(new Vector(1.3, 1.3), new Vector(1.5, 1.5)).die()
    }

    doDmg(event) {
        console.log(this.scene)
        console.log("player: " + this.scene.actors[0])
        console.log("Je gaat damage nemen als speler")
        if (event.other instanceof playerVisual) {
            this.scene.actors[0].hp = this.scene.actors[0].hp - this.dmg
            console.log(this.scene.actors[0].hp)
            if (this.scene.actors[0].hp <= 0) {
                event.other.kill()
            }
        }
    }
}