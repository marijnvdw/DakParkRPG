import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene, BoundingBox, Sprite } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Backpack, HealthPotion, Sword } from "./Item.js";
import { HotBar, Border } from './UI.js'
import { playerVisual } from './playerVisual.js';
import { PortalForestBack } from './Marijn/spawnables.js'

export class ForestPlaneet extends Scene {
    game
    constructor() {
        super();
        this.characterVisual = new playerVisual()

        Resources.Forest.addToScene(this);

        this.items = [
            { item: new Backpack(), x: 545, y: 600 },
        ];

        this.camera.strategy.lockToActor(this.characterVisual)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 1024, 1024))
        this.camera.zoom = 2
    }

    onInitialize(engine) {
        this.game = engine
        this.add(this.characterVisual);
        this.portal = new PortalForestBack(880, 630)
        this.add(this.portal)

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
                    destSize: { width: 32, height: 32 } // Optional: Adjust size if needed
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

    onActivate() {
        this.game.currentScene.hotBar.OnKeyPress(10)
        this.characterVisual.pos = new Vector(790, 630)
    }
}