import { Actor, Vector, Keys, CollisionType } from "excalibur";
import { Resources } from './resources.js';
import { Inventory } from './Inventory.js';
import { Attack1 } from "./Sem/boss1Attacks.js";
import { Attack } from "./Sil/playerProjectile.js";

export class playerVisual extends Actor {
    dash = true;
    dashCD = 0;
    attackSpeed = 200
    attackCD = 0

    constructor() {
        super({ width: Resources.Player.width, height: Resources.Player.height, collisionType: CollisionType.Active });
        this.inventory = new Inventory();
        //CollisionType = true
    }

    onInitialize(engine) {
        this.sprite = Resources.Player.toSprite();
        this.graphics.use(this.sprite);
        this.scale = new Vector(0.5, 0.5);
        this.pos = new Vector(300, 300);
        //  this.on("collisionstart", (event) => this.interact(event))

        engine.input.pointers.primary.on('down', (event) => {
            this.Attack(event)
            console.log(this.scene)
        });
    }

    onPostUpdate(engine) {
        let LastDirectionHorizontal = 0
        let LastDirectionVertical = 0

        if (this.attackCD < this.attackSpeed) {
            this.attackCD++
        }
        let kb = engine.input.keyboard;

        //movement
        if (kb.isHeld(Keys.W)) {
            this.pos.y -= 0.7;
            this.LastDirectionVertical = 1
        }
        if (kb.isHeld(Keys.A)) {
            this.pos.x -= 0.7;
            this.LastDirectionHorizontal = 1
        }
        if (kb.isHeld(Keys.S)) {
            this.pos.y += 0.7;
            this.LastDirectionVertical = -1
        }
        if (kb.isHeld(Keys.D)) {
            this.pos.x += 0.7;
            this.LastDirectionHorizontal = -1
        }




        //dash mechanic
        if (kb.wasPressed(Keys.Space) && this.dash === true) {
            this.dash = false;
            if (kb.isHeld(Keys.W)) {
                this.pos.y -= 50;
            }
            if (kb.isHeld(Keys.A)) {
                this.pos.x -= 50;
            }
            if (kb.isHeld(Keys.S)) {
                this.pos.y += 50;
            }
            if (kb.isHeld(Keys.D)) {
                this.pos.x += 50;
            }
        }

        if (this.dashCD < 240) {
            this.dashCD++
        } else {
            this.dashCD = 0;
            this.dash = true;
        }
    }

    Attack(event) {
        if (this.attackCD >= this.attackSpeed) {
            this.PlayerAttack = new Attack(this.pos.x, this.pos.y,)
            this.scene.add(this.PlayerAttack)
            this.attackCD = 0
        }
    }
}
