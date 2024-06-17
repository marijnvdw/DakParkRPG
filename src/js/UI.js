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
            console.log('${this.scene.items}')
            console.log(this.scene.items)
            console.log(this.scene.character.inventory.items)
            console.log(this.scene.character.inventory.items[0].scaleTexture)
            for (let i = 0; i < this.scene.character.inventory.items.length; i++) {
                console.log(this.scene.character.inventory.items[i].image)
                const hotBarItem = new HotBarItems();
                this.scene.add(hotBarItem);
                hotBarItem.updateHotBarItems(this.scene.character.inventory.items[i].image, this.scene.character.inventory.items[i].scaleTexture, i);
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
        this.scale = scaleTexture;
        this.anchor = new Vector(0.5, 0.5);
        this.pos = new Vector((window.innerWidth / 2) - 190 + (47 * invPos) , window.innerHeight - 30);
    }
}
//* this.scene.items.length
// 437 

export class HpBar extends ScreenElement {
    onInitialize(engine) {
        // Initialization for HpBar
    }
}
