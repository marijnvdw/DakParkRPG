import { Actor, Vector, Clock, Keys, PostKillEvent } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Boss1 } from "./boss1.js"
import { Player } from "../Player.js"
import { playerVisual } from "../playerVisual.js"

export class Attack1 extends Actor {
    dmg
    constructor(x, y, event) {
        super({ width: Resources.Waterkolk.width, height: Resources.Waterkolk.height })
        this.pos = new Vector(x, y)
        this.target = event
        this.xScale = 0.4
        this.yScale = 0.4
        this.lifeSpan = 0
    }

    onInitialize() {
        this.sprite = Resources.Waterkolk.toSprite()
        this.graphics.use(this.sprite)
        this.scale = new Vector(0.2, 0.2)
        this.dmg = 10
        // const player = this.scene.Player
        // console.log(player)


        //  this.on('collisionstart', (event) => this.doDmg(event))
        this.actions.moveTo(this.target.pos.x, this.target.pos.y, 600)
        this.actions.scaleTo(new Vector(0.5, 0.5), new Vector(0.6, 0.6)).die()
    }

    doDmg(event) {
        if (event.other instanceof playerVisual) {
            console.log(event.other)
            console.log(this.scene.engine.player)
            this.scene.engine.player.hp -= this.dmg
            if (this.scene.engine.player.hp <= 0) {
                event.other.kill()
                this.scene.engine.goToScene("outroScreen")
            }
        }
    }
}