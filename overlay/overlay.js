// let overlay = document.createElement(div)
// let root = document.querySelector('#root')
// let h1 = document.createElement('h1')
// h1.textContent = 'hola'
// overlay.appendChild(h1)
// root.appendChild(overlay)




export default ()=>{

    const overlay = `
        <div> 
        </div>
    `;


    const div = document.createElement('div');
    div.className = 'overlay first'
    div.innerHTML = overlay;


    return div
}