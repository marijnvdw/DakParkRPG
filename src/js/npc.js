import '../css/style.css';
import { Actor, Vector, Keys, Text, Engine, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';


export class NPC extends Actor {
    interacting
    constructor() {
        super();
    }

    onInitialize() {
        this.sprite = Resources.NPC.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(600, 600)

        let interactRange = new Actor({ radius: 100 })
        this.addChild(interactRange)

        this.text = new Text({
            text: 'Some Text Drawn Here\nNext line'

        });

        interactRange.on('collisionstart', (event) => this.interacting = true)
    }

    onPostUpdate(engine) {
        let kb = this.scene.engine.input.keyboard;

        if (kb.isHeld(Keys.E) && this.interacting) {
            console.log(this.interacting)
            this.interacting = false
            this.graphics.use(this.text)
        }
    }
}