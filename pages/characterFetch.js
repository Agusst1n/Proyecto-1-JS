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
        

        let div_card = document.createElement('div')
        div_card.className = 'character_estadistics'
        let img = document.createElement('img')
        let p = document.createElement('p')
        let h2 = document.createElement('h2')


        h2.textContent = `${data.displayName}`
        img.src = `${data.bustPortrait}`
        p.textContent = `${data.description}`
        div_card.appendChild(h2)
        div_card.appendChild(img)
        div_card.appendChild(p)
 
        div.appendChild(div_card)

        setTimeout(()=>{
            console.log('setTimeout')
        },1000)

    })

    const characterFetch = `
        <h1>CharacterFetch</h1>
    `;
    const div = document.createElement('div'); //mete todo dentro de este div
    // div.innerHTML = div_card;

    return div
}