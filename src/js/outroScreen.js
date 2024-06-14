import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';


export class outroScreen extends Scene {
    constructor() {
        super();

    }

    onInitialize() {
        this.endLabel = new Label({
            text: `WEE WOO WEE WOO DE GAME IS OVER , YOU DEAD BITCH`,
            pos: new Vector(500, 400),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(this.endLabel)
    }
}