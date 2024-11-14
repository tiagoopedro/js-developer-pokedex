const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const detailButton = document.getElementById('detailButton')


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

function moreDetails(pokemon) {
    return  `
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
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div> 
        </li>`
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
        
        detailButton.addEventListener('click', () => {          
            const details = pokemons.map(moreDetails).join('')
            pokemonList.innerHTML = ''
            pokemonList.innerHTML += details                   
        //criar um novo botao para esconder os detalhes
    })
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

 // falta fazer com que os dois botoes trabalhem em conjunto

 