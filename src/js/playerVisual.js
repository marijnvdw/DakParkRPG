import { Actor, Vector, Keys, CollisionType } from "excalibur";
import { Resources } from './resources.js';
import { Inventory } from './Inventory.js';
import { Attack1 } from "./Sem/boss1Attacks.js";
import { Attack } from "./Sil/playerProjectile.js";
import { Player } from "./Player.js";

export class playerVisual extends Actor {
    dash = true;
    dashCD = 0;
    attackSpeed = 200
    attackCD = 0
    LastDirectionHorizontal = 0
    LastDirectionVertical = 0

    constructor(player) {
        super({ width: Resources.Player.width / 1.5, height: Resources.Player.height / 1.5, collisionType: CollisionType.Active });
        this.inventory = new Inventory();
        this.player = Player
    }

    onInitialize(engine) {
        this.sprite = Resources.Player.toSprite();
        this.graphics.use(this.sprite);
        this.scale = new Vector(0.5, 0.5);
        this.pos = new Vector(300, 300);
        //  this.on("collisionstart", (event) => this.interact(event))

        engine.input.pointers.primary.on('down', (event) => {
            this.Attack(event)

        });
    }

    onPostUpdate(engine) {

        if (this.attackCD < this.attackSpeed) {
            this.attackCD++
        }
        let kb = engine.input.keyboard;

        //movement
        if (kb.isHeld(Keys.W)) {
            this.pos.y -= 7.7;
        }
        if (kb.isHeld(Keys.A)) {
            this.pos.x -= 7.7;
        }
        if (kb.isHeld(Keys.S)) {
            this.pos.y += 7.7;
        }
        if (kb.isHeld(Keys.D)) {
            this.pos.x += 7.7;

        }


        //dash mechanic
        if (kb.wasPressed(Keys.Space) && this.dash === true) {
            this.dash = false;
            if (kb.isHeld(Keys.W)) {
                this.pos.y -= 100;
            }
            if (kb.isHeld(Keys.A)) {
                this.pos.x -= 100;
            }
            if (kb.isHeld(Keys.S)) {
                this.pos.y += 100;
            }
            if (kb.isHeld(Keys.D)) {
                this.pos.x += 100;
            }
        }

        if (this.dashCD < 180) {
            this.dashCD++
        } else {
            this.dashCD = 0;
            this.dash = true;
        }
    }

    Attack(event) {
        if (this.attackCD >= this.attackSpeed) {
            this.PlayerAttack = new Attack(this.pos.x, this.pos.y)
            this.scene.add(this.PlayerAttack)
            this.attackCD = 0
        }
    }
}
