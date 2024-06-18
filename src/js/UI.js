import { Actor, Vector, ScreenElement, Sprite, Engine } from "excalibur";
import { Resources } from './resources.js';
import { Player } from "./Player.js";
import { Inventory } from './Inventory.js';
let activeInv = false;
export class HotBar extends ScreenElement {

    constructor() {
        super();
        // this.player = player; // Reference to the player
        this.z = 10
    }
    onInitialize(engine) {
        this.graphics.use(Resources.inventory.toSprite());
        this.scale = new Vector(1.2, 1.2);
        this.anchor = new Vector(0.5, 0.5);
        this.pos = new Vector(window.innerWidth / 2, window.innerHeight - 30);
        console.log('haha')
    }

    OnKeyPress() {
        console.log('hoi')
        if (!this.activeInv) {
            this.activeInv = true
            console.log(this.scene)
            console.log()
            console.log(this.scene.engine.player.inventory.items)
            for (let i = 0; i < this.scene.engine.player.inventory.items.length; i++) {
                console.log(this.scene.engine.player.inventory.items[i].image)
                const hotBarItem = new HotBarItems();
                console.log(hotBarItem)
                this.scene.engine.add(hotBarItem);
                hotBarItem.updateHotBarItems(this.scene.engine.player.inventory.items[i].image, this.scene.engine.player.inventory.items[i].scaleTexture, i);
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

    updateHotBarItems(path, scaleTexture, invPos) {
        console.log(path)
        console.log(scaleTexture)
        this.graphics.use(path.toSprite());
        console.log(this.graphics)
        this.scale = scaleTexture;
        this.z = 11
        this.anchor = new Vector(0.5, 0.5);
        this.pos = new Vector((window.innerWidth / 2) - 190 + (47 * invPos), window.innerHeight - 30);
    }
}
//* this.scene.items.length
// 437 

export class HpBar extends ScreenElement {
    onInitialize(engine) {
        // Initialization for HpBar
    }
}
