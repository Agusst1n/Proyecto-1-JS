import characters from '../pages/personajes/characters.js'
import home from '../pages/home.js'
import armas from '../pages/armas/armas.js'
import mapas from '../pages/mapas/mapas.js'
import characterFetch from '../pages/personajes/characterFetch.js' //importo el caracterFetch
import overlay from '../overlay/overlay.js'
import overlay2 from '../overlay/overlay2.js'
import overlay3 from '../overlay/overlay3.js'
import script from '../overlay/script.js'

//HOVER
import hoverAnimation from '../hover/hoverAnimation.js'

let root = document.querySelector('#root')
const cards = document.querySelector('.cards')

const router = (route)=>{

    root.textContent = '' //lo que hace es que cada vez que entre no se vuelva a pintar lo mismo una y otra vez

    switch (route){
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
        case '#/dade69b4-4f5a-8528-247b-219e5a1facd6':{  //*cuando este en esta ruta fade
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/5f8d3a7f-467b-97f3-062c-13acf203c006':{ //*cuando este en esta ruta breach
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/f94c3b30-42be-e959-889c-5aa313dba261':{ //*cuando este en esta ruta raze
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
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
        case '#/333':{ //ruta de prueba
            return root.appendChild(characterFetch())
        }
        case '#/22697a3d-45bf-8dd7-4fec-84a9e28c69d7':{ //*cuando este en esta ruta (chamber)
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/601dbbe7-43ce-be57-2a40-4abd24953621':{//*cuando este en esta ruta kayo
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/6f2a04ca-43e0-be17-7f36-b3908627744d':{ //*cuando este en esta ruta skye
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/117ed9e3-49f3-6512-3ccf-0cada7e3823b':{//*cuando este en esta ruta cypher
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/320b2a48-4d9b-a075-30f1-1f93a9b638fa':{//*cuando este en esta ruta sova
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/1e58de9c-4950-5125-93e9-a0aee9f98746':{//*cuando este en esta ruta killjoy
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/707eab51-4836-f488-046a-cda6bf494859':{ //*cuando este en esta ruta viper
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/eb93336a-449b-9c1b-0a54-a891f7921d69':{//*cuando este en esta ruta phoenix
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/41fb69c1-4189-7b37-f117-bcaf1e96f1bf':{ //*cuando este en esta ruta astra
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/9f0d8ba9-4140-b941-57d3-a7ad57c6b417':{//*cuando este en esta ruta brimstone
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/bb2a4828-46eb-8cd1-e765-15848195d751':{ //*cuando este en esta ruta neon
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/7f94d92c-4234-0a36-9646-3a87eb8b5c89':{//*cuando este en esta ruta yoru
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/569fdd95-4d10-43ab-ca70-79becc718b46':{//*cuando este en esta ruta sage
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc':{//*cuando este en esta ruta reyna
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/8e253930-4c05-31dd-1b6c-968525494517':{//*cuando este en esta ruta omen
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        case '#/add6443a-41bd-e414-f6ad-e58d267f4e95':{//*cuando este en esta ruta jett
            return root.appendChild(characterFetch())//me va agregar al root el componente charactersFetch el cual trae todos los datos de ese personaje
        }
        default: return console.log('404 Notfound ')
    }
    
}

export {router}