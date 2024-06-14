import '../../css/style.css';
import { Engine, Scene, Actor, Vector, Color, Sprite } from "excalibur";
import { Resources, ResourceLoader } from '../resources.js';
import { Player } from '../Player.js';
import { HealthPotion, Sword } from "../Item.js";
import { HotBar } from '../UI.js'
import { playerVisual } from '../playerVisual.js';
import { NPC } from '../npc.js'

export class testPlaneet extends Scene {
    constructor() {
        super();
        this.character = new Player();
        this.characterVisual = new playerVisual()
        this.Npc = new NPC

        Resources.ClassroomMap.addToScene(this);

        this.items = [
            { item: new HealthPotion(), x: 300, y: 100 },
            { item: new Sword(), x: 200, y: 200 }
        ];


    }

    onActivate() {
        this.add(this.character);
        this.add(this.characterVisual);
        this.add(this.Npc);

        // let inventory = new Actor
        // inventory.sprite = Resources.inventory.toSprite()
        // inventory.pos = new Vector(700, 900)
        // this.add(inventory)

        // //HotBarItems

        // let inventoryItems = new Actor
        // inventory.sprite = Resources.inventory.toSprite()
        // inventory.pos = new Vector(700, 900)
        // this.add(inventory)

        this.hotBar = new HotBar(this.character); // Create HotBar instance
        this.add(this.hotBar);

        this.items.forEach((itemData) => {

            const itemActor = new Actor({
                pos: new Vector(itemData.x, itemData.y),
                width: 32,
                height: 32
            });

            const imageSource = itemData.item.image;
            imageSource.load().then(() => {
                const sprite = new Sprite({
                    image: imageSource,
                    destSize: { width: 32, height: 32 } // Optional: Adjust size if needed
                });
                itemActor.graphics.use(sprite);
            }).catch((error) => {
                console.error('Error loading image source:', error);
            });

            itemActor.on('collisionstart', (evt) => {
                if (evt.other === this.characterVisual) {
                    this.character.addItemToInventory(itemData.item);
                    itemActor.kill();  // Remove item from scene
                }
            });

            this.add(itemActor);
        });
    }


}