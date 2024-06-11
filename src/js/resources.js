import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { TiledResource } from '@excaliburjs/plugin-tiled';

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),

    //Sem
    Player: new ImageSource('images/Sem/testMan.png'),

    //Sil

    //Maaike

    //Marijn
    ClassroomMap: new TiledResource('images/Marijn/NewMap.tmx')

}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }