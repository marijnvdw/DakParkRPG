import { Actor, Vector, Keys, CollisionType } from "excalibur";
import { Resources } from './resources.js';
import { Inventory } from './Inventory.js';
import { Attack1 } from "./Sem/boss1Attacks.js";
import { HotBar } from './UI.js'

export class Player extends Actor {
    hp = 2000
    maxHp = 2000

    constructor(hotbar) {
        super({ width: Resources.Player.width, height: Resources.Player.height });
        this.inventory = new Inventory();
    }

    onInitialize(engine) {
        //  this.on("collisionstart", (event) => this.interact(event))
        engine.input.keyboard.on('press', (evt) => {
            if (evt.key === Keys.I) {
                this.logInventory();
                this.scene.engine.hotBar.OnKeyPress(10); // Update HotBar
            }

            let keyList = [Keys.Digit1, Keys.Digit2, Keys.Digit3]
            for (let i = 0; i < keyList.length; i++) {
                if (keyList[i] == evt.key) {
                    this.scene.engine.hotBar.OnKeyPress(i);
                    break
                }

            }

            console.log(evt.key)
            //if (evt.key == Keys.Digit2) {
            this.logInventory();

            //}
        });
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
        console.log("Inventory Items:");
        this.inventory.getItems().forEach(item => {
            console.log(`- ${item.name}: ${item.description}`);
        });
    }
}
