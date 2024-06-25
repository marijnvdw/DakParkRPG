import { Actor, Vector, Keys, CollisionType, Animation, Input, Buttons, Axes } from "excalibur";
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
    game

    constructor(player) {
        super({ width: Resources.Player.width / 4, height: Resources.Player.height / 1.5, collisionType: CollisionType.Active });
        this.inventory = new Inventory();
        this.player = player
        this.z = 100
    }

    onInitialize(engine) {
        this.sprite = Resources.Player.toSprite();
        this.graphics.use(this.sprite);
        this.scale = new Vector(0.25, 0.25);
        this.game = engine
        // this.gamepad = engine.input.gamepads;
        //  this.on("collisionstart", (event) => this.interact(event))

        this.game.input.gamepads.at(0).on('button', (evt) => {
            if (evt.Button === Buttons.RightTrigger) {
                this.Attack()
            }
        })

        const animationBackwards = new Animation({
            frames: [
                {
                    graphic: Resources.Back.toSprite(),
                    duration: 100,
                },
                {
                    graphic: Resources.Backwalk.toSprite(),
                    duration: 200,
                },
            ],
        });
        this.animationBackwards = animationBackwards;

        const animationright = new Animation({
            frames: [
                {
                    graphic: Resources.Side.toSprite(),
                    duration: 100,

                },
                {
                    graphic: Resources.Sidewalk.toSprite(),
                    duration: 200,
                },
            ],
        });
        this.animationright = animationright;

        const animationleft = new Animation({
            frames: [
                {
                    graphic: Resources.Side.toSprite(),
                    duration: 100,
                },
                {
                    graphic: Resources.Sidewalk.toSprite(),
                    duration: 200,
                },
            ],
        });
        this.animationleft = animationleft;

        const animationFront = new Animation({
            frames: [
                {
                    graphic: Resources.Player.toSprite(),
                    duration: 100,
                },
                {
                    graphic: Resources.Frontwalk.toSprite(),
                    duration: 200,
                },
            ],
        });
        this.animationFront = animationFront;
    }

    // onPreUpdate(engine) {
    //     if (!engine.mygamepad) {
    //         console.log("No gamepad connected");
    //         return;
    //     }


    onPostUpdate(engine) {

        
        if (!engine.mygamepad) {
            return;
        }
        let yAxis = engine.mygamepad.getAxes(Axes.LeftStickX)
        let xAxis = engine.mygamepad.getAxes(Axes.LeftStickY);
        if (this.attackCD < this.attackSpeed) {
            this.attackCD++
        }
        //  let kb = engine.input.keyboard;
        if (this.game.player.moveAble === true) {
            if (yAxis > 0.5) {
                this.pos.x += 2;
                this.graphics.use(this.animationright);
                this.graphics.flipHorizontal = true;
            } else if (yAxis < -0.5) {
                this.pos.x -= 2;
                this.graphics.use(this.animationleft);
                this.graphics.flipHorizontal = false;
            }

            if (xAxis > 0.9) {
                this.pos.y += 2;
                this.graphics.use(this.animationFront);
            } else if (xAxis < -0.9) {
                this.pos.y -= 2;
                this.graphics.use(this.animationBackwards);
            }

            //dash mechanic
            if (engine.mygamepad.isButtonPressed(Buttons.Face1) && this.dash === true) {
                this.dash = false;
                if (xAxis < -0.5) {
                    this.pos.y -= 100;
                }
                if (yAxis < -0.5) {
                    this.pos.x -= 100;
                }
                if (xAxis > 0.5) {
                    this.pos.y += 100;
                }
                if (yAxis > 0.5) {
                    this.pos.x += 100;
                }
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
            this.game.currentScene.add(this.PlayerAttack)
            this.attackCD = 0
        }
    }
}