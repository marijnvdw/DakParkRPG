import { Resource, ImageSource, Vector  } from "excalibur";
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
        super("Health Potion", "Restores health", Resources.apple, 'apple', new Vector(0.05,0.05));//, Resources.apple
        
    }




    use(character) {
        character.health += 50;
        console.log(`${character.name} restored 50 health`);
    }

}

export class Sword extends Item {
    constructor() {
        super("Sword", "A sharp blade", Resources.sword, 'sword', new Vector(0.02,0.02));
    }

    use(character) {
        character.attack += 10;
        console.log(`${character.name} attack increased by 10`);
    }
}
