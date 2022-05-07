// import {router} from '../routes/index.routes'
// import {router} from '../routes/index.routes'
import { router } from "../routes/index.routes.js"
// import {msg} from './apiv2'
// import {saludo} from './apiv2.js'

let container = document.querySelector('.container')
let section = document.querySelector('#section')
let container_characters = document.querySelector('container_characters')
// let button = document.querySelector('#button')
// // console.log(msg)

// button.addEventListener('click', ()=>{
//     saludo()
// })
    router(window.location.hash)
window.addEventListener('hashchange', () =>{
    router(window.location.hash)
    // console.log(route)

})


// let characters = document.createElement('div')
// characters.innerHTML = `<h1>hola</h1>`

// window.addEventListener('hashchange', () =>{
//     let route = (window.location.hash)
//     console.log(route)

//     switch (route){
//         case '#/dade69b4-4f5a-8528-247b-219e5a1facd6':
//             return section.appendChild(characters)
//         case '#/5f8d3a7f-467b-97f3-062c-13acf203c006':
//             return console.log('Breach')
//         case '#/f94c3b30-42be-e959-889c-5aa313dba261':
//             return console.log('Raze')
//         case '#/22697a3d-45bf-8dd7-4fec-84a9e28c69d7':
//             return console.log('Chamber')
//         case '#/601dbbe7-43ce-be57-2a40-4abd24953621':
//             return console.log('Kay/o')
//         case '#/6f2a04ca-43e0-be17-7f36-b3908627744d':
//             return console.log('Skye')
//         case '#/117ed9e3-49f3-6512-3ccf-0cada7e3823b':
//             return console.log('Cypher')
//         case '#/320b2a48-4d9b-a075-30f1-1f93a9b638fa':
//             return console.log('Sova')
//         case '#/1e58de9c-4950-5125-93e9-a0aee9f98746':
//             return console.log("Killjoy")
//         case '#/707eab51-4836-f488-046a-cda6bf494859':
//             return console.log('Viper')
//         case '#/eb93336a-449b-9c1b-0a54-a891f7921d69':
//             return console.log('Phoenix')
//         case '#/41fb69c1-4189-7b37-f117-bcaf1e96f1bf':
//             return console.log('Astra')
//         case '#/9f0d8ba9-4140-b941-57d3-a7ad57c6b417':
//             return console.log('Brimstone')
//         case '#/bb2a4828-46eb-8cd1-e765-15848195d751':
//             return console.log('Neon')
//         case '#/7f94d92c-4234-0a36-9646-3a87eb8b5c89':
//             return console.log('Yoru')
//         case '#/569fdd95-4d10-43ab-ca70-79becc718b46':
//             return console.log('Sage')
//         case '#/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc':
//             return console.log('Reyna')
//         case '#/8e253930-4c05-31dd-1b6c-968525494517':
//             return console.log('Omen')
//         case '#/add6443a-41bd-e414-f6ad-e58d267f4e95':
//             return console.log('Jett')
//         default: return console.log('404 Notfound ')
//     }
// })
//agentes
// const agentes = () => {

    fetch('https://valorant-api.com/v1/agents')
    .then(res => res.json())
    .then(info => {
        console.log(info)
    
        let data = info.data
        // let h4 = ''
        // let img = ''
        // let p = ''
        
        // let container = document.querySelector('.container')

        for (let i = 0 ; i < data.length; i++) {
            // h4 += `<h4>${data[i].displayName}</h4>`
            // img += `<img src="${data[i].bustPortrait}">`
            // p += `<p>${data[i].description}</p>`
            if(data[i] != data[7]){
                const div = document.createElement('div')
                const h2 = document.createElement('h2')
                const p = document.createElement('p')
                const img = document.createElement('img')
                const a = document.createElement('a')

                h2.textContent = `${data[i].displayName}`
                p.textContent = `${data[i].description}`
                img.src = `${data[i].bustPortrait}`
                div.className = 'cards'
                h2.className = 'title'
                p.className = 'description'
                a.setAttribute("href", `#/${data[i].uuid}`)
    
                
                
                div.appendChild(h2)
                div.appendChild(p)
                // div.appendChild(img)
                a.appendChild(img)
                div.appendChild(a)
                div.draggable = true
                // div.id = data[i]
                // div.addEventListener('click', (e)=>{
                //     // div.findIndex(e.target)
                //     console.log(data[i]);
                // })

                let id = data[i].uuid
                div.id = id
                // console.log(id)

                div.onclick=(e)=>{
                   console.log('tengo el evento click')
                   console.log(e.target.id , 'target')
                }

                container.appendChild(div)

              

                //!FUNCIONA MAL PORQUE SE IMPRIME 20 VECES!!! :C


                // let characters = document.createElement('div')
                // characters.innerHTML = `<h1>hola</h1>`
            
                // window.addEventListener('hashchange', () =>{
                //     let route = (window.location.hash)
                //     console.log(route)
                
                    // switch (route){
                    //     case '#/dade69b4-4f5a-8528-247b-219e5a1facd6':
                    //         return container.replaceChild(characters, div) 
                    //     case '#/5f8d3a7f-467b-97f3-062c-13acf203c006':
                    //         return console.log('Breach')
                    //     case '#/f94c3b30-42be-e959-889c-5aa313dba261':
                    //         return console.log('Raze')
                    //     case '#/22697a3d-45bf-8dd7-4fec-84a9e28c69d7':
                    //         return console.log('Chamber')
                    //     case '#/601dbbe7-43ce-be57-2a40-4abd24953621':
                    //         return console.log('Kay/o')
                    //     case '#/6f2a04ca-43e0-be17-7f36-b3908627744d':
                    //         return console.log('Skye')
                    //     case '#/117ed9e3-49f3-6512-3ccf-0cada7e3823b':
                    //         return console.log('Cypher')
                    //     case '#/320b2a48-4d9b-a075-30f1-1f93a9b638fa':
                    //         return console.log('Sova')
                    //     case '#/1e58de9c-4950-5125-93e9-a0aee9f98746':
                    //         return console.log("Killjoy")
                    //     case '#/707eab51-4836-f488-046a-cda6bf494859':
                    //         return console.log('Viper')
                    //     case '#/eb93336a-449b-9c1b-0a54-a891f7921d69':
                    //         return console.log('Phoenix')
                    //     case '#/41fb69c1-4189-7b37-f117-bcaf1e96f1bf':
                    //         return console.log('Astra')
                    //     case '#/9f0d8ba9-4140-b941-57d3-a7ad57c6b417':
                    //         return console.log('Brimstone')
                    //     case '#/bb2a4828-46eb-8cd1-e765-15848195d751':
                    //         return console.log('Neon')
                    //     case '#/7f94d92c-4234-0a36-9646-3a87eb8b5c89':
                    //         return console.log('Yoru')
                    //     case '#/569fdd95-4d10-43ab-ca70-79becc718b46':
                    //         return console.log('Sage')
                    //     case '#/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc':
                    //         return console.log('Reyna')
                    //     case '#/8e253930-4c05-31dd-1b6c-968525494517':
                    //         return console.log('Omen')
                    //     case '#/add6443a-41bd-e414-f6ad-e58d267f4e95':
                    //         return console.log('Jett')
                    //     default: return console.log('404 Notfound ')
                    // }
                // })
            
                
            }
            else{
                continue;
            }
            
            // console.log(data[7], 'sova');
        }
    

        // let characters = document.createElement('div')
        // characters.innerHTML = `<h1>hola</h1>`
    
        // window.addEventListener('hashchange', () =>{
        //     let route = (window.location.hash)
        //     console.log(route)
        
        //     switch (route){
        //         case '#/dade69b4-4f5a-8528-247b-219e5a1facd6':
        //             return container.replaceChild(characters) 
        //         case '#/5f8d3a7f-467b-97f3-062c-13acf203c006':
        //             return console.log('Breach')
        //         case '#/f94c3b30-42be-e959-889c-5aa313dba261':
        //             return console.log('Raze')
        //         case '#/22697a3d-45bf-8dd7-4fec-84a9e28c69d7':
        //             return console.log('Chamber')
        //         case '#/601dbbe7-43ce-be57-2a40-4abd24953621':
        //             return console.log('Kay/o')
        //         case '#/6f2a04ca-43e0-be17-7f36-b3908627744d':
        //             return console.log('Skye')
        //         case '#/117ed9e3-49f3-6512-3ccf-0cada7e3823b':
        //             return console.log('Cypher')
        //         case '#/320b2a48-4d9b-a075-30f1-1f93a9b638fa':
        //             return console.log('Sova')
        //         case '#/1e58de9c-4950-5125-93e9-a0aee9f98746':
        //             return console.log("Killjoy")
        //         case '#/707eab51-4836-f488-046a-cda6bf494859':
        //             return console.log('Viper')
        //         case '#/eb93336a-449b-9c1b-0a54-a891f7921d69':
        //             return console.log('Phoenix')
        //         case '#/41fb69c1-4189-7b37-f117-bcaf1e96f1bf':
        //             return console.log('Astra')
        //         case '#/9f0d8ba9-4140-b941-57d3-a7ad57c6b417':
        //             return console.log('Brimstone')
        //         case '#/bb2a4828-46eb-8cd1-e765-15848195d751':
        //             return console.log('Neon')
        //         case '#/7f94d92c-4234-0a36-9646-3a87eb8b5c89':
        //             return console.log('Yoru')
        //         case '#/569fdd95-4d10-43ab-ca70-79becc718b46':
        //             return console.log('Sage')
        //         case '#/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc':
        //             return console.log('Reyna')
        //         case '#/8e253930-4c05-31dd-1b6c-968525494517':
        //             return console.log('Omen')
        //         case '#/add6443a-41bd-e414-f6ad-e58d267f4e95':
        //             return console.log('Jett')
        //         default: return console.log('404 Notfound ')
        //     }
        // })
    


        // document.querySelector('.name').innerHTML = h4
        // document.querySelector('.cards').innerHTML = img
        // document.querySelector('.description').innerHTML = p
    })
    


    // let characters = document.createElement('div')
    // characters.innerHTML = `<h1>hola</h1>`

    // window.addEventListener('hashchange', () =>{
    //     let route = (window.location.hash)
    //     console.log(route)
    
    //     switch (route){
    //         case '#/dade69b4-4f5a-8528-247b-219e5a1facd6':
    //             return section.appendChild(characters)
    //         case '#/5f8d3a7f-467b-97f3-062c-13acf203c006':
    //             return console.log('Breach')
    //         case '#/f94c3b30-42be-e959-889c-5aa313dba261':
    //             return console.log('Raze')
    //         case '#/22697a3d-45bf-8dd7-4fec-84a9e28c69d7':
    //             return console.log('Chamber')
    //         case '#/601dbbe7-43ce-be57-2a40-4abd24953621':
    //             return console.log('Kay/o')
    //         case '#/6f2a04ca-43e0-be17-7f36-b3908627744d':
    //             return console.log('Skye')
    //         case '#/117ed9e3-49f3-6512-3ccf-0cada7e3823b':
    //             return console.log('Cypher')
    //         case '#/320b2a48-4d9b-a075-30f1-1f93a9b638fa':
    //             return console.log('Sova')
    //         case '#/1e58de9c-4950-5125-93e9-a0aee9f98746':
    //             return console.log("Killjoy")
    //         case '#/707eab51-4836-f488-046a-cda6bf494859':
    //             return console.log('Viper')
    //         case '#/eb93336a-449b-9c1b-0a54-a891f7921d69':
    //             return console.log('Phoenix')
    //         case '#/41fb69c1-4189-7b37-f117-bcaf1e96f1bf':
    //             return console.log('Astra')
    //         case '#/9f0d8ba9-4140-b941-57d3-a7ad57c6b417':
    //             return console.log('Brimstone')
    //         case '#/bb2a4828-46eb-8cd1-e765-15848195d751':
    //             return console.log('Neon')
    //         case '#/7f94d92c-4234-0a36-9646-3a87eb8b5c89':
    //             return console.log('Yoru')
    //         case '#/569fdd95-4d10-43ab-ca70-79becc718b46':
    //             return console.log('Sage')
    //         case '#/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc':
    //             return console.log('Reyna')
    //         case '#/8e253930-4c05-31dd-1b6c-968525494517':
    //             return console.log('Omen')
    //         case '#/add6443a-41bd-e414-f6ad-e58d267f4e95':
    //             return console.log('Jett')
    //         default: return console.log('404 Notfound ')
    //     }
    // })























// }
// agentes()









// //armas
// fetch('https://valorant-api.com/v1/weapons')
// .then(res => res.json())
// .then(data => console.log(data, 'weapons'))

// //mapas
// fetch('https://valorant-api.com/v1/maps')
// .then(res => res.json())
// .then(data => console.log(data, 'maps'))
