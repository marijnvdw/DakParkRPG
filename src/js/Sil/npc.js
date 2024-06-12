import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';


export class NPC extends Scene {
    dialoog
    constructor() {
        super();
    }

    onInitialize() {
        const sprite = Resources.NPC.toSprite()
        this.graphics.use(sprite)

    }
}