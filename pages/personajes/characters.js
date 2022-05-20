// '../styles/characters.css'


//!ESTE ES EL FETCH QUE MAPEA TODAS LAS CARDS CON LOS PERSONAJES

export default ()=>{

    fetch('https://valorant-api.com/v1/agents')
.   then(res => res.json())
    .then(info => {
        let data = info.data
        // console.log(data)
        console.log(data, 'personajes')


            for (let i = 0 ; i < data.length; i++) {
    
                if(data[i] != data[7]){
                    const div_cards = document.createElement('div') //creo un div
                    const h2 = document.createElement('h2') //creo un h2
                    const p = document.createElement('p') //creo un p
                    const img = document.createElement('img') //creo un img
                    const a = document.createElement('a') //creo un a
    
                    h2.textContent = `${data[i].displayName}` //le agrego contenido al h2
                    // p.textContent = `${data[i].description}` //le agrego contenido al p
                    // img.src = `${data[i].bustPortrait}` //le agrego contenido a la imagen
                    img.src = `../assets/characters_img/${data[i].uuid}.png`
                    img.className = 'character_card_img'
                    div_cards.className = 'cards' //le agrego una clase al div card
                    h2.className = 'title' //le agrego una clase al h2
                    let title = document.querySelector('.title')
                    p.className = 'description' //le agrego una clase al p
                    a.setAttribute("href", `#/${data[i].uuid}`) //le digo al 'a' que la ruta a la que me va a dirigir es el id del personaje

                    
                    div_cards.appendChild(h2) //le agrego el h2 al div card
                    // div_cards.appendChild(p) //le agrego el p al div card
                    a.appendChild(img) //envuelvo la imagen en un 'a'
                    div_cards.appendChild(a) //le agrego el 'a' al div card
                    div_cards.draggable = true //activo el draggable en las cards
    
    
                    // let id = data[i].uuid // asigno el valor de uuiid a una variable
                    // div_cards.id = id //le digo al div card que su id va a ser la uuid
                    let id = data[i].voiceLine.mediaList[0].id // asigno el valor de uuiid a una variable
                    div_cards.id = id
                    
                    let sonido = new Audio(); //creo un sonido
                    sonido.src = `../sounds/${id}.wav`

                    //*
                    div_cards.onmouseover=()=>{ //le digo al div card que al ser clickeado tire unos console.log
                        sonido.play()
                    }
                    //*
                    div_cards.onmouseenter=()=>{ //le digo al div card que al ser clickeado tire unos console.log
                    //    h2.classList.toggle('active')
                        // title.style.opacity = "1";
                        h2.style.opacity = "1"
                     }
                     div_cards.onmouseleave =() =>{
                        // title.style.opacity = "0"
                        h2.style.opacity = "0"

                     }
                    // container.appendChild(div)
                    // characters.appendChild(div)
                    div.appendChild(div_cards) //!agrego el div de las cards a otro div, ese div es usado abajo
                    
                }
                else{
                    continue;
                }
                
            }
    })

    const characters = `
    
    `;
    const div = document.createElement('div'); //creo una div
    div.className = 'div_characters' //le asigno una clase a ese div
    div.innerHTML = characters; //*el contenido de ese div va a ser lo que haya adentro de la constante characters, en este caso estarian todas las cards que cree con el fetch

    return div
}