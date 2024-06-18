
import { Actor, Vector, Clock, Keys, PostKillEvent } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Boss1 } from "../Sem/boss1.js"
import { Player } from "../Player.js"
import { playerVisual } from "../playerVisual.js"

export class Attack extends Actor {
    dmg
    constructor(x, y,) {
        super({ width: Resources.Boss1.width, height: Resources.Boss1.height })
        this.pos = new Vector(x, y)
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
        console.log('yalla')


        this.on('collisionstart', (event) => this.doDmg(event))
        console.log(this.scene.actors[1].pos.x, this.scene.actors[1].pos.y)
        this.actions.moveTo(this.scene.actors[1].pos.x, this.scene.actors[1].pos.y, 600)
        setTimeout(() => {
            this.kill()
        }, 500)


    }

    doDmg(event) {
        if (event.other instanceof Boss1) {
            this.scene.actors[1].hp -= this.dmg
            console.log(this.scene.actors[1].hp)
            console.log(this.scene)
            if (this.scene.actors[1].hp <= 0) {
                event.other.kill()
                this.scene.engine.goToScene("outroScreen")
            }
        }
    }


}