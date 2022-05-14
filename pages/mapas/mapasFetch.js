//!ESTE MUESTRA LAS CARACTERISTICAS DEL PERSONAJE QUE ELEGISTE 

const urlActual = window.location.hash //con esto obtengo la URL Actual
console.log(urlActual)
let id = urlActual.slice(2,38) //con el slice le saco los 2 primeros caracteres que son un '#/'
console.log(id)

// let id = urlActual
// id.split(' ')
// console.log(id)



export default ()=>{
    //toda via falta trabajo aca
    // const div_card = document.createElement('div')
    fetch(`https://valorant-api.com/v1/maps/${id}`)
    .then(res => res.json())
    .then(info => {
        let data =info.data
        console.log(data)
        

    
   


        let div_card = document.createElement('div') //creo un div
        let div_image = document.createElement('div') //creo otro div
        div_image.className = 'map_img' //le asigno una clase, este div va a contener la imagen
        div_card.className = 'card_maps_estadistics' // y este div va a contener los datos del personaje
        let img = document.createElement('img') //creo una img
        // let img2 = document.createElement("img2") // creo img 2 -------------------------------------------------------------------------MIRAR
        let h2 = document.createElement('h2')//creo un h2
        let h4 = document.createElement('h4')//creo un h4
   
        console.log("Hola")
        h4.textContent = `Coordenadas: ${data.coordinates}` //le asigno contenido al h4

        h2.textContent = `${data.displayName}` //le asigno contenido al h2

        img.src = `${data.splash}` //le asigno contenido a la img
        // img2.src = `${data.displayIcon}` -------------------------------------------------------------------------MIRAR
      
        img.className = 'map_img' //le asigno una clase
        // img2.className = 'weapon_img' //le asigno una clase -------------------------------------------------------------------------MIRAR
       
        div_card.appendChild(h2) //le agreo el h2
        div_card.appendChild(h4) //le agrego el h4
       
        div_image.appendChild(img) //le agrego la imagen
        // div_image.appendChild(img2)   -------------------------------------------------------------------------MIRAR
        div.appendChild(div_image) //agrego el div que contniene la imagen en otro div padre
        div.appendChild(div_card) //agrego el div que contiene la informacion en el mismo div padre

        // setTimeout(()=>{
        //     location.reload();
        //     console.log('timeout')
        // },1000)

    })

    const mapFetch = `
        <h1>mapFetch</h1>
    `;
    const div = document.createElement('div'); //mete todo dentro de este div
    div.className = 'maps_estadistics' //le agrego una clase a ese div padre
    // div.innerHTML = div_card;

    return div // lo retorno y como esta en una funcion  que se puede exportar, lo voy a importar en el index router para que pueda ser renderizado
}