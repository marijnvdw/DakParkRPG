import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './Player.js';
import { playerVisual } from './playerVisual.js';
import { Boss1 } from './Sem/boss1.js';
import { HotBar } from './UI.js';


export class planet1 extends Scene {
    game
    constructor() {
        super();
    }

    onInitialize(engine) {
        Resources.UnderDeWater.addToScene(this);
        this.game = engine
        let Visual = new playerVisual()
        this.add(Visual)
        let boss = new Boss1()
        this.add(boss)
        this.hotBar = this.game.hotBar
        this.add(this.hotBar);
        this.game.currentScene.hotBar.OnKeyPress(10); // Update HotBar
        this.border = this.game.border
        this.add(this.border);
    }
}