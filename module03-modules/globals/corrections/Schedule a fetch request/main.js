let counter = 1;

const intervalId = setInterval(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const pokemon = {
                id: data.id,
                name: data.name
            }
            console.log(pokemon)
        })
        .catch((error) => console.error("Error fetching pokemon: ",error))
    
    counter++
    if(counter > 150) {
        clearInterval(intervalId);
    }
}, 1000)