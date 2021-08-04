document.addEventListener('DOMContentLoaded', () => {

    const random = getRandomInt(1,151);
    fetchData(random);

    btnactualizar();


})

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

const fetchData = async (id) => {

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        pintarCard(data);
    } catch (error) {
        console.error(error);
    }
  }

  
const btnactualizar = ()=> {
  
  const btn = document.querySelector('.btn-actualizar');

 btn.addEventListener('click', () =>{

  location.reload();

 });

}

const pintarCard = (pokemon)=> {

  /*   console.log(pokemon);
    console.log(pokemon.name) */

    const imgPokemon = document.querySelector('.card-body-img');
    const nombre = document.querySelector('.card-body-title');
    const hp = document.querySelector('.card-body-text');
    const habilidades = document.querySelector('.card-footer');
    const pokeHeader = document.querySelector('.card-header');

    pokeHeader.setAttribute('src',pokemon.sprites.other.dream_world.front_default );

    habilidades.children[0].innerHTML = `<h3>Ataque</h3> 
    <p>${pokemon.stats[1].base_stat}</p>`;

    habilidades.children[1].innerHTML = `<h3>Defensa</h3> 
    <p>${pokemon.stats[2].base_stat}</p>`;

    habilidades.children[2].innerHTML = `<h3>Especial</h3> 
    <p>${pokemon.abilities[0].ability.name}</p>`;

    imgPokemon.setAttribute('src', pokemon.sprites.front_default);
    nombre.innerHTML = pokemon.name.toUpperCase();
    hp.innerHTML = 'HP:'+ pokemon.stats[0].base_stat;


  }




  

