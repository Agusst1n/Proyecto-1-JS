//!ESTE MUESTRA LAS CARACTERISTICAS DEL PERSONAJE QUE ELEGISTE 

const urlActual = window.location.hash //con esto obtengo la URL Actual
console.log(urlActual)
let id = urlActual.slice(2,38) //con el slice le saco los 2 primeros caracteres que son un '#/'
console.log(id)

// let id = urlActual
// id.split(' ')
// console.log(id)



export default (id)=>{

    let root = document.getElementById('root')
    root.innerText = ''
    //toda via falta trabajo aca
    // const div_card = document.createElement('div')

    
    fetch(`https://valorant-api.com/v1/agents/${id}`)
    .then(res => res.json())
    .then(info => {
        let data =info.data
        // console.log(data)
        

        //SOUND
        let idSound = data.voiceLine.mediaList[0].id
        // console.log(data.voiceLine.mediaList[0].id)
        let sonido = new Audio(); //creo un sonido
        sonido.src = `../sounds/${idSound}.wav` //le digo que el sonido va a ser dinamico, va a ser segun el personaje que hayamos seleccionado


        let div_card = document.createElement('div') //creo un div
        let div_image = document.createElement('div') //creo otro div
        div_image.className = 'div_card_img' //le asigno una clase, este div va a contener la imagen
        div_card.className = 'card_character_estadistics' // y este div va a contener los datos del personaje
        let img = document.createElement('img') //creo una img
        let p = document.createElement('p')//creo un p
        let h2 = document.createElement('h2')//creo un h2
        let h4 = document.createElement('h4')//creo un h4
        let button = document.createElement('button') //creo un boton
        button.textContent = 'Voice' //le digo que el boton va a tener escrito la palabra Voice
        button.className = 'button_sound' //le agrego una clase al boton
        button.onclick = () =>{ //le agreo un evento para que cuando le hagan click ejecute el sonido con la voz del personaje seleccionado
            console.log('click')
            sonido.play()
        }

        h4.textContent = `Role: ${data.role.displayName}` //le asigno contenido al h4
        // console.log(data.role.displayName)
        h2.textContent = `${data.displayName}` //le asigno contenido al h2
        // img.src = `${data.bustPortrait}`
        console.log(id, 'id')
        img.src = `../assets/characters_img/${id}.png` //le asigno contenido a la img
        img.className = 'characters_img' //le asigno una clase
        p.textContent = `${data.description}` //le asino contenido al p
        div_card.appendChild(h2) //le agreo el h2
        div_card.appendChild(h4) //le agrego el h4
        // div.appendChild(img)
        div_card.appendChild(p) //le agrego el p
        div_card.appendChild(button) //le agrego el boton
        div_image.appendChild(img) //le agrego la imagen
        div.appendChild(div_image) //agrego el div que contniene la imagen en otro div padre
        div.appendChild(div_card) //agrego el div que contiene la informacion en el mismo div padre

        // setTimeout(()=>{
        //     location.reload();
        //     console.log('timeout')
        // },1000)

    })

    const characterFetch = `
        <h1>CharacterFetch</h1>
    `;
    const div = document.createElement('div'); //mete todo dentro de este div
    div.className = 'character_estadistics' //le agrego una clase a ese div padre
    // div.innerHTML = div_card;

    return div // lo retorno y como esta en una funcion  que se puede exportar, lo voy a importar en el index router para que pueda ser renderizado
}