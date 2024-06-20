import '../../css/style.css';
import { Engine, Scene, Actor, Vector, Color, Sprite, BoundingBox } from "excalibur";
import { Resources, ResourceLoader } from '../resources.js';
import { Player } from '../Player.js';
import { HealthPotion, Sword } from "../Item.js";
import { HotBar, Border } from '../UI.js'
import { playerVisual } from '../playerVisual.js';
import { NPC } from '../npc.js'
import { Portal, BeachHouse, PortalForest } from './spawnables.js'

export class testPlaneet extends Scene {
    game
    position
    constructor() {
        super();
        // this.character = player
        this.characterVisual = new playerVisual()
        this.Npc = new NPC
        this.portal = new Portal(1400, 850)
        this.gate = new PortalForest(40, 1800)
        this.beachHouse = new BeachHouse

        Resources.planet1back.addToScene(this);

        this.items = [
            { item: new HealthPotion(), x: 300, y: 800 },
            { item: new Sword(), x: 500, y: 200 }
        ];

        this.camera.strategy.lockToActor(this.characterVisual)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 2000, 2048))
        this.camera.zoom = 2
    }

    onInitialize(engine) {
        this.game = engine
        this.add(this.characterVisual);
        this.characterVisual.pos = new Vector(650, 200)
        this.add(this.Npc);
        this.add(this.portal);
        this.add(this.gate)
        this.add(this.beachHouse)

        // let inventory = new Actor
        // inventory.sprite = Resources.inventory.toSprite()
        // inventory.pos = new Vector(700, 900)
        // this.add(inventory)

        // //HotBarItems



        this.hotBar = this.game.hotBar
        this.add(this.hotBar);
        console.log(this.hotBar)

        this.border = this.game.border
        this.add(this.border);

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
                    this.engine.player.addItemToInventory(itemData.item);
                    itemActor.kill();  // Remove item from scene
                }
            });

            this.add(itemActor);
        });
    }
}