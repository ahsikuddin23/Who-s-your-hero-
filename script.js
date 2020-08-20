// // // // // console.log('Hello World')
// // // // // const url = `https://pokeapi.co/api/v2/pokemon`;
// // const url = `https://pokeapi.co/api/v2/pokemon/`
// // const pokemonNameDiv = document.querySelector('#pokemon-selected-name')
// // const pokemonHeightDiv = document.querySelector('#height')
// // const pokemonWeightDiv = document.querySelector('#weight')
// // const pokeStats = document.querySelector('#attack')
// // const pokeDefense = document.querySelector("#defense")
// // const clickPokemon = document.querySelector('#list') 
// // button = document.getElementById("btn");


// // let pokeDex

// // async function choosePokemon() {

// //   try {
// //     const response = await axios.get(url)
// //     console.log(response)
// //     const results = response.data.results
// //   console.log(results)

// //     renderPokemon(results)
// //   } catch (error) {
// //     console.log(`Error: ${error}`)
// //   }
// // }


// // async function renderPokemon(pokeData) {
// //   //  console.log(pokeData)
// //   let results2
// //   let pokemon = []
// //   for (let i = 0; i < 3; i++) {

// //     let randomPokemon = Math.floor(Math.random() * 100)

// //     console.log(randomPokemon)
// //     let selection = url + randomPokemon
// //     console.log(selection)
// //     let results = await axios.get(selection)
// //     results2 = results
// //     console.log(results.data)
// //     let options = document.createElement("option")
// //     options.innerHTML = results.data.name
// //     clickPokemon.append(options)

// //   }

// //   pokemonHeightDiv.append(results2.data.height)
// //   let ph = document.getElementById("height")
// //   let phText = document.createTextNode(' inches ')
// //   ph.appendChild(phText)


// //   pokemonWeightDiv.append(results2.data.weight)
// //   let pw = document.getElementById('weight')
// //   let text = document.createTextNode(" lbs ")
// //   pw.appendChild(text);

// //   for (let i = 1; i < 2; i++) {

// //     pokeStats.append(results2.data.stats[i].base_stat)
// //     console.log(results2.data.stats[i].base_stat)
// //   }
// //   // for (let i = 2; i < 3; i++) {
// //   //   pokeDefense.append(results2.data.stats[i].base_stat)
// //   //   console.log(results2.data.stats[i].base_stat)
// //   }



// // choosePokemon();

// // clickPokemon.addEventListener("change", () => {
// //   const index = clickPokemon.value;
// //   renderPokemon();
// // });
// // // 

// // STOP //


// const url = `https://pokeapi.co/api/v2/pokemon/`;
// const sprite = document.getElementById("sprite");
// const pokemonNameDiv = document.querySelector("#pokemon-selected-name");
// const pokeType = document.querySelector("#type")
// const pokemonHeightDiv = document.querySelector("#height");
// const pokemonWeightDiv = document.querySelector("#weight");
// const pokeStats = document.querySelector("#stats");
// // const clickPokemon = document.getElementById("list");
// const nameDiv = document.getElementById("name"),
// button = document.getElementById("btn");

// let scopePokemon;



// const displayPokemon = (index) => {
//   const selectedPokemon = scopePokemon[index];
//   sprite.src = selectedPokemon.sprites.other["official-artwork"].front_default
//   console.log(selectedPokemon)
//   pokemonNameDiv.innerText = selectedPokemon.name;
//   pokemonHeightDiv.innerText = `height: ${selectedPokemon.height} inches`;
//   pokemonWeightDiv.innerText = `weight: ${selectedPokemon.weight} lbs`;
//   // for (let stat of selectedPokemon.stats) {
//   //   let stats = document.createElement("li");

//   //   stats.innerText = stat.stat.name + ": " + stat.base_stat;
//   //   pokeStats.appendChild(stats);
//   // }
//   for (let type of selectedPokemon.types) {
//     let typeOf = document.createElement("li");
//     typeOf.innerText = type.type.name;

//     pokeType.appendChild(typeOf);
//   }
    

//     console.log(stats)
//   }




//   // };

//   const getPokemon = async () => {
//     ;
//     let pokemon = [];
//     // Generate pokemon
//     for (let i = 0; i < 10; i++) {
//       const randomPokemon = Math.floor(Math.random() * 100);
//       try {
//         const results = await axios.get(url + randomPokemon);
//         info = results.data;
//         pokemon.push(info);
//       } catch (error) {
//         console.log(`Error: ${error}`);
//       }
//     }
//     // btn.append(info.name)
//     // Update scope
//     scopePokemon = pokemon;
    
//     displayPokemon(0);
//   };

//   getPokemon();

// btn.addEventListener("change", () => {
//     const index = btn.value;
//     displayPokemon(index);
//   });

//   btn.addEventListener("click", () => {
//     getPokemon();
//   });

