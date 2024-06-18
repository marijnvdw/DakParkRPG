import '../css/style.css';
import { Actor, Vector, Keys, KeyEvent, Text, Engine, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';


export class NPC extends Actor {
    interacting = false
    dialogOptionInt = 0
    questReceived = false
    gotSword = false
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
            pos: new Vector(0, 50),
            font: new Font({
                size: 16,
                color: Color.White
            })
        });
        this.text.z = 3
        this.text.anchor = new Vector(0.5, 0.5)
        this.addChild(this.text)

        interactRange.on('collisionstart', (event) => this.interacting = true)
        interactRange.on('collisionend', (event) => this.interacting = false)
        this.scene.engine.input.keyboard.on('press', (evt) => {
            if (evt.key === Keys.E && this.interacting === true) {
                this.interact()
            }
        })
    }

    interact() {
        for (let i = 0; i < this.scene.engine.player.inventory.items.length; i++) {
            if (this.scene.engine.player.inventory.items[i].name === 'Sword') {
                this.gotSword = true
            }
        }

        if (this.questReceived === false) {
            this.dialogOptionInt++
            switch (this.dialogOptionInt) {
                case 1:
                    this.text.text = 'After the universal glitch a\ngiant crab started running\nrampant across our lands.'
                    break;
                case 2:
                    this.text.text = 'If you can find a sword and bring it to me\nyou might be able to beat him.'
                    break;
                case 3:
                    this.text.text = ''
                    this.dialogOptionInt = 0
                    this.questReceived = true
                    break;
            }
        }

        if (this.gotSword === true && this.questReceived === true) {
            this.dialogOptionInt++
            console.log(this.gotSword)
            console.log(this.questReceived)
            console.log(this.dialogOptionInt)

            switch (this.dialogOptionInt) {
                case 1:
                    this.text.text = 'Great now go beat the boss'
                    break;
                case 2:
                    this.text.text = ''
                    this.dialogOptionInt = 0
                    break;
            }
        }
    }
}