import { Actor, Vector, Keys } from "excalibur";
import { Resources } from './resources.js';
import { Inventory } from './Inventory.js';
import { Attack1 } from "./Sem/boss1Attacks.js";

export class Player extends Actor {

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
