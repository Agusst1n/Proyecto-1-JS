import characters from '../pages/characters.js'
import home from '../pages/home.js'
import armas from '../pages/armas.js'
import mapas from '../pages/mapas.js'
import characterFetch from '../pages/characterFetch.js'
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
        case '#/':{
            // root.appendChild(overlay());
            document.body.appendChild(overlay())
            document.body.appendChild(overlay2())
            document.body.appendChild(overlay3())
            root.appendChild(home())
            document.body.appendChild(hoverAnimation())
            document.body.appendChild(script())
            break;
        }
        case '#/dade69b4-4f5a-8528-247b-219e5a1facd6':{
            return root.appendChild(characterFetch())
        }
        case '#/5f8d3a7f-467b-97f3-062c-13acf203c006':{
            return root.appendChild(characterFetch())
        }
        case '#/f94c3b30-42be-e959-889c-5aa313dba261':{
            return root.appendChild(characterFetch())
        }
        case '#/armas':{
            document.body.appendChild(overlay())
            document.body.appendChild(overlay2())
            document.body.appendChild(overlay3())
            root.appendChild(armas())
            document.body.appendChild(script())
            break;
        }
        case '#/personajes':{
            document.body.appendChild(overlay())
            document.body.appendChild(overlay2())
            document.body.appendChild(overlay3())
            root.appendChild(characters())
            document.body.appendChild(script())
            break;
        }
        case '#/mapas':{
            document.body.appendChild(overlay())
            document.body.appendChild(overlay2())
            document.body.appendChild(overlay3())
            root.appendChild(mapas())
            document.body.appendChild(script())
            break;
        }
        case '#/333':{
            return root.appendChild(characterFetch())
        }
        case '#/22697a3d-45bf-8dd7-4fec-84a9e28c69d7':{
            return root.appendChild(characterFetch())
        }
        case '#/601dbbe7-43ce-be57-2a40-4abd24953621':{
            return root.appendChild(characterFetch())
        }
        case '#/6f2a04ca-43e0-be17-7f36-b3908627744d':{
            return root.appendChild(characterFetch())
        }
        case '#/117ed9e3-49f3-6512-3ccf-0cada7e3823b':{
            return root.appendChild(characterFetch())
        }
        case '#/320b2a48-4d9b-a075-30f1-1f93a9b638fa':{
            return root.appendChild(characterFetch())
        }
        case '#/1e58de9c-4950-5125-93e9-a0aee9f98746':{
            return root.appendChild(characterFetch())
        }
        case '#/707eab51-4836-f488-046a-cda6bf494859':{
            return root.appendChild(characterFetch())
        }
        case '#/eb93336a-449b-9c1b-0a54-a891f7921d69':{
            return root.appendChild(characterFetch())
        }
        case '#/41fb69c1-4189-7b37-f117-bcaf1e96f1bf':{
            return root.appendChild(characterFetch())
        }
        case '#/9f0d8ba9-4140-b941-57d3-a7ad57c6b417':{
            return root.appendChild(characterFetch())
        }
        case '#/bb2a4828-46eb-8cd1-e765-15848195d751':{
            return root.appendChild(characterFetch())
        }
        case '#/7f94d92c-4234-0a36-9646-3a87eb8b5c89':{
            return root.appendChild(characterFetch())
        }
        case '#/569fdd95-4d10-43ab-ca70-79becc718b46':{
            return root.appendChild(characterFetch())
        }
        case '#/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc':{
            return root.appendChild(characterFetch())
        }
        case '#/8e253930-4c05-31dd-1b6c-968525494517':{
            return root.appendChild(characterFetch())
        }
        case '#/add6443a-41bd-e414-f6ad-e58d267f4e95':{
            return root.appendChild(characterFetch())
        }
        default: return console.log('404 Notfound ')
    }
    
}

export {router}