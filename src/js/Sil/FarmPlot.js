import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class FarmPlot extends Actor {
    onInitialize() {

    }


    Water() {
        this.Crop.grow()
    }
}