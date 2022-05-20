// import hoverEffect from '../hover/hover-effect.js';
// import hoverEffectUmd from '../hover/hover-effect.umd.js';
// import hover from '../hover/hover-effect.umd.js'

export default ()=>{

    const home = `
    
        <section class="section-title" id="id_section">
            <div class="content">
                <h2 class="text " data-text="DESCUBRE VALORANT" >DESCUBRE VALORANT</h2>
            </div>
            <div class="arrow">
                <a href="#/"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="9" />
                <line x1="8" y1="12" x2="12" y2="16" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="16" y1="12" x2="12" y2="16" />
                </svg></a>
            </div>
        </section>
        <section id="home">
        
            <a href='#/armas'>
                <div class="card one" >   
                </div>
            </a>
            <a href='#/personajes'>
                <div class="card two">
                </div>
            </a>
            <a href='#/mapas'>
                <div class="card three">
                </div>  
            </a>  
        </section>
   
    `;

    let play = document.querySelector('.play')
    let pause = document.querySelector('.pause')
    let sonido = new Audio(); //creo un sonido
    sonido.src = `../sounds/valorant.mp3` 
    
    play.addEventListener('click', ()=>{
        sonido.play();
    })
    pause.addEventListener('click', ()=>{
        sonido.pause();
    })

    const div = document.createElement('div');
    div.className = 'div_section'
    div.innerHTML = home;

    return div
}