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




    use(equiped) {
        this.game.currentScene.player.health += 10;
        console.log(`${this.game.currentScene.player.name} restored 10 health`);
    }

}

export class Sword extends Item {
    constructor() {
        super("Sword", "A sharp blade", Resources.sword, 'sword', new Vector(0.02, 0.02));
    }

    use() {
        this.game.currentScene.player.dmg += 10;
        console.log(`${this.game.currentScene.player.name} attack increased by 10`);
    }
}

export class Backpack extends Item {
    constructor() {
        super("Backpack", "A strangers backpack", Resources.Backpack, 'Backpack', new Vector(0.02, 0.02));
    }

    use() {
        //console.log(`${this.game.currentScene.player.name} attack increased by 10`);
    }
}
