import { Actor, Vector, ScreenElement, Sprite } from "excalibur";
import { Resources } from './resources.js';
import { Player } from "./Player.js";

export class HotBar extends ScreenElement {
    constructor(player) {
        super();
        this.player = player; // Reference to the player
        this.hotBarItems = [];
    }

    onInitialize(engine) {
        this.graphics.use(Resources.inventory.toSprite());
        this.scale = new Vector(1.2, 1.2);
        this.anchor = new Vector(0.5, 0.5);
        this.pos = new Vector(window.innerWidth / 2, window.innerHeight - 30);
        this.updateHotBarItems();
    }

    updateHotBarItems() {
        // Clear existing hotbar items
        this.hotBarItems.forEach(item => item.kill());
        this.hotBarItems = [];

        // Create new hotbar items based on player's inventory
        this.player.inventory.getItems().forEach((item, index) => {
            const itemActor = new HotBarItems(item, index);
            this.scene.add(itemActor);
            this.hotBarItems.push(itemActor);
        });
    }
}

export class HotBarItems extends ScreenElement {
    constructor(item, slot) {
        super();
        this.item = item;
        this.slot = slot;
    }

    onInitialize(engine) {
        const imageSource = this.item.image;
        imageSource.load().then(() => {
            const sprite = new Sprite({
                image: imageSource,
                destSize: { width: 32, height: 32 }
            });
            this.graphics.use(sprite);
            this.anchor = new Vector(0.5, 0.5);
            this.pos = new Vector(
                window.innerWidth / 2 - 135 + (this.slot * 30), 
                window.innerHeight - 55
            );
        }).catch((error) => {
            console.error('Error loading image source:', error);
        });
    }
}

export class HpBar extends ScreenElement {
    onInitialize(engine) {
        // Initialization for HpBar
    }
}
