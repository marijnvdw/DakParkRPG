import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene, BoundingBox } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './Player.js';
import { playerVisual } from './playerVisual.js';
import { Boss1 } from './Sem/boss1.js';
import { HotBar } from './UI.js';
import { NPC2 } from './npc2.js'
import { PortalDakpark } from '../js/Marijn/spawnables.js'


export class Dakpark extends Scene {
    game
    characterVisual
    constructor() {
        super();
        this.characterVisual = new playerVisual()
        this.Npc2 = new NPC2
        this.portal = new PortalDakpark(3900, 800)
    }

    onInitialize(engine) {
        this.add(this.Npc2);
        this.add(this.portal);
        Resources.dakparkBack.addToScene(this);

        this.game = engine
       // let Visual = new playerVisual()
        this.add(this.characterVisual)
        this.characterVisual.pos = new Vector(100,800)
        
        this.hotBar = this.game.hotBar
        this.add(this.hotBar);
        this.game.currentScene.hotBar.OnKeyPress(10); // Update HotBar
        this.border = this.game.border
        this.add(this.border);

        this.camera.strategy.lockToActor(this.characterVisual)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 4080, 1000))
        this.camera.zoom = 2

        
    }
}