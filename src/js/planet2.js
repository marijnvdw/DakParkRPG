import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene, BoundingBox, Sprite } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { HealthPotion, Trident } from "./Item.js";
import { HotBar, Border } from './UI.js'
import { playerVisual } from './playerVisual.js';
import { Portal, BeachHouse, PortalForest } from './Marijn/spawnables.js'

export class ForestPlaneet extends Scene {
    game
    constructor() {
        super();
        this.characterVisual = new playerVisual()

        Resources.Forest.addToScene(this);

        this.items = [
            { item: new HealthPotion(), x: 300, y: 800 },
        ];

        this.camera.strategy.lockToActor(this.characterVisual)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 2000, 2048))
        this.camera.zoom = 2
    }

    onInitialize(engine) {
        this.game = engine
        this.add(this.characterVisual);
        this.characterVisual.pos = new Vector(850, 230)
        this.hotBar = this.game.hotBar
        this.add(this.hotBar);
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