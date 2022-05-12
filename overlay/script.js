export default ()=>{

    const scriptFunction = `
            TweenMax.to(".first", 2, {
                delay: 0.5,
                top: "-100%",
                ease: Expo.easeInout
            })
            TweenMax.to(".second", 2, {
                delay: 0.7,
                top: "-120%",
                ease: Expo.easeInout
            })
            TweenMax.to(".third", 2, {
                delay: 0.9,
                top: "-120%",
                ease: Expo.easeInout
            })
    `;


    const script = document.createElement('script');
    // div.className = 'overlay'
    script.innerHTML = scriptFunction;


    return script
}