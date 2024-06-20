import { Actor } from 'excalibur';
import { HotBar } from './UI.js'

export class Inventory extends Actor {
    game
    constructor() {
        super()
        this.items = [];
    }

    onInitialize(engine) {
        this.game = engine
    }


    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    useItem(item) {
        //   console.log(`Using`, this.game[this.items[item]]);
        //  console.log(this.game[this.items].use)
        console.log(this.items[item])

    }

    getItems() {
        return this.items;
    }
}
