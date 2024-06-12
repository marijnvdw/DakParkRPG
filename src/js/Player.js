import { Actor, Vector, Keys } from "excalibur";
import { Resources } from './resources.js';
import { Inventory } from './Inventory.js';
import { HotBar } from './UI.js'

export class Player extends Actor {
    dash = true;
    dashCD = 0;
    hp = 50
    maxHp = 50

    constructor() {
        super({ width: Resources.Player.width, height: Resources.Player.height });
        this.inventory = new Inventory();
    }

    onInitialize(engine) {
        this.sprite = Resources.Player.toSprite();
        this.graphics.use(this.sprite);
        this.scale = new Vector(0.25, 0.25);
        this.pos = new Vector(300, 300);
        //this.on("collisionstart", () => this.interact())

        engine.input.keyboard.on('press', (evt) => {
            if (evt.key === Keys.I) {
                this.logInventory();
            }
        });
    }

    interact() {
        // Interaction logic will be defined here
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

    onPostUpdate(engine) {
        let kb = engine.input.keyboard;

        //movement
        if (kb.isHeld(Keys.W)) {
            this.pos.y--;
        }
        if (kb.isHeld(Keys.A)) {
            this.pos.x--;
        }
        if (kb.isHeld(Keys.S)) {
            this.pos.y++;
        }
        if (kb.isHeld(Keys.D)) {
            this.pos.x++;
        }

        //dash mechanic
        if (kb.wasPressed(Keys.Space) && this.dash === true) {
            this.dash = false;
            if (kb.isHeld(Keys.W)) {
                this.pos.y -= 50;
            }
            if (kb.isHeld(Keys.A)) {
                this.pos.x -= 50;
            }
            if (kb.isHeld(Keys.S)) {
                this.pos.y += 50;
            }
            if (kb.isHeld(Keys.D)) {
                this.pos.x += 50;
            }
        }

        if (this.dashCD < 240) {
            this.dashCD++
        } else {
            this.dashCD = 0;
            this.dash = true;
        }
    }
}
