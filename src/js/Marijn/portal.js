import '../../css/style.css';
import { Actor, Vector, Keys, KeyEvent, Text, Engine, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from '../resources.js';


export class Portal extends Actor {
    interacting = false
    dialogOptionInt = 0
    questReceived
    constructor() {
        super({ width: Resources.Portal.width, height: Resources.Portal.width });
    }

    onInitialize() {
        this.sprite = Resources.Portal.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(1400, 780)
        this.scale = new Vector(0.07, 0.07)

        this.on('collisionstart', (event) => this.enterPortal())
    }

    enterPortal() {
        this.scene.actors.forEach(actor => {
            actor.kill()
        })
        this.scene.engine.goToScene('planet1')
    }
}