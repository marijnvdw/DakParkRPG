import '../../css/style.css';
import { Engine, Scene, Actor, Vector, Color, Sprite, BoundingBox } from "excalibur";
import { Resources, ResourceLoader } from '../resources.js';
import { Player } from '../Player.js';
import { HealthPotion, Sword } from "../Item.js";
import { HotBar } from '../UI.js'
import { playerVisual } from '../playerVisual.js';
import { NPC } from '../npc.js'
import { Portal } from './portal.js'

export class testPlaneet extends Scene {
    constructor() {
        super();
        this.character = new Player();
        this.characterVisual = new playerVisual(this.character)
        this.Npc = new NPC
        this.portal = new Portal

        Resources.planet1back.addToScene(this);

        this.items = [
            { item: new HealthPotion(), x: 300, y: 800 },
            { item: new Sword(), x: 200, y: 200 }
        ];

        console.log(this)
        this.camera.strategy.lockToActor(this.characterVisual)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 2000, 1200))
        this.camera.zoom = 1.1


    }

    onActivate() {
        this.add(this.character);
        this.add(this.characterVisual);
        this.add(this.Npc);
        this.add(this.portal);

        // let inventory = new Actor
        // inventory.sprite = Resources.inventory.toSprite()
        // inventory.pos = new Vector(700, 900)
        // this.add(inventory)

        // //HotBarItems



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
                    destSize: { width: 64, height: 64 } // Optional: Adjust size if needed
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

        // let inventoryItems = new Actor
        // inventoryItems.sprite = Resources.Cloud.toSprite()
        // inventoryItems.pos = new Vector(800, 900)
        // this.add(inventoryItems)
    }


}