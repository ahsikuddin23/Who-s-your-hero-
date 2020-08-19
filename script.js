// console.log('Hello World')
// const url = `https://pokeapi.co/api/v2/pokemon`;
const url = `https://pokeapi.co/api/v2/pokemon/`
async function choosePokemon() {

  // if (randomPokemon === 


  try {
    const response = await axios.get(url)
    console.log(response)
    const results = response.data.results
    let randomPokemon = Math.floor(Math.random() * results.length)
    console.log(randomPokemon)
    let selection = url + randomPokemon
    console.log(selection)
    if (selection === [0, 3, 6])
      alert("You got a starter!!!")
    


    

    return response.data
  } catch (error) {
    console.log(`Error: ${error}`)
  }

}

choosePokemon()

// document.getElementById("ball").addEventListener("click");


