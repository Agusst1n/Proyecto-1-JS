//!ESTE MUESTRA LAS CARACTERISTICAS DEL PERSONAJE QUE ELEGISTE 

const urlActual = window.location.hash
console.log(urlActual)
let id = urlActual.slice(2,38)
console.log(id)

// let id = urlActual
// id.split(' ')
// console.log(id)


export default ()=>{
    //toda via falta trabajo aca
    // const div_card = document.createElement('div')
    fetch(`https://valorant-api.com/v1/agents/${id}`)
    .then(res => res.json())
    .then(info => {
        let data =info.data
        console.log(data)
        

        //SOUND
        let idSound = data.voiceLine.mediaList[0].id
        // console.log(data.voiceLine.mediaList[0].id)
        let sonido = new Audio();
        sonido.src = `../sounds/${idSound}.wav`


        let div_card = document.createElement('div')
        let div_image = document.createElement('div')
        div_image.className = 'div_card_img'
        div_card.className = 'card_character_estadistics'
        let img = document.createElement('img')
        let p = document.createElement('p')
        let h2 = document.createElement('h2')
        let h4 = document.createElement('h4')
        let button = document.createElement('button')
        button.textContent = 'Voice'
        button.className = 'button_sound'
        button.onclick = () =>{
            console.log('click')
            sonido.play()
        }

        h4.textContent = `Role: ${data.role.displayName}`
        // console.log(data.role.displayName)
        h2.textContent = `${data.displayName}`
        // img.src = `${data.bustPortrait}`
        console.log(id, 'id')
        img.src = `../assets/characters_img/${id}.png`
        img.className = 'characters_img'
        p.textContent = `${data.description}`
        div_card.appendChild(h2)
        div_card.appendChild(h4)
        // div.appendChild(img)
        div_card.appendChild(p)
        div_card.appendChild(button)
        div_image.appendChild(img)
        div.appendChild(div_image)
        div.appendChild(div_card)

        // setTimeout(()=>{
        //     console.log('setTimeout')
        // },1000)

    })

    const characterFetch = `
        <h1>CharacterFetch</h1>
    `;
    const div = document.createElement('div'); //mete todo dentro de este div
    div.className = 'character_estadistics'
    // div.innerHTML = div_card;

    return div
}