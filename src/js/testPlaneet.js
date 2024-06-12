import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene, ImageSource } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './Player.js';


export class testPlaneet extends Scene {
    constructor() {
        super();

        //Resources.ClassroomMap.addToScene(this);

    }

    onActivate() {
        let player = new Player
        this.add(player)

        let inventory = new Actor
        inventory.sprite = Resources.inventory.toSprite()
        inventory.pos = new Vector(700, 900)
        this.add(inventory)


        // Resources.Fish.addToScene(this);
    }


}