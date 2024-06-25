import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from '../resources.js';


export class gameWon extends Scene {
    constructor() {
        super();

    }

    onInitialize() {
        this.endLabel = new Label({
            text: `Je hebt de krab verslagen en dakpark bevrijd!`,
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