import '../css/style.css';
import { Actor, Vector, Keys, KeyEvent, Text, Engine, Label, Font, FontUnit, Color, Scene, CollisionType } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { playerVisual } from './playerVisual.js';


export class NPC extends Actor {
    interacting = false
    dialogOptionInt = 0
    questReceived = false
    gotSword = false
    game
    constructor() {
        super({ width: Resources.NPC.width, height: Resources.NPC.height, collisionType: CollisionType.Fixed });
    }

    onInitialize(engine) {
        this.sprite = Resources.NPC.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(370, 300)
        this.game = engine

        let interactRange = new Actor({ radius: 100 })
        this.addChild(interactRange)

        this.text = new Label({
            text: "",
            pos: new Vector(0, -150),
            z: 3,
            font: new Font({
                size: 16,
                color: Color.Black
            })
        });
        this.text.z = 3
        this.text.anchor = new Vector(0.5, 0.5)
        this.addChild(this.text)

        this.textBox = new Actor({
            z: 2,
            scale: new Vector(0.5, 0.5)
        })
        this.textBox.graphics.use(Resources.TextBox.toSprite())

        interactRange.on('collisionstart', (event) => { if (event.other instanceof playerVisual) { this.interacting = true } })
        interactRange.on('collisionend', (event) => { if (event.other instanceof playerVisual) { this.interacting = false } })
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
                    this.text.text = 'I haven\'t seen you before.'
                    this.text.addChild(this.textBox)
                    this.game.player.moveAble = false
                    break;
                case 2:
                    this.text.text = 'Did you end up here after\nthe universal glitch aswell?'
                    break;
                case 3:
                    this.text.text = 'Listen up, I will help you out\nbut nothing is free around here.'
                    break;
                case 4:
                    this.text.text = 'A wolf from the portal down south\nstole my belongings from me.'
                    break;
                case 5:
                    this.text.text = 'Help me out and I\'ll tell\nyou everything you need to know.'
                    break;
                case 6:
                    this.text.text = ''
                    this.dialogOptionInt = 0
                    this.game.player.moveAble = true
                    this.questReceived = true
                    this.textBox.kill()
                    break;
            }
        }

        if (this.gotSword === true && this.questReceived === true) {
            this.dialogOptionInt++
            switch (this.dialogOptionInt) {
                case 1:
                    this.text.text = 'Oh, you got my things back.'
                    this.text.addChild(this.textBox)
                    break;
                case 2:
                    this.text.text = 'You might not be so useless\nafter all.'
                    break;
                case 3:
                    this.text.text = '...'
                    break;
                case 4:
                    this.text.text = 'It all started a few days ago when\na powerfull force caused a glitch\nof sorts in this universe.'
                    break;
                case 5:
                    this.text.text = 'Thank to this \'glitch\' all different kinds of\nworlds ended up colliding.'
                    break;
                case 6:
                    this.text.text = 'You must\'ve ended up here after that.'
                    break;
                case 7:
                    this.text.text = '...'
                    break;
                case 8:
                    this.text.text = 'I\'ll help you get back to your own world.'
                    break;
                case 9:
                    this.text.text = 'You\'ll get the details later,\nfor now you need some\narmor and weapons.'
                    break;
                case 10:
                    this.text.text = 'There might be some north of here.'
                    break;
                case 11:
                    this.text.text = ''
                    this.dialogOptionInt = 0
                    this.textBox.kill()
                    break;
            }
        }
    }
}