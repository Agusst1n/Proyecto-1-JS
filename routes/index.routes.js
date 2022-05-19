const urlActual = window.location.hash //con esto obtengo la URL Actual
console.log(urlActual)
let id = urlActual.slice(2,38) //con el slice le saco los 2 primeros caracteres que son un '#/'
console.log(id, 'el ide')


import characters from '../pages/personajes/characters.js'
import home from '../pages/home.js'
import characterFetch from '../pages/personajes/characterFetch.js' //importo el caracterFetch
import overlay from '../overlay/overlay.js'
import overlay2 from '../overlay/overlay2.js'
import overlay3 from '../overlay/overlay3.js'
import script from '../overlay/script.js'

//HOVER
import hoverAnimation from '../hover/hoverAnimation.js'
// import hoverAnimation2 from '../hover/hoverAnimation2.js'

//MAPAS
import mapas from '../pages/mapas/mapas.js'
import mapasFetch from '../pages/mapas/mapasFetch.js'
let root = document.querySelector('#root')

//ARMAS
import armas from '../pages/armas/armas.js'
import armasFetch from '../pages/armas/armasFetch.js'
const cards = document.querySelector('.cards')

const router = (route)=>{

    root.textContent = '' //lo que hace es que cada vez que entre no se vuelva a pintar lo mismo una y otra vez

    switch (route){

        //!CASE HOME

        case '#/':{ // si esta en la ruta principal quiero que
            // root.appendChild(overlay());
            document.body.appendChild(overlay())
            document.body.appendChild(overlay2()) //renderize los 3 overlay
            document.body.appendChild(overlay3())
            root.appendChild(home()) //que al root le agregue el componente home (contiene las 3 cards [armas,personajes y mapas])
            document.body.appendChild(hoverAnimation()) //le digo que las cards van a tener la animacion del hover
            document.body.appendChild(script()) //y aca esta su script para que funcionen
            break;
        }
        case '#/armas':{//cuando este en la ruta armas
            document.body.appendChild(overlay()) 
            document.body.appendChild(overlay2()) //van a cargar los 3 overlays
            document.body.appendChild(overlay3())
            root.appendChild(armas()) //agrego al root el componente armas
            document.body.appendChild(script()) //este script hace que los overlay funcionen
            break;
        }
        case '#/personajes':{ //cuando este en la ruta personajes
            document.body.appendChild(overlay())
            document.body.appendChild(overlay2())//van a cargar los 3 overlays
            document.body.appendChild(overlay3())
            root.appendChild(characters())//agrego al root el componente personajes
            document.body.appendChild(script())//este script hace que los overlay funcionen
            break;
        }
        case '#/mapas':{//cuando este en la ruta mapas
            document.body.appendChild(overlay())
            document.body.appendChild(overlay2())//van a cargar los 3 overlays
            document.body.appendChild(overlay3())
            root.appendChild(mapas())//agrego al root el componente mapas
            document.body.appendChild(script())//este script hace que los overlay funcionen
            break;
        }
        
        //!CASE DE LOS PERSONAJES
        case '#/dade69b4-4f5a-8528-247b-219e5a1facd6':{  //*cuando este en esta ruta fade
            return root.appendChild(characterFetch('dade69b4-4f5a-8528-247b-219e5a1facd6'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/5f8d3a7f-467b-97f3-062c-13acf203c006':{ //*cuando este en esta ruta breach
            return root.appendChild(characterFetch('5f8d3a7f-467b-97f3-062c-13acf203c006'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/f94c3b30-42be-e959-889c-5aa313dba261':{ //*cuando este en esta ruta raze
            return root.appendChild(characterFetch('f94c3b30-42be-e959-889c-5aa313dba261'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/22697a3d-45bf-8dd7-4fec-84a9e28c69d7':{ //*cuando este en esta ruta (chamber)
            return root.appendChild(characterFetch('22697a3d-45bf-8dd7-4fec-84a9e28c69d7'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/601dbbe7-43ce-be57-2a40-4abd24953621':{//*cuando este en esta ruta kayo
            return root.appendChild(characterFetch('601dbbe7-43ce-be57-2a40-4abd24953621'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/6f2a04ca-43e0-be17-7f36-b3908627744d':{ //*cuando este en esta ruta skye
            return root.appendChild(characterFetch('6f2a04ca-43e0-be17-7f36-b3908627744d'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/117ed9e3-49f3-6512-3ccf-0cada7e3823b':{//*cuando este en esta ruta cypher
            return root.appendChild(characterFetch('117ed9e3-49f3-6512-3ccf-0cada7e3823b'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/320b2a48-4d9b-a075-30f1-1f93a9b638fa':{//*cuando este en esta ruta sova
            return root.appendChild(characterFetch('320b2a48-4d9b-a075-30f1-1f93a9b638fa'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/1e58de9c-4950-5125-93e9-a0aee9f98746':{//*cuando este en esta ruta killjoy
            return root.appendChild(characterFetch('1e58de9c-4950-5125-93e9-a0aee9f98746'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/707eab51-4836-f488-046a-cda6bf494859':{ //*cuando este en esta ruta viper
            return root.appendChild(characterFetch('707eab51-4836-f488-046a-cda6bf494859'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/eb93336a-449b-9c1b-0a54-a891f7921d69':{//*cuando este en esta ruta phoenix
            return root.appendChild(characterFetch('eb93336a-449b-9c1b-0a54-a891f7921d69'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/41fb69c1-4189-7b37-f117-bcaf1e96f1bf':{ //*cuando este en esta ruta astra
            return root.appendChild(characterFetch('41fb69c1-4189-7b37-f117-bcaf1e96f1bf'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/9f0d8ba9-4140-b941-57d3-a7ad57c6b417':{//*cuando este en esta ruta brimstone
            return root.appendChild(characterFetch('9f0d8ba9-4140-b941-57d3-a7ad57c6b417'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/bb2a4828-46eb-8cd1-e765-15848195d751':{ //*cuando este en esta ruta neon
            return root.appendChild(characterFetch('bb2a4828-46eb-8cd1-e765-15848195d751'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/7f94d92c-4234-0a36-9646-3a87eb8b5c89':{//*cuando este en esta ruta yoru
            return root.appendChild(characterFetch('7f94d92c-4234-0a36-9646-3a87eb8b5c89'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/569fdd95-4d10-43ab-ca70-79becc718b46':{//*cuando este en esta ruta sage
            return root.appendChild(characterFetch('569fdd95-4d10-43ab-ca70-79becc718b46'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc':{//*cuando este en esta ruta reyna
            return root.appendChild(characterFetch('a3bfb853-43b2-7238-a4f1-ad90e9e46bcc'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/8e253930-4c05-31dd-1b6c-968525494517':{//*cuando este en esta ruta omen
            return root.appendChild(characterFetch('8e253930-4c05-31dd-1b6c-968525494517'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/add6443a-41bd-e414-f6ad-e58d267f4e95':{//*cuando este en esta ruta jett
            return root.appendChild(characterFetch('add6443a-41bd-e414-f6ad-e58d267f4e95'))//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }

        //!CASE DE LOS MAPAS

        case '#/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319':{
            return root.appendChild(mapasFetch('7eaecc1b-4337-bbf6-6ab9-04b8f06b3319'))
        }
        case '#/d960549e-485c-e861-8d71-aa9d1aed12a2':{
            return root.appendChild(mapasFetch('d960549e-485c-e861-8d71-aa9d1aed12a2'))
        }
        case '#/b529448b-4d60-346e-e89e-00a4c527a405':{
            return root.appendChild(mapasFetch('b529448b-4d60-346e-e89e-00a4c527a405'))
        }
        case '#/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba':{
            return root.appendChild(mapasFetch('2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba'))
        }
        case '#/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53':{
            return root.appendChild(mapasFetch('2fb9a4fd-47b8-4e7d-a969-74b4046ebd53'))
        }
        case '#/e2ad5c54-4114-a870-9641-8ea21279579a':{
            return root.appendChild(mapasFetch('e2ad5c54-4114-a870-9641-8ea21279579a'))
        }
        case '#/ee613ee9-28b7-4beb-9666-08db13bb2244':{
            return root.appendChild(mapasFetch('ee613ee9-28b7-4beb-9666-08db13bb2244'))
        }
        case '#/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047':{
            return root.appendChild(mapasFetch('2bee0dc9-4ffe-519b-1cbd-7fbe763a6047'))
        }

        //!CASE ARMAS

        case '#/63e6c2b6-4a8e-869c-3d4c-e38355226584':{
            return root.appendChild(armasFetch('63e6c2b6-4a8e-869c-3d4c-e38355226584'))
        }
        case '#/55d8a0f4-4274-ca67-fe2c-06ab45efdf58':{
            return root.appendChild(armasFetch('55d8a0f4-4274-ca67-fe2c-06ab45efdf58'))
        }
        case '#/9c82e19d-4575-0200-1a81-3eacf00cf872':{
            return root.appendChild(armasFetch('9c82e19d-4575-0200-1a81-3eacf00cf872'))
        }
        case '#/ae3de142-4d85-2547-dd26-4e90bed35cf7':{
            return root.appendChild(armasFetch('ae3de142-4d85-2547-dd26-4e90bed35cf7'))
        }
        case '#/ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a':{
            return root.appendChild(armasFetch('ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a'))
        }
        case '#/ec845bf4-4f79-ddda-a3da-0db3774b2794':{
            return root.appendChild(armasFetch('ec845bf4-4f79-ddda-a3da-0db3774b2794'))
        }
        case '#/910be174-449b-c412-ab22-d0873436b21b':{
            return root.appendChild(armasFetch('910be174-449b-c412-ab22-d0873436b21b'))
        }
        case '#/44d4e95c-4157-0037-81b2-17841bf2e8e3':{
            return root.appendChild(armasFetch('44d4e95c-4157-0037-81b2-17841bf2e8e3'))
        }
        case '#/29a0cfab-485b-f5d5-779a-b59f85e204a8':{
            return root.appendChild(armasFetch('29a0cfab-485b-f5d5-779a-b59f85e204a8'))
        }
        case '#/1baa85b4-4c70-1284-64bb-6481dfc3bb4e':{
            return root.appendChild(armasFetch('1baa85b4-4c70-1284-64bb-6481dfc3bb4e'))
        }


        //--------------------

        case '#/e336c6b8-418d-9340-d77f-7a9e4cfe0702':{
            return root.appendChild(armasFetch('e336c6b8-418d-9340-d77f-7a9e4cfe0702'))
        }
        case '#/42da8ccc-40d5-affc-beec-15aa47b42eda':{
            return root.appendChild(armasFetch('42da8ccc-40d5-affc-beec-15aa47b42eda'))
        }
        case '#/a03b24d3-4319-996d-0f8c-94bbfba1dfc7':{
            return root.appendChild(armasFetch('a03b24d3-4319-996d-0f8c-94bbfba1dfc7'))
        }
        case '#/4ade7faa-4cf1-8376-95ef-39884480959b':{
            return root.appendChild(armasFetch('4ade7faa-4cf1-8376-95ef-39884480959b'))
        }
        case '#/c4883e50-4494-202c-3ec3-6b8a9284f00b':{
            return root.appendChild(armasFetch('c4883e50-4494-202c-3ec3-6b8a9284f00b'))

        }
        case '#/462080d1-4035-2937-7c09-27aa2a5c27a7':{
            return root.appendChild(armasFetch('462080d1-4035-2937-7c09-27aa2a5c27a7'))
        }
        case '#/f7e1b454-4ad4-1063-ec0a-159e56b58941':{
            return root.appendChild(armasFetch('f7e1b454-4ad4-1063-ec0a-159e56b58941'))
        }
        case '#/2f59173c-4bed-b6c3-2191-dea9b58be9c7':{
            return root.appendChild(armasFetch('2f59173c-4bed-b6c3-2191-dea9b58be9c7'))
        }


        default: return console.log('404 Notfound ')
    }
    
}

export {router}