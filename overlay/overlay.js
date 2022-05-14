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