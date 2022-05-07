
const fetchAPI = () =>{

    fetch('https://valorant-api.com/v1/agents')
        .then(res => res.json())
        .then(info => {
            console.log(info)
        })
        
}

export {fetchAPI}
