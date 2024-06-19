import '../../css/style.css';
import { Engine, Scene, Actor, Vector, BoundingBox, RotationType, ActionSequence, ParallelActions } from "excalibur";
import { Resources, ResourceLoader } from '../resources.js';
import { NPC } from '../npc.js'

export class Planet1Cutscene extends Scene {
    game
    constructor() {
        super();

        Resources.planet1back.addToScene(this);
    }

    onInitialize(engine) {
        this.game = engine
        this.game.currentScene.engine.clock.schedule(() => this.killScene(), 650)

        this.playerCutscene = new Actor({
            pos: new Vector(0, 0),
            scale: new Vector(0.2, 0.2),
            anchor: new Vector(0, 0.5),
            z: 1
        })
        this.playerCutscene.graphics.use(Resources.Player.toSprite())
        this.playerCutscene.actions.moveTo(new Vector(350, 200), 500).delay(150)
        this.add(this.playerCutscene)

        this.cloud = new Actor({
            z: 2
        })
        this.cloud.graphics.use(Resources.Cloud.toSprite())
        this.cloud.scale = new Vector(0.5, 0.5)
        this.cloud.pos = new Vector(80, 170)
        this.playerCutscene.addChild(this.cloud)

        this.camera.strategy.lockToActor(this.playerCutscene)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 2000, 2048))
        this.camera.zoom = 2.5

    }

    killScene() {
        const kill = new ActionSequence(this.cloud, ctx => {
            ctx.delay(200)
            this.cloud.kill()
        })
        const movement = new ActionSequence(this.playerCutscene, ctx => {
            ctx.moveBy(new Vector(300, 0), 350);
        });
        const rotate = new ActionSequence(this.playerCutscene, ctx => {
            ctx.rotateBy(Math.PI / 2, 8, RotationType.Clockwise);
        });
        const parallel = new ParallelActions([movement, rotate, kill])

        this.playerCutscene.actions.runAction(parallel)
    }
}

