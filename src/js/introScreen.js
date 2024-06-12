import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './Player.js';
import { Boss1 } from './Sem/boss1.js';


export class introScreen extends Scene {
    constructor() {
        super()

    }

    onInitialize() {
        const bg = new Actor({
            pos: new Vector(0, 0),
            scale: new Vector(0.8, 0.8),
        })
        bg.graphics.use(Resources.Galaxy.toSprite())
        this.add(bg)

        let beachPlanet = new Actor({
            pos: new Vector(window.innerWidth - 180, window.innerHeight / 2)
        })
        beachPlanet.graphics.use(Resources.BeachPlanet.toSprite())
        beachPlanet.scale = new Vector(3, 3)
        beachPlanet.graphics.flipHorizontal = true
        this.add(beachPlanet)

        let player = new Player
        player.pos = new Vector(100, window.innerHeight / 2)
        player.anchor = new Vector(0, 0.5)
        player.actions.moveTo(new Vector(1070, 330), 300)
        player.actions.scaleTo(new Vector(0.05, 0.05), new Vector(0.5, 0.5)).die()
        this.add(player)

        let cloud = new Actor({
            pos: new Vector(window.innerWidth - 180, window.innerHeight / 2)
        })
        cloud.graphics.use(Resources.Cloud.toSprite())
        cloud.scale = new Vector(0.5, 0.5)
        cloud.pos = new Vector(80, 170)
        player.addChild(cloud)
    }


}