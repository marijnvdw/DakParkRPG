import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class Gieter extends Actor {

    volume
    constructor() {
        super()
    }

    onInitialize() {
        this.volume = "empty"

    }
    Wateren() {
        if (this.volume === "full") {
            this.volume === "empty"
            this.scene.plotSlot.Water()
        }
    }

    Refill() {
        if (this.Volume === "empty") {
            this.volume === "full"
        }
    }
}