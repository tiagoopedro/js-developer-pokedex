const moreDetails = (pokemon) =>{
    const types = pokemon.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    const photo = pokemon.sprites.other.dream_world.front_default
    const htmlString = `

    <div id="window" class="animate__animated animate__fadeIn">
        <div id="detailPokemon">
            <button id="closeBtn" onClick="closewindow()">X</button>
            <li class="pokemon ${pokemon.type}">
                <span class="name">${pokemon.name}</span>
                <span class="number">#${pokemon.id.toString().padStart(3,"0")}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) =>`<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    </div>
                        <img id="img-pokemon" src="${photo}"alt="${pokemon.name}">
                        <div id="data">
                            <h4>Base Stats</h4>
                            <div id="hability">
                                <div class="stat-desc">
                                    ${pokemon.stats.map((name_stats) =>`<p class="${type}">${name_stats.stat.name}</p>`).join('')}
                                </div>
                            <div class="bar-inner"> ${pokemon.stats.map((base_stats) =>`<p class="${type}">${base_stats.base_stat}</p>`).join('')}</div>
                        </div>
                        <div id="stats">
                            <div class="stat-bar">
                                <p>Height: ${(pokemon.height/10).toFixed(2)}m</p>
                                <p>Weight: ${(pokemon.weight/10)}kg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    </div>        
    `
    pokemonList.innerHTML = htmlString + pokemonList.innerHTML
}

const selectPokemon = async (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokemon = await res.json()
    moreDetails(pokemon)
    }

const closewindow = () =>{
    const window = document.getElementById('window')
    window.parentElement.removeChild(window)
}