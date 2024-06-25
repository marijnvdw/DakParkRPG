import { Actor } from 'excalibur';
import { HotBar, Border } from './UI.js'

export class Inventory extends Actor {
    border
    game
    hotBarItem
    constructor() {
        super()
        this.items = [];
    }

    onInitialize(engine) {
        this.game = engine
        this.border = this.game.Border
    }


    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        console.log('hoi')
        if (item > -1) {
            this.items.splice(item, item);
            console.log(this.items)
            this.game.currentScene.hotBar.OnKeyPress(10); // Update HotBar
            this.game.border.updateBorder()
        }
    }

    useItem(item) {
        if (this.items[item].name === 'Backpack') {
            console.log('nein')
            return;
        }
        let toUse = (this.items[item].name)
        console.log(toUse)
        this.game[toUse].use()
        console.log(this.game.player.hp)
        this.removeItem(item)
        this.game.hotBar.equipeditem--
        this.game.border.updateBorder
    }

    getItems() {
        return this.items;
    }
}
