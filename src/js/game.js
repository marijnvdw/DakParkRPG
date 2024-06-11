import '../css/style.css';
import { Actor, Engine, Vector, Label, Font, FontUnit, Color } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { introScreen } from './introScreen.js';
import { outroScreen } from './outroScreen.js';

export class Game extends Engine {

    constructor() {
        super({ width: window.innerWidth, height: window.innerHeight })
        this.start(ResourceLoader).then(() => this.startGame())
        this.debugMode = true
    }

    startGame() {
        this.add('introScreen', new introScreen())
        this.add('planet1', new planet1())
        this.add('planet2', new planet2())
        this.add('planet3', new planet3())
        this.add('homeBase', new homeBase())
        this.add('outroScreen', new outroScreen())
        this.goToScene('homeBase')
    }
}

new Game();