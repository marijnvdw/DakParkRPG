import '../../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene, ImageSource } from "excalibur";
import { Resources, ResourceLoader } from '../resources.js';
import { Player } from '../Player.js';
import { HealthPotion, Sword } from "../Item.js";
import { HotBar } from '../UI.js'


export class testPlaneet extends Scene {
    constructor() {
        super();
        this.character = new Player();

        Resources.ClassroomMap.addToScene(this);

        this.items = [
            { item: new HealthPotion(), x: 300, y: 100 },
            { item: new Sword(), x: 200, y: 200 }
        ];

        this.hotBar = new HotBar()
        this.add(this.hotBar)
    }

    onActivate() {
        this.add(this.character);

        let inventory = new Actor
        inventory.sprite = Resources.inventory.toSprite()
        inventory.pos = new Vector(700, 900)
        this.add(inventory)


        //Resources.Fish.addToScene(this);

        this.items.forEach((itemData) => {
            const itemActor = new Actor({
                pos: new Vector(itemData.x, itemData.y),
                width: 20,
                height: 20,
                color: Color.Red
            });

            itemActor.on('collisionstart', (evt) => {
                if (evt.other === this.character) {
                    this.character.addItemToInventory(itemData.item);
                    itemActor.kill();  // Remove item from scene
                }
            });

            this.add(itemActor);
        });
    }


}