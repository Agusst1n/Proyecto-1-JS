import { router } from "../routes/index.routes.js"


let container = document.querySelector('.container')
let section = document.querySelector('#section')
let container_characters = document.querySelector('container_characters')

    router(window.location.hash)
window.addEventListener('hashchange', () =>{
    
    router(window.location.hash)

})


    // fetch('https://valorant-api.com/v1/agents')
    // .then(res => res.json())
    // .then(info => {
    //     console.log(info)
    
    //     let data = info.data

    //     for (let i = 0 ; i < data.length; i++) {

    //         if(data[i] != data[7]){
    //             const div = document.createElement('div')
    //             const h2 = document.createElement('h2')
    //             const p = document.createElement('p')
    //             const img = document.createElement('img')
    //             const a = document.createElement('a')

    //             h2.textContent = `${data[i].displayName}`
    //             p.textContent = `${data[i].description}`
    //             img.src = `${data[i].bustPortrait}`
    //             div.className = 'cards'
    //             h2.className = 'title'
    //             p.className = 'description'
    //             a.setAttribute("href", `#/${data[i].uuid}`)
    
                
                
    //             div.appendChild(h2)
    //             div.appendChild(p)
    //             a.appendChild(img)
    //             div.appendChild(a)
    //             div.draggable = true


    //             let id = data[i].uuid
    //             div.id = id

    //             div.onclick=(e)=>{
    //                console.log('tengo el evento click')
    //                console.log(e.target.id , 'target')
    //             }

    //             // container.appendChild(div)
            
                
    //         }
    //         else{
    //             continue;
    //         }
            
    //     }
    

    // })
    


    