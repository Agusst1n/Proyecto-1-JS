export default ()=>{

    const character = `
        <h1>Hola funciono</h1>
    `;
    const div = document.createElement('div');
    div.innerHTML = character;

    return div
}