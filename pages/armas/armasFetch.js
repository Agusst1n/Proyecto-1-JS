//!ESTE MUESTRA LAS CARACTERISTICAS DEL PERSONAJE QUE ELEGISTE 

const urlActual = window.location.hash //con esto obtengo la URL Actual
console.log(urlActual)
let id = urlActual.slice(2,38) //con el slice le saco los 2 primeros caracteres que son un '#/'
console.log(id)


export default (id)=>{
    //toda via falta trabajo aca
    // const div_card = document.createElement('div')
    fetch(`https://valorant-api.com/v1/weapons/${id}`)
    .then(res => res.json())
    .then(info => {
        let data =info.data
        console.log(data, 'la data')
        // console.log(data.displayName)
        

        let div_card = document.createElement('div') //creo un div
        let div_image = document.createElement('div') //creo otro div
        let div_skins = document.createElement('div') 
        let armas_contain = document.createElement('div') 
        armas_contain.className = 'armas_contain' // y este div va a contener los datos del personaje
        div_image.className = 'div_arma_card_img' //le asigno una clase, este div va a contener la imagen
        div_card.className = 'card_arma_estadistics' // y este div va a contener los datos del personaje
        let img = document.createElement('img') //creo una img
        let h2 = document.createElement('h2')//creo un h2
        let h4 = document.createElement('h4')//creo un h4
        let h4_v2 = document.createElement('h4')//creo un h4
        let h4_v3 = document.createElement('h4')//creo un h4
        let h4_v4 = document.createElement('h4')//creo un h4



   

        // h4.textContent = `Role: ${data.role.displayName}` //le asigno contenido al h4
        // console.log(data.role.displayName)
        h2.textContent = `${data.displayName}` //le asigno contenido al h2
        h4.textContent = `Category: ${data.shopData.category}`
        h4_v2.textContent = `Cost: ${data.shopData.cost}`
        h4_v3.textContent = `Damage: [Body damage ${data.weaponStats.damageRanges[0].bodyDamage}] [Head damage ${data.weaponStats.damageRanges[0].headDamage}] [Leg damage ${data.weaponStats.damageRanges[0].legDamage}]`
        h4_v4.textContent = `Reload time: ${data.weaponStats.reloadTimeSeconds}s `
        // img.src = `${data.bustPortrait}`
        console.log(id, 'id')
        img.src = `${data.displayIcon}` //le asigno contenido a la img
        img.className = 'arma_img' //le asigno una clase
        div_card.appendChild(h2) //le agreo el h2
        div_card.appendChild(h4) //le agrego el h4
        div_card.appendChild(h4_v2) //le agrego el h4
        div_card.appendChild(h4_v3) //le agrego el h4
        div_card.appendChild(h4_v4) //le agrego el h4

        //*DIV SKINS
        div_skins.className = 'card_arma_skin'
        let img_skins = document.createElement('img') //creo una img
        img_skins.className = 'arma_skin_img' //le asigno una clase
        img_skins.src = `${data.skins[0].displayIcon}` //le asigno contenido a la img

        let img_skins2 = document.createElement('img') //creo una img
        img_skins2.className = 'arma_skin_img' //le asigno una clase
        img_skins2.src = `${data.skins[2].displayIcon}` //le asigno contenido a la img

        let img_skins3 = document.createElement('img') //creo una img
        img_skins3.className = 'arma_skin_img' //le asigno una clase
        img_skins3.src = `${data.skins[3].displayIcon}` //le asigno contenido a la img
        
        div_skins.appendChild(img_skins)
        div_skins.appendChild(img_skins2)
        div_skins.appendChild(img_skins3)


        
        

        // div.appendChild(img)
        div_image.appendChild(img) //le agrego la imagen
        armas_contain.appendChild(div_image)
        armas_contain.appendChild(div_card)
        // div.appendChild(div_image) //agrego el div que contniene la imagen en otro div padre
        // div.appendChild(div_card) //agrego el div que contiene la informacion en el mismo div padre
        div.appendChild(armas_contain)
        div.appendChild(div_skins)
    })

    const armasFetch = `
        <h1>CharacterFetch</h1>
    `;
    const div = document.createElement('div'); //mete todo dentro de este div
    div.className = 'armas_estadistics' //le agrego una clase a ese div padre
    // div.innerHTML = div_card;

    return div // lo retorno y como esta en una funcion  que se puede exportar, lo voy a importar en el index router para que pueda ser renderizado
}