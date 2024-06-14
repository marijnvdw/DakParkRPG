import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene, RotationType, FadeInOut } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { NPC } from './npc.js'


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

        this.engine.clock.schedule(() => this.sceneSwitch(), 5000)

        let beachPlanet = new Actor({
            pos: new Vector(window.innerWidth - 180, window.innerHeight / 2)
        })
        beachPlanet.graphics.use(Resources.BeachPlanet.toSprite())
        beachPlanet.scale = new Vector(3, 3)
        beachPlanet.graphics.flipVertical = true
        beachPlanet.actions.rotateBy(Math.PI / 2, Math.PI * 0.1, RotationType.CounterClockwise)
        this.add(beachPlanet)

        let player = new Actor({
            pos: new Vector(100, window.innerHeight / 2),
            scale: new Vector(0.5, 0.5),
            anchor: new Vector(0, 0.5),
        })
        player.graphics.use(Resources.Player.toSprite())
        player.actions.moveTo(new Vector(1120, 330), 300)
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

    sceneSwitch() {
        this.engine.goToScene('testPlaneet')
    }
}