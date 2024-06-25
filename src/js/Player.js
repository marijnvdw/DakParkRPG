import { Actor, Vector, Keys, CollisionType, Buttons, Axes } from "excalibur";
import { Resources } from './resources.js';
import { Inventory } from './Inventory.js';
import { Attack1 } from "./Sem/boss1Attacks.js";
import { HotBar } from './UI.js'

export class Player extends Actor {
    hp = 20
    Dmg
    moveAble = true;
    game
    name
    itemslot
    constructor(hotbar) {
        super({ width: Resources.Player.width, height: Resources.Player.height });
        this.inventory = new Inventory();
        this.addChild(this.inventory)
    }

    onInitialize(engine) {
        this.game = engine
        this.Dmg = 10
        this.name = 'henry'
        this.itemslot = 0
        //  this.on("collisionstart", (event) => this.interact(event))


        engine.input.gamepads.at(0).on('button', (evt) => {
            console.log("event: " + evt.button)
            let keyList = [Buttons.DpadLeft, Buttons.DpadRight, Buttons.Face3]
            for (let i = 0; i < keyList.length; i++) {
                if (keyList[i] == evt.button) {
                    console.log(this.itemslot)
                    if (evt.button = Buttons.DpadLeft) {
                        this.itemslot--
                    }
                    if (evt.button = Buttons.DpadRight) {
                        this.itemslot++
                    }
                    this.scene.engine.hotBar.OnKeyPress(this.itemslot);
                    break
                }
            }

            //console.log(evt.key)
            //if (evt.key == Keys.Digit2) {

            if (evt.button === Buttons.Face4) {
                this.inventory.useItem(this.game.hotBar.equipeditem)
            }
        });
    }

    useitem() {
        this.inventory.currentitem.use()
        this.inventory.items[currentitem].kill()
    }

    addItemToInventory(item) {
        this.inventory.addItem(item);
        console.log('added')
        this.scene.engine.hotBar.OnKeyPress()
    }

    useItemFromInventory(item) {
        item.use(this);
        this.inventory.removeItem(item);
    }

    logInventory() {
        //console.log("Inventory Items:");
        this.inventory.getItems().forEach(item => {
            console.log(`- ${item.name}: ${item.description}`);
        });
    }
    onPostUpdate() {
        //     if (this.game.mygamepad.isButtonPressed(Buttons.Face2)) {
        //         console.log('Jump!')
        //         this.scene.engine.hotBar.OnKeyPress(10);
        //     }
        //  console.log(this.game.mygamepad.isButtonPressed)
    }
}
