export class Item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        
    }

    use(character) {
        // Default use action
        console.log(`${character.name} used ${this.name}`);
    }

    
}

export class HealthPotion extends Item {
    constructor() {
        super("Health Potion", "Restores health");
        
    }


    use(character) {
        character.health += 50;
        console.log(`${character.name} restored 50 health`);
        
    }

}

export class Sword extends Item {
    constructor() {
        super("Sword", "A sharp blade");
        
    }

    use(character) {
        character.attack += 10;
        console.log(`${character.name} attack increased by 10`);
    }
}
