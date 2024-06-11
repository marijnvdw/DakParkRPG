import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),

    //Sem
    Player: new ImageSource('images/Sem/testMan.png'),
    Boss1: new ImageSource('images/Sem/orb2.png'),

    //Sil

    //Maaike

    //Marijn

}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }