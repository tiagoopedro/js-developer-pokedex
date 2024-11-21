const moreDetails = (pokemon) =>{
    const photo = pokemon.sprites.other.dream_world.front_default
    const detailHtml = `
    <div id="window">
        <div id="detailPokemon">
            <button id="closeBtn" onClick="closewindow()">X</button>
            <li class="newDetails ${pokemon.type}">
                <span class="name">${pokemon.name.toUpperCase()}</span>

                <div>
                <img id="img-pokemon" src="${photo}"alt="${pokemon.name}">
                </div>

                <div id="results">
                    <h4>Details</h4>
                    <div id="hability">
                        <div class="col1">
                        ${pokemon.abilities.map((habilidade) =>`<p>${habilidade.ability.name}</p>`).join('')}
                        </div>
                        <div class="col2"> 
                            <p>Height: ${(pokemon.height)}cm</p>
                            <p>Weight: ${(pokemon.weight/10)}kg</p>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    </div>        
    `
    pokemonList.innerHTML = detailHtml + pokemonList.innerHTML
}

const closewindow = () =>{
    const window = document.getElementById('window')
    window.parentElement.removeChild(window)
}

const getDetails =  (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    return fetch(url)
    .then((response) => response.json())   
    .then(moreDetails)
    }


