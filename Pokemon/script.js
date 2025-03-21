document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const pokemonName = document.getElementById('pokemon-name');
    const pokemonId = document.getElementById('pokemon-id');
    const weight = document.getElementById('weight');
    const height = document.getElementById('height');
    const hp = document.getElementById('hp');
    const attack = document.getElementById('attack');
    const defense = document.getElementById('defense');
    const specialAttack = document.getElementById('special-attack');
    const specialDefense = document.getElementById('special-defense');
    const speed = document.getElementById('speed');
    const types = document.getElementById('types');
    const sprite = document.getElementById('sprite');
    
    pokemonName.innerHTML = '';
    pokemonId.innerHTML = '';
    weight.innerHTML = '';
    height.innerHTML = '';
    hp.innerHTML = '';
    attack.innerHTML = '';
    defense.innerHTML = '';
    specialAttack.innerHTML = '';
    specialDefense.innerHTML = '';
    speed.innerHTML = '';
    types.innerHTML = '';
    sprite.src = '';
  
    if (searchInput === "red") {
      alert("Pokémon not found");
      return;
    }
  
    // Fetch Pokémon data
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Pokémon not found");
        }
        return response.json();
      })
      .then(data => {
        pokemonName.innerHTML = data.name.toUpperCase();
        pokemonId.innerHTML = `#${data.id}`;
        weight.innerHTML = `Weight: ${data.weight}`;
        height.innerHTML = `Height: ${data.height}`;
        hp.innerHTML = `${data.stats[0].base_stat}`; 
        attack.innerHTML = `${data.stats[1].base_stat}`;
        defense.innerHTML = `${data.stats[2].base_stat}`;
        specialAttack.innerHTML = `${data.stats[3].base_stat}`;
        specialDefense.innerHTML = `${data.stats[4].base_stat}`; 
        speed.innerHTML = `${data.stats[5].base_stat}`; 
  
        sprite.src = data.sprites.front_default;
  
        types.innerHTML = '';
        data.types.forEach(type => {
          const typeElement = document.createElement('div');
          typeElement.textContent = type.type.name.toUpperCase();
          types.appendChild(typeElement);
        });
      })
      .catch(error => {
        alert("Pokémon not found");
      });
  });
  
  