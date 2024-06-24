import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { TiledResource } from '@excaliburjs/plugin-tiled';

// voeg hier jouw eigen resources toe
const Resources = {
    //Sem
    Player: new ImageSource('images/Sem/fPlayer.png'),
    NPC: new ImageSource('images/Sem/orb3.png'),
    Boss1: new ImageSource('images/Sem/orb2.png'),
    BeachPlanet: new ImageSource('images/Sem/beachPlanet.png'),
    Cloud: new ImageSource('images/Sem/cloud.png'),
    Galaxy: new ImageSource('images/Sem/galaxy.jpg'),
    Portal: new ImageSource('images/Sem/portal.png'),
    Portal2: new ImageSource('images/Sem/portal2.png'),
    House: new ImageSource('images/Sem/strandhuis.png'),
    TextBox: new ImageSource('images/Sem/textBox.png'),
    Backpack: new ImageSource('images/Sem/backpack.png'),
    Forest: new TiledResource('images/Sem/Tilemap/forestworld.tmx'),

    //Sil
    Krab: new ImageSource('images/Sil/krab.png'),
    leeg: new ImageSource('images/Sil/leeg.png'),
    //Maaike
    planet1back: new TiledResource('images/Maaike/Planet1-backrgound.tmx'),//C:\Users\mvdwa\DakParkRPG\public\images\Maaike\Planet1-backrgound.tmx
    Back: new ImageSource('images/Maaike/back.png'),
    Side: new ImageSource('images/Maaike/Side.png'),
    Backwalk: new ImageSource('images/Maaike/back_walking.png'),
    Sidewalk: new ImageSource('images/Maaike/side_walking.png'),
    Frontwalk: new ImageSource('images/Maaike/walking_front.png'),

    //Marijn
    ClassroomMap: new TiledResource('images/Marijn/NewMap.tmx'),
    inventory: new ImageSource('images/Marijn/inv.png'),
    apple: new ImageSource('images/Marijn/apple.png'),
    sword: new ImageSource('images/Marijn/sword.png'),
    invBorder: new ImageSource('images/Marijn/invborder.png')

}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }