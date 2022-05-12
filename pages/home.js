// import hoverEffect from '../hover/hover-effect.js';
// import hoverEffectUmd from '../hover/hover-effect.umd.js';
// import hover from '../hover/hover-effect.umd.js'

export default ()=>{

    const home = `
        <section id="home">
            <a href='#/armas'>
                <div class="card one" >   
                    <h1>Armas</h1>
                </div>
            </a>
            <a href='#/personajes'>
                <div class="card two">
                </div>
            </a>
            <a href='#/mapas'>
                <div class="card three">
                    <h1>Mapas</h1>
                </div>  
            </a>  
        </section>
    `;

    // const hoverDistort = new hoverEffectUmd({
    //     parent: document.querySelector('.one'),
    //     intesity: 0.5,
    //     image1: '../assets/image1.jpg',
    //     image2: '../assets/image2.jpg',
    //     displacementImage: '4.png'
    // })

    const div = document.createElement('div');
    div.className = 'div_section'
    div.innerHTML = home;

    return div
}