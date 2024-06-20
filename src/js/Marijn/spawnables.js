import '../../css/style.css';
import { Actor, Vector, Keys, KeyEvent, Text, CollisionType, Scene } from "excalibur";
import { Resources, ResourceLoader } from '../resources.js';
import { Player } from '../Player.js';
import { playerVisual } from '../playerVisual.js';


export class Portal extends Actor {
    game;

    constructor(x, y) {
        super({ width: Resources.Portal.width / 1.5, height: Resources.Portal.width });
        this.pos = new Vector(x, y)
    }

    onInitialize(engine) {
        this.sprite = Resources.Portal.toSprite()
        this.graphics.use(this.sprite)
        this.scale = new Vector(0.07, 0.07)
        this.z = 1000
        this.game = engine

        this.on('collisionstart', (event) => this.enterPortal(event))
    }

    enterPortal(event) {
        if (event.other instanceof playerVisual) {
            this.scene.actors.forEach(actor => {
                this.game.currentScene.engine.clock.schedule(() => actor.kill(), 320)
            })
            this.game.goToScene('planet1');
        }
    }
}

export class PortalForest extends Actor {
    game;

    constructor(x, y) {
        super({ width: Resources.Portal.width / 1.5, height: Resources.Portal.width });
        this.pos = new Vector(x, y)
    }

    onInitialize(engine) {
        this.sprite = Resources.Portal.toSprite()
        this.graphics.use(this.sprite)
        this.scale = new Vector(0.06, 0.03)
        this.z = 1000
        this.game = engine

        this.on('collisionstart', (event) => this.enterPortal(event))
    }

    enterPortal(event) {
        if (event.other instanceof playerVisual) {
            this.scene.actors.forEach(actor => {
                this.game.currentScene.engine.clock.schedule(() => actor.kill(), 320)
            })
            this.game.goToScene('planet1');
        }
    }
}

export class BeachHouse extends Actor {
    game;

    constructor() {
        super({ width: Resources.House.width / 1.7, height: Resources.House.height / 2.5, collisionType: CollisionType.Fixed });
    }

    onInitialize(engine) {
        this.sprite = Resources.House.toSprite()
        this.graphics.use(this.sprite)
        this.graphics.flipHorizontal = true
        this.pos = new Vector(230, 300)
        this.scale = new Vector(0.7, 0.7)
        this.game = engine

        this.on('collisionstart', (event) => this.enterHouse(event))
    }

    enterHouse(event) {
        if (event.other instanceof playerVisual) {
            this.scene.actors.forEach(actor => {
                this.game.currentScene.engine.clock.schedule(() => actor.kill(), 320)
            })
            this.game.goToScene('planet1');
        }
    }
}

export class BeachHouseInside extends Scene {
    game;

    constructor() {
        super();
    }

    onInitialize(engine) {
        this.game = engine
    }

    ExitHouse() {
        this.scene.actors.forEach(actor => {
            this.game.currentScene.engine.clock.schedule(() => actor.kill(), 320)
        })
        this.game.goToScene('planet1');
    }
}