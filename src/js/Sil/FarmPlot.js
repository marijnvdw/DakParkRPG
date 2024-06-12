import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Crops } from './Crops.js';

export class FarmPlot extends Actor {
    Wetness
    used
    onInitialize() {
        used = false
        const sprite = Resources.(-).toSprite()
        this.graphics.use(sprite)
    }

    interactionHandeler() {
        let inventory = this.scene.player.children
        if (this.used === false && inventory.instanceof Crops) {
        }
    }




    Water() {
        // this.(Crop).grow()
    }
}