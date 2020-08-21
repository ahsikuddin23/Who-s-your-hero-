const url = `https://pokeapi.co/api/v2/pokemon/`;
const sprite = document.getElementById("sprite");
const pokemonNameDiv = document.querySelector("#pokemon-selected-name");
const pokeTypeDiv = document.querySelector("#type")
const pokemonHeightDiv = document.querySelector("#height");
const pokemonWeightDiv = document.querySelector("#weight");
const pokeStats = document.querySelector("#stats");
button = document.getElementById("btn");


document.getElementById("pokemon-selected-name").style.textTransform = "capitalize";
document.getElementById("type").style.textTransform = "capitalize";
document.getElementById("stats").style.textTransform = "capitalize";
let scopePokemon;



const displayPokemon = (index) => {
  const selectedPokemon = scopePokemon[index];
  
  // Get Pokemon pics/add text
  sprite.src = selectedPokemon.sprites.other["official-artwork"].front_default
  console.log(selectedPokemon)
  pokemonNameDiv.innerText = `Name: ${selectedPokemon.name}`;
  pokemonHeightDiv.innerText = `Height: ${selectedPokemon.height} inches`;
  pokemonWeightDiv.innerText = `Weight: ${selectedPokemon.weight} lbs`;
  
 // For of loop: 
  for (let stat of selectedPokemon.stats) {
    let stats = document.createElement("ul");
    

    stats.innerText = ` ${stat.stat.name}: ${stat.base_stat} ` ;
    pokeStats.appendChild(stats);
    let statsUppercase = stats.toUpperCase;
  }
  for (let type of selectedPokemon.types) {
    let typeList = document.createElement("ul")
    typeList.innerText = `Type(s): ${type.type.name}`;
    
    

    pokeTypeDiv.appendChild(typeList);
  }
    

    
  }




  
//Async Function
  const getPokemon = async () => {
    ;
    let pokemon = [];
    // Generate pokemon. The 
    for (let i = 0; i < 1; i++) {
      const randomPokemon = Math.floor(Math.random() * 500)
      try {
        const results = await axios.get(url + randomPokemon);
        info = results.data;
        pokemon.push(info);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
  
    scopePokemon = pokemon;
    // Index in which the pokemons data is stored in the scope pokemon array. Paramater must be less than or equal to the for loop above.
    displayPokemon(0);
  };

  getPokemon();
 
btn.addEventListener("click", () => {
    const index = btn.value;
    displayPokemon(index);
  });



