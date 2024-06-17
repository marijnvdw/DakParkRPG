import '../css/style.css';
import { Actor, Vector, Keys, KeyEvent, Text, Engine, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';


export class NPC extends Actor {
    interacting = false
    dialogOptionInt = 0
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
            pos: new Vector(window.innerWidth / 2, window.innerHeight - 100),
            font: new Font({
                size: 24,
                color: Color.White
            })
        });
        this.text.anchor = new Vector(0.5, 0.5)
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

            this.dialogOptionInt++
            switch (this.dialogOptionInt) {
                case 1:
                    this.text.text = 'After the universal glitch a giant crab started running\nrampant across our lands.'
                    break;
                case 2:
                    this.text.text = 'If you can find a trident and bring it to me\nyou might be able to beat him.'
                    break;
                case 3:
                    this.text.text = ''
                    break;
            }



        }
    }
}