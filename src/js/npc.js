import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';


export class NPC extends Actor {
    constructor() {
        super();
    }

    onInitialize() {
        this.sprite = Resources.NPC.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(600, 600)

        let interactRange = new Actor({ radius: 100 })
        this.addChild(interactRange)

        interactRange.on('precollision', (event) => this.attack(event))
    }

    onPostUpdate(engine) {
        let kb = engine.input.keyboard;

        //movement
        if (kb.isHeld(Keys.E)) {

        }
    }
}