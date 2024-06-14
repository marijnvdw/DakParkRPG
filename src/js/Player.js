import { Actor, Vector, Keys } from "excalibur";
import { Resources } from './resources.js';
import { Inventory } from './Inventory.js';
import { Attack1 } from "./Sem/boss1Attacks.js";
import { HotBar } from './UI.js'

export class Player extends Actor {
    hp = 50
    maxHp = 50

    constructor() {
        super({ width: Resources.Player.width, height: Resources.Player.height });
        this.inventory = new Inventory();
    }

    onInitialize(engine) {
        engine.input.keyboard.on('press', (evt) => {
            if (evt.key === Keys.I) {
                this.logInventory();
            }
        });
    }

    interact(event) {
        // console.log("hihi")
        // if (event.other === Attack1) {
        //     this.hp = this.hp - event.other.dmg
        //     console.log(this.hp)
        // }
    }

    addItemToInventory(item) {
        this.inventory.addItem(item);
        // if (this.hotBar) {
        //     this.hotBar.updateHotBarItems(); // Update HotBar
        // }
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
