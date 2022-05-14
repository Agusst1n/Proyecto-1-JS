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
    fetch(`https://valorant-api.com/v1/weapons/${id}`)
    .then(res => res.json())
    .then(info => {
        let data =info.data
        console.log(data)
        

    
   


        let div_card = document.createElement('div') //creo un div
        let div_image = document.createElement('div') //creo otro div
        div_image.className = 'div_card_weapon_img' //le asigno una clase, este div va a contener la imagen
        div_card.className = 'card_weapons_estadistics' // y este div va a contener los datos del personaje
        let img = document.createElement('img') //creo una img
        let p = document.createElement('p')//creo un p
        let p1 = document.createElement('p')//creo un p
        let p2 = document.createElement('p')//creo un p
        let h2 = document.createElement('h2')//creo un h2
        let h4 = document.createElement('h4')//creo un h4

        console.log("Hola")
        h4.textContent = `Tipo: ${data.shopData.category.split(" ")[0]}` //le asigno contenido al h4
        // console.log(data.role.displayName)
        h2.textContent = `${data.displayName}` //le asigno contenido al h2
        // img.src = `${data.bustPortrait}`
        img.src = `${data.displayIcon}` //le asigno contenido a la img
        img.className = 'weapon_img' //le asigno una clase
        p.textContent = `Precio: ${data.shopData.cost}` //le asigno contenido al p
        p1.textContent = `Capacidad del cargador: ${data.weaponStats.magazineSize} balas`
        p2.textContent = `Tiempo de recarga: ${data.weaponStats.reloadTimeSeconds} segundos`
        div_card.appendChild(h2) //le agreo el h2
        div_card.appendChild(h4) //le agrego el h4
        div_card.appendChild(p) //le agrego el p
        div_card.appendChild(p1)
        div_card.appendChild(p2)

        div_image.appendChild(img) //le agrego la imagen
        div.appendChild(div_image) //agrego el div que contniene la imagen en otro div padre
        div.appendChild(div_card) //agrego el div que contiene la informacion en el mismo div padre

        // setTimeout(()=>{
        //     location.reload();
        //     console.log('timeout')
        // },1000)

    })

    const weaponFetch = `
        <h1>weaponFetch</h1>
    `;
    const div = document.createElement('div'); //mete todo dentro de este div
    div.className = 'weapons_estadistics' //le agrego una clase a ese div padre
    // div.innerHTML = div_card;

    return div // lo retorno y como esta en una funcion  que se puede exportar, lo voy a importar en el index router para que pueda ser renderizado
}