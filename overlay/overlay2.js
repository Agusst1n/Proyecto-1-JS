export default ()=>{

    const overlay2 = `
        <div> 
        </div>
    `;


    const div = document.createElement('div');
    div.className = 'overlay second'
    div.innerHTML = overlay2;


    return div
}