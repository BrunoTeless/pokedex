const container = document.querySelector('.container');
const row = document.querySelector('.row');

fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
  .then(response => response.json())
  .then(data => {
    const pokemons = data.results;
    console.log(pokemons);

    for (const pokemon of pokemons) {
      const pokemonDiv = document.createElement('div');
      pokemonDiv.classList.add('pokemon', 'col-12', 'col-md-6', 'col-lg-4', 'col-xl-3');
      row.appendChild(pokemonDiv);

      const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
      pokemonDiv.innerHTML = `
        <div class="img-container">
          <img src="https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png" alt="${name}">
        </div>
        <div class="info">
          <span class="number">#${pokemon.url.split('/')[6]}</span>
          <h3 class="name">${name}</h3>
        </div>
      `;
    }
  });
