import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './Player.js';
import { playerVisual } from './playerVisual.js';
import { Boss1 } from './Sem/boss1.js';


export class planet3 extends Scene {
    constructor() {
        super();

    }
    onInitialize() {
        let Visual = new playerVisual()
        this.add(Visual)
        let boss = new Boss1()
        this.add(boss)
    }
}