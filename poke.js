document.getElementById('pokeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const pokename = document.getElementById('pokeInput').value;
    fetchPokemonData(pokename);
});

async function fetchPokemonData(pokename) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
        const data = await response.json();
        displayPokemon(data);
    } catch(error) {
        console.error(`There was an error: ${error}`);
    }
}

function displayPokemon(data) {
    const card = document.getElementById('card');
    card.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
    `;
}
