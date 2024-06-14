import { Actor, Vector, ScreenElement, Sprite } from "excalibur";
import { Resources } from './resources.js';
import { Player } from "./Player.js";
import { Inventory } from './Inventory.js';
let activeInv = false;
export class HotBar extends ScreenElement {
    
    constructor(player) {
        super();
        this.player = player; // Reference to the player
        
    }
    

    onInitialize(engine) {
       this.graphics.use(Resources.inventory.toSprite());
            this.scale = new Vector(1.2, 1.2);
            this.anchor = new Vector(0.5, 0.5);
            this.pos = new Vector(window.innerWidth / 2, window.innerHeight - 30);
    }

    OnKeyPress() {
        if (!this.activeInv) {
            this.activeInv = true
            console.log(this.scene.items)
            console.log(this.scene.character.inventory.items)
            //console.log(this.scene.items[])
            for (let i = 0; i < this.scene.character.inventory.items.length; i++) {
                console.log(this.scene.character.inventory.items[i].image)
                const hotBarItem = new HotBarItems();
                this.scene.add(hotBarItem);
                hotBarItem.updateHotBarItems(this.scene.character.inventory.items[i].image);
            }
        } else {
            //this.hotBarItem.kill()
            //this.activeInv = false;
        }
    }
}

export class HotBarItems extends ScreenElement {
    constructor(item, slot) {
        super();
        this.item = item; // Store item information
        this.slot = slot; // Store slot information
    }

    onInitialize(engine) {
        console.log('hi')
    }

    updateHotBarItems(path) {
        console.log(path)
        this.graphics.use(path.toSprite());
        this.scale = new Vector(0.1, 0.1);
        this.anchor = new Vector(0.5, 0.5);
        this.pos = new Vector((window.innerWidth / 2) / 9 * this.scene.items.length, window.innerHeight - 30);
    }
}

export class HpBar extends ScreenElement {
    onInitialize(engine) {
        // Initialization for HpBar
    }
}
