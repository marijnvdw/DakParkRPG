import { Resource, ImageSource  } from "excalibur";
import { Resources } from './resources.js';


export class Item {
    constructor(name, description, imagePath, imageName) {
        this.name = name;
        this.description = description;
        this.image = imagePath;
        this.imageName = imageName;

        
    }

    use(character) {
        console.log(`${character.name} used ${this.name}`);
    }
}

export class HealthPotion extends Item {
    constructor() {
        super("Health Potion", "Restores health", Resources.apple, 'apple');//, Resources.apple
        
    }


    use(character) {
        character.health += 50;
        console.log(`${character.name} restored 50 health`);
    }

}

export class Sword extends Item {
    constructor() {
        super("Sword", "A sharp blade", Resources.sword, 'sword');
    }

    use(character) {
        character.attack += 10;
        console.log(`${character.name} attack increased by 10`);
    }
}
