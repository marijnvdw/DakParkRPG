import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';


export class testPlaneet extends Scene {
    constructor(game) {
        super();

        // const fish = new Actor()
        // fish.graphics.use(Resources.Fish.toSprite())
        // fish.pos = new Vector(400, 300)
        // fish.vel = new Vector(-10,0)
        // this.add(fish)

        Resources.ClassroomMap.addToScene(this);

        // const tiledMap = new TiledResource('images/Marijn/school2.tmx');
        // const loader = new ex.Loader([tiledMap]);
        // game.start(loader).then(() => {
        // tiledMap.addToScene(game.currentScene);
        // });
   
    }
}