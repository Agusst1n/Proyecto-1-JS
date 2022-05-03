console.log('ready')


//agentes
fetch('https://valorant-api.com/v1/agents')
.then(res => res.json())
.then(data => console.log(data, 'characters'))

//armas
fetch('https://valorant-api.com/v1/weapons')
.then(res => res.json())
.then(data => console.log(data, 'weapons'))

//mapas
fetch('https://valorant-api.com/v1/maps')
.then(res => res.json())
.then(data => console.log(data, 'maps'))
