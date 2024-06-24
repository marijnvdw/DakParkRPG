import { Resource, ImageSource, Vector, Actor } from "excalibur";
import { Resources } from './resources.js';
import { vector } from "excalibur/build/dist/Util/DrawUtil.js";


export class Item extends Actor {
    constructor(name, description, imagePath, imageName, scaleTexture) {
        super()
        this.name = name;
        this.description = description;
        this.image = imagePath;
        this.imageName = imageName;
        this.scaleTexture = scaleTexture;
    }
    onInitialize(engine) {
        this.game = engine
    }

    use() {
        console.log(`${this.game.currentScene.player.name} used ${this.name}`);
    }
}

export class HealthPotion extends Item {
    constructor() {
        super("HealthPotion", "Restores health", Resources.apple, 'apple', new Vector(0.05, 0.05));//, Resources.apple
    }
    use() {
        this.game.player.hp += 10;
        console.log(`${this.game.player.name} restored 10 health`);
    }

}

export class Trident extends Item {
    constructor() {
        super("Trident", "A pitchfork like weapon, good in water", Resources.sword, 'Trident', new Vector(0.02, 0.02));
    }

    use() {
        this.game.player.Dmg += 10;
        console.log(`${this.game.player.name} attack increased by 10`);
    }
}
