import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './Player.js';


export class introScreen extends Scene {
    constructor() {
        super();

    }

    onActivate() {
        let player = new Player
        this.add(player)
    }
}