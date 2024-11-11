const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const detailButton = document.getElementById('detailButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return(`
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
            <button id="detailButton" type="button">
                Details
            </button>
        </li>
`)
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
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

function moreDetails(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
           <span class="name">${pokemon.weight} Kg</span>
            <span class="name">${pokemon.height} cm</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.abilities.map((ability) => `<li class="type ${ability}">${ability}</li>`).join('')}
                </ol>
            </div>
        </li>`
} // o bo ta na div detail e no botao de detalhe de cada pokemon
detailButton.addEventListener('click', (offset, limit) => {
    
        pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
            const details = pokemons.map(moreDetails).join('')
            pokemonList.innerHTML += details  
        })
    })