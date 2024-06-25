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

        for (let index = 0; index < this.scene.actors.length; index++) {
            if (this.scene.actors[index].name == 'hotBarItem') {
                this.scene.actors[index].kill()
            }
        }

        for (let i = 0; i < this.scene.engine.player.inventory.items.length; i++) {
            const hotBarItem = new HotBarItems();
            this.scene.engine.add(hotBarItem);
            hotBarItem.updateHotBarItems(this.scene.engine.player.inventory.items[i].image, this.scene.engine.player.inventory.items[i].scaleTexture, i);

            if (this.equipeditem == undefined) {
                this.equipeditem = i
            } else if (i == activekey && activekey != 10) {
                this.equipeditem = activekey
            }
        }
        this.scene.engine.border.updateBorder()
    }
}

export class HotBarItems extends ScreenElement {
    constructor(item, slot) {
        super();
        this.item = item;
        this.slot = slot;
    }


    updateHotBarItems(path, scaleTexture, invPos) {

        this.graphics.use(path.toSprite());
        this.scale = scaleTexture;
        this.z = 11
        this.anchor = new Vector(0.5, 0.5);
        this.pos = new Vector((window.innerWidth / 2) - 190 + (47 * invPos), window.innerHeight - 30);
        this.name = 'hotBarItem'
    }
}

export class HpBar extends ScreenElement {
    onInitialize(engine) {
        // Initialization for HpBar
    }
}

export class Border extends ScreenElement {
    game
    constructor() {
        super();
        this.graphics.use(Resources.invBorder.toSprite());
        this.pos = new Vector((window.innerWidth / 2) - 190 + (47 * 0), window.innerHeight - 30);
        this.anchor = new Vector(0.5, 0.5);
        this.scale = new Vector(1.1, 1.1);
        this.z = 1000
    }

    onInitialize(engine) {
        this.game = engine
    }

    updateBorder() {
        this.pos = new Vector((window.innerWidth / 2) - 190 + (47 * this.game.hotBar.equipeditem), window.innerHeight - 30);

    }

}
