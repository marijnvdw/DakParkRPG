import '../css/style.css';
import { Actor, Vector, Keys, KeyEvent, Text, Engine, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';


export class NPC extends Actor {
    interacting = false
    dialogOption = 0
    questReceived
    constructor() {
        super();
    }

    onInitialize() {
        this.sprite = Resources.NPC.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(600, 600)

        let interactRange = new Actor({ radius: 100 })
        this.addChild(interactRange)

        this.text = new Label({
            text: "",
            pos: new Vector(window.innerWidth / 2, 50),
            font: new Font({
                size: 24
            })
        });
        this.scene.add(this.text)

        interactRange.on('collisionstart', (event) => this.interacting = true)
        interactRange.on('collisionend', (event) => this.interacting = false)
        this.scene.engine.input.keyboard.on('press', (evt) => {
            if (evt.key === Keys.E) {
                this.interact()
            }
        })
    }

    interact() {
        if (this.interacting === true) {
            this.dialogOption++
            switch (this.dialogOption) {
                case 1:
                    this.text.text = 'Text 1'
                    break;
                case 2:
                    this.text.text = 'Text 2'
                    break;
            }
        }
    }
}