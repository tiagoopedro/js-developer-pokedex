const moreDetails = (pokemon) =>{
    /*const types = pokemon.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type*/

    const photo = pokemon.sprites.other.dream_world.front_default
    const detailHtml = `
    <div id="window">
        <div id="detailPokemon">
            <button id="closeBtn" onClick="closewindow()">X</button>
            <li class="newDetails ${pokemon.type}">
                <span class="name">${pokemon.name.toUpperCase()}</span>

                <div id="imgDetails">
                <img id="img-pokemon" src="${photo}"alt="${pokemon.name}">
                </div>

                <div id="results">
                    <h4>Details</h4>
                    <div id="hability">
                        <div class="col1">
                            ${pokemon.stats.map((name_stats) =>`<p>${name_stats.stat.name}</p>`).join('')}
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

const getDetails =  (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    return fetch(url)
    .then((response) => response.json())   
    .then(moreDetails)
    }

const closewindow = () =>{
    const window = document.getElementById('window')
    window.parentElement.removeChild(window)
}


/* 
`
    <div id="window">
        <div id="detailPokemon">
            <button id="closeBtn" onClick="closewindow()">X</button>
            <li class="newDetails ${pokemon.type}">
                <span class="name">${pokemon.name}</span>
                <span class="number">#${pokemon.id}</span>
                <div class="detail">
                    </div>
                        <img id="img-pokemon" src="${photo}"alt="${pokemon.name}">
                        <div id="data">
                            <h4>Details</h4>
                            <div id="hability">
                                <div class="stat-desc">
                                    ${pokemon.stats.map((name_stats) =>`<p class="${type}">${name_stats.stat.name}</p>`).join('')}
                                </div>
                            <div class="bar-inner"> ${pokemon.stats.map((base_stats) =>`<p class="${type}">${base_stats.base_stat}</p>`).join('')}</div>
                        </div>
                        <div id="stats">
                            <div>
                                <p>Height: ${(pokemon.height)}cm</p>
                                <p>Weight: ${(pokemon.weight/10)}kg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    </div>        
    ` 
    */
    
    
    
    /*
    <ol class="types">
        ${pokemon.abilities.map((ability) => `<li class="type ${ability}">${ability}</li>`).join('')}
    </ol> 
    
outro metodo
   const selectPokemon =  async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url)
    const pokemon = await response.json()
    return moreDetails(pokemon)
    }


    */