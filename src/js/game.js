import '../css/style.css';
import { Actor, Engine, Vector, Label, Font, FontUnit, Color, FadeInOut, ArcadeSolver } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { introScreen } from './introScreen.js';  // Ensure this matches the actual filename
import { outroScreen } from './outroScreen.js';
import { testPlaneet } from './Marijn/testPlaneet.js';
import { planet1 } from './planet1.js';
import { planet2 } from './planet2.js';
import { planet3 } from './planet3.js';
import { homeBase } from './homeBase.js';

export class Game extends Engine {


    constructor() {
        super({
            width: window.innerWidth, height: window.innerHeight,
        })
        this.start(ResourceLoader).then(() => this.startGame())
        this.debugMode = true
    }

    startGame() {
        let transitions = {
            out: new FadeInOut({ duration: 400, direction: 'out', color: Color.Black }),
            in: new FadeInOut({ duration: 400, direction: 'in', color: Color.Black })
        }

        this.add('introScreen', { scene: new introScreen(), transitions })
        this.add('planet1', { scene: new planet1(), transitions })
        this.add('planet2', { scene: new planet2(), transitions })
        this.add('planet3', { scene: new planet3(), transitions })
        this.add('testPlaneet', { scene: new testPlaneet(), transitions })
        this.add('outroScreen', { scene: new outroScreen(), transitions })
        //this.goToScene('introScreen')
        this.goToScene('planet1')
    }
}

new Game();
