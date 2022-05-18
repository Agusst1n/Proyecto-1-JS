export default ()=>{

    const scriptFunction = `
       
      var hoverDistort = new hoverEffect({
            parent: document.querySelector('.two'),
            intensity: 0.5,
            image1: '../assets/img2.jpg',
            image2: '../assets/img1.png',
            displacementImage: '../assets/7.jpg'
        });
        var hoverDistort2 = new hoverEffect({
            parent: document.querySelector('.three'),
            intensity: 0.5,
            image1: '../assets/imgMapa1.jpg',
            image2: '../assets/imgMapa2.jpg',
            displacementImage: '../assets/7.jpg'
        });
        var hoverDistort2 = new hoverEffect({
            parent: document.querySelector('.one'),
            intensity: 0.5,
            image1: '../assets/imgArma1.jpg',
            image2: '../assets/imgArma2.jpg',
            displacementImage: '../assets/7.jpg'
        });
    `;


    const script = document.createElement('script');
    // div.className = 'overlay'
    script.innerHTML = scriptFunction;


    return script
}