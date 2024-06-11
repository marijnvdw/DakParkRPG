import '../css/style.css';
import { Actor, Engine, Vector, Label, Font, FontUnit, Color } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { introScreen } from './introScreen.js';
import { outroScreen } from './outroScreen.js';

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
        this.add('outroScreen', new outroScreen())
        this.goToScene('introScreen')
    }
}

new Game();