import { Actor, Vector, ScreenElement, Sprite, Engine } from "excalibur";
import { Resources } from './resources.js';
import { Player } from "./Player.js";
import { Inventory } from './Inventory.js';
let activeInv = false;

export class HotBar extends ScreenElement {


    constructor() {
        super();
        this.z = 10
        this.equipeditem;
    }

    onInitialize(engine) {
        this.graphics.use(Resources.inventory.toSprite());
        this.scale = new Vector(1.2, 1.2);
        this.anchor = new Vector(0.5, 0.5);
        this.pos = new Vector(window.innerWidth / 2, window.innerHeight - 30);


    }

    OnKeyPress(activekey) {
        console.log('hoi')
        console.log(this.scene.engine.player.inventory.items)
        for (let i = 0; i < this.scene.engine.player.inventory.items.length; i++) {
            const hotBarItem = new HotBarItems();
            console.log(hotBarItem)
            this.scene.engine.add(hotBarItem);
            hotBarItem.updateHotBarItems(this.scene.engine.player.inventory.items[i].image, this.scene.engine.player.inventory.items[i].scaleTexture, i);

            console.log(this.equipeditem)
            if (this.equipeditem == undefined) {
                this.equipeditem = i
            } else if (i == activekey && activekey != 10) {
                this.equipeditem = activekey
            }
        }
        console.log(this.equipeditem)
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

        console.log(this.scene)
        // for (let index = 0; index < this.scene.items.length; index++) {
        //     this.kill(this.scene.items[index]);
        // }



        this.graphics.use(path.toSprite());
        this.scale = scaleTexture;
        this.z = 11
        this.anchor = new Vector(0.5, 0.5);
        this.pos = new Vector((window.innerWidth / 2) - 190 + (47 * invPos), window.innerHeight - 30);
        this.name = 'hotbarItem'
    }
}

export class HpBar extends ScreenElement {
    onInitialize(engine) {
        // Initialization for HpBar
    }
}

export class Border extends ScreenElement {
    constructor() {
        let border = Resources.invBorder.toSprite();
        border.pos = new Vector(window.innerWidth / 2, window.innerHeight - 30);
        border.anchor = new Vector(0.5, 0.5);
        border.z = 1000
        this.scene.add(border)
        console.log(this.scene.hotbar)
    }
}
