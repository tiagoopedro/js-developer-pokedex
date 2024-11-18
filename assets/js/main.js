const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')



const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>  

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>  
        </li>
        `
         
}



function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
       /* const detailsList = pokemons.map(moreDetails).join('')*/
        pokemonList.innerHTML += newHtml          
    }); 
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

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


