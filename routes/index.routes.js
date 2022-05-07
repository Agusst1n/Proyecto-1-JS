import character from '../pages/character.js'

let container = document.querySelector('.container')
const cards = document.querySelector('.cards')

const router = (route)=>{

    container.textContent = ''

    switch (route){
        case '#/':
            return console.log('home')
        case '#/dade69b4-4f5a-8528-247b-219e5a1facd6':{
            return container.appendChild(character())
        }
        case '#/5f8d3a7f-467b-97f3-062c-13acf203c006':{
            return container.appendChild(character())
        }
        case '#/f94c3b30-42be-e959-889c-5aa313dba261':
            return console.log('Raze')
        case '#/22697a3d-45bf-8dd7-4fec-84a9e28c69d7':
            return console.log('Chamber')
        case '#/601dbbe7-43ce-be57-2a40-4abd24953621':
            return console.log('Kay/o')
        case '#/6f2a04ca-43e0-be17-7f36-b3908627744d':
            return console.log('Skye')
        case '#/117ed9e3-49f3-6512-3ccf-0cada7e3823b':
            return console.log('Cypher')
        case '#/320b2a48-4d9b-a075-30f1-1f93a9b638fa':
            return console.log('Sova')
        case '#/1e58de9c-4950-5125-93e9-a0aee9f98746':
            return console.log("Killjoy")
        case '#/707eab51-4836-f488-046a-cda6bf494859':
            return console.log('Viper')
        case '#/eb93336a-449b-9c1b-0a54-a891f7921d69':
            return console.log('Phoenix')
        case '#/41fb69c1-4189-7b37-f117-bcaf1e96f1bf':
            return console.log('Astra')
        case '#/9f0d8ba9-4140-b941-57d3-a7ad57c6b417':
            return console.log('Brimstone')
        case '#/bb2a4828-46eb-8cd1-e765-15848195d751':
            return console.log('Neon')
        case '#/7f94d92c-4234-0a36-9646-3a87eb8b5c89':
            return console.log('Yoru')
        case '#/569fdd95-4d10-43ab-ca70-79becc718b46':
            return console.log('Sage')
        case '#/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc':
            return console.log('Reyna')
        case '#/8e253930-4c05-31dd-1b6c-968525494517':
            return console.log('Omen')
        case '#/add6443a-41bd-e414-f6ad-e58d267f4e95':
            return console.log('Jett')
        default: return console.log('404 Notfound ')
    }
    
}

export {router}