import { Resource, ImageSource, Vector } from "excalibur";
import { Resources } from './resources.js';
import { vector } from "excalibur/build/dist/Util/DrawUtil.js";


export class Item {
    constructor(name, description, imagePath, imageName, scaleTexture) {
        this.name = name;
        this.description = description;
        this.image = imagePath;
        this.imageName = imageName;
        this.scaleTexture = scaleTexture;
    }

    use(character) {
        console.log(`${character.name} used ${this.name}`);
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

export class Backpack extends Item {
    constructor() {
        super("Backpack", "A strangers backpack", Resources.Backpack, 'Backpack', new Vector(0.02, 0.02));
    }

    use() {

    }
}
