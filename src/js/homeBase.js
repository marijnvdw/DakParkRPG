import '../css/style.css';
import { Actor, Vector, Label, Font, FontUnit, Color, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { PickupItem } from './Sil/pickupItems.js';


export class homeBase extends Scene {
    constructor() {
        super();
    }

    onInitialize() {
        let item = new PickupItem(Fish)
        this.add(item)
    }
}