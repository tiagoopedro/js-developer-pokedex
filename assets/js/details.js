const moreDetails = (pokemon) =>{
    const types = pokemon.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    const photo = pokemon.sprites.other.dream_world.front_default
    const details = `
     
    <div id="popup" class="animate__animated animate__fadeIn">
        <div id="detailPokemon">
            <button id="closeBtn" onClick="close()">Close</button>

        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span> 
            <span class="profile">${pokemon.weight/10} Kg</span>
            <span class="profile">${pokemon.height}0 cm</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.abilities.map((ability) => `<li class="hab ${ability}">${ability}</li>`).join('')}
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${photo}"
                     alt="${pokemon.name}">
            </div> </div></div>
        </li>`
        pokemonList.innerHTML = details + pokemonList.innerHTML
}

const detailButton = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokemon = await res.json()
    moreDetails(pokemon)
}

const close = () =>{
    const window = document.getElementById('window')
    window.parentElement.removeChild(window)
}
