import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { TiledResource } from '@excaliburjs/plugin-tiled';

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),

    //Sem
    Player: new ImageSource('images/Sem/fPlayer.png'),
    NPC: new ImageSource('images/Sem/orb3.png'),
    Boss1: new ImageSource('images/Sem/orb2.png'),
    BeachPlanet: new ImageSource('images/Sem/beachPlanet.png'),
    Cloud: new ImageSource('images/Sem/cloud.png'),
    Galaxy: new ImageSource('images/Sem/galaxy.jpg'),

    //Sil

    //Maaike

    //Marijn
    ClassroomMap: new TiledResource('images/Marijn/NewMap.tmx'),
    inventory: new ImageSource('images/Marijn/inv.png'),
    apple: new ImageSource('images/Marijn/apple.png'),
    sword: new ImageSource('images/Marijn/sword.png')

}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }