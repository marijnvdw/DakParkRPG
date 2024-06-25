import '../css/style.css';
import { Actor, Engine, Vector, Label, Font, FontUnit, Color, FadeInOut, ArcadeSolver, Input, Buttons, Axes } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { introScreen } from './introScreen.js';  // Ensure this matches the actual filename
import { outroScreen } from './outroScreen.js';
import { testPlaneet } from './Marijn/testPlaneet.js';
import { planet1 } from './planet1.js';
import { ForestPlaneet } from './planet2.js';
import { planet3 } from './planet3.js';
import { Planet1Cutscene } from './Sem/cutscene1.js';
import { Player } from './Player.js';
import { HotBar, Border } from './UI.js';
import { Item, HealthPotion, Trident } from './Item.js'
import { Inventory } from './Inventory.js';
import { gameWon } from './Sil/gameWon.js';
import { Dakpark } from './Dakpark.js';


export class Game extends Engine {

    player
    hotBar
    border
    healthpot
    Sword
    mygamepad

    constructor() {
        super({
            width: window.innerWidth, height: window.innerHeight,

        })
        this.start(ResourceLoader).then(() => this.startGame())
        this.debugMode = true
    }

    startGame() {

        this.input.gamepads.enabled = true
        this.input.gamepads.on('connect', (connectevent) => {
            console.log("gamepad detected")
            this.mygamepad = connectevent.gamepad
            console.log(this.mygamepad)

            let yAxis = this.mygamepad.getAxes(Axes.LeftStickX)
            let xAxis = this.mygamepad.getAxes(Axes.LeftStickY);
            console.log(xAxis, yAxis)
        })
        this.player = new Player();
        this.add(this.player)
        this.hotBar = new HotBar(this.player); // Create HotBar instance
        this.add(this.hotBar);
        this.HealthPotion = new HealthPotion()
        this.add(this.HealthPotion)
        this.Trident = new Trident()
        this.add(this.Trident)
        this.border = new Border()
        this.add(this.border)






        let transitions = {
            out: new FadeInOut({ duration: 400, direction: 'out', color: Color.Black }),
            in: new FadeInOut({ duration: 400, direction: 'in', color: Color.Black })
        }

        this.add('introScreen', { scene: new introScreen(), transitions })
        this.add('planet1', { scene: new planet1(), transitions })
        this.add('planet2', { scene: new ForestPlaneet(), transitions })
        this.add('planet3', { scene: new planet3(), transitions })
        this.add('gameWon', { scene: new gameWon(), transitions })
        this.add('testPlaneet', { scene: new testPlaneet(), transitions })
        this.add('outroScreen', { scene: new outroScreen(), transitions })
        this.add('planet1Cutscene', { scene: new Planet1Cutscene(), transitions })
        this.add('Dakpark', { scene: new Dakpark(), transitions })
        //this.goToScene('introScreen')
        setTimeout(() => {
            this.goToScene('introScreen',)
            this.goToScene('Dakpark',)
        }, 500)
    }
}

new Game();
