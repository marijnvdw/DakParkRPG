import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './Player.js';
import { Boss1 } from './Sem/boss1.js';


export class introScreen extends Scene {
    constructor() {
        super();

    }

    onActivate() {
        let player = new Player
        this.add(player)
        let boss = new Boss1
        this.add(boss)
    }
}