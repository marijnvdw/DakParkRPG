import '../css/style.css';
import { Actor, Engine, Vector, Label, Font, FontUnit, Color } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { introScreen } from './introScreen.js';  // Ensure this matches the actual filename
import { outroScreen } from './outroScreen.js';
import { testPlaneet } from './testPlaneet.js';
import { planet1 } from './planet1.js';
import { planet2 } from './planet2.js';
import { planet3 } from './planet3.js';

export class Game extends Engine {

    constructor() {
        super({width: 1920, height: 1080})
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame(){
        this.add('introScreen', new introScreen())
        this.add('planet1', new planet1())
        this.add('planet2', new planet2())
        this.add('planet3', new planet3())
        this.add('testPlaneet', new testPlaneet())
        this.add('outroScreen', new outroScreen())
        //this.goToScene('introScreen')
        this.goToScene('testPlaneet')
    }
}

new Game();
