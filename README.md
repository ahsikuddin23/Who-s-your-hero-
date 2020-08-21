# Project Overview

Who's that Pokemon?



## Project Description

A web page where the user will be able to select a random Pokemon and recieve background info about the Pokemon such as its type, attack, defense,HP level, etc. When the user selects the Pokemon, the Pokemon's information and picture will be displayed. 

## API and Data Sample

The API for this project was pulled from The RESTful Pokémon API. https://pokeapi.co/

```
https://pokeapi.co/api/v2/pokemon/butterfree
{
  "id": 12,
  "name": "butterfree",
  "base_experience": 178,
  "height": 11,
  "is_default": true,
  "order": 16,
  "weight": 320,
  "abilities": [
    {
      "is_hidden": true,
      "slot": 3,
      "ability": {
        "name": "tinted-lens",
        "url": "https://pokeapi.co/api/v2/ability/110/"
      }
    }
  ],
  "forms": [
    {
      "name": "butterfree",
      "url": "https://pokeapi.co/api/v2/pokemon-form/12/"
    }
  ],
  "game_indices": [
    {
      "game_index": 12,
      "version": {
        "name": "white-2",
        "url": "https://pokeapi.co/api/v2/version/22/"
      }
    }
  ],
  "held_items": [
    {
      "item": {
        "name": "silver-powder",
        "url": "https://pokeapi.co/api/v2/item/199/"
      },
      "version_details": [
        {
          "rarity": 5,
          "version": {
            "name": "y",
            "url": "https://pokeapi.co/api/v2/version/24/"
          }
        }
      ]
    }
  ],
  "location_area_encounters": [
    {
      "location_area": {
        "name": "kanto-route-2-south-towards-viridian-city",
        "url": "https://pokeapi.co/api/v2/location-area/296/"
      },
      "version_details": [
        {
          "max_chance": 10,
          "encounter_details": [
            {
              "min_level": 7,
              "max_level": 7,
              "condition_values": [
                {
                  "name": "time-morning",
                  "url": "https://pokeapi.co/api/v2/encounter-condition-value/3/"
                }
              ],
              "chance": 5,
              "method": {
                "name": "walk",
                "url": "https://pokeapi.co/api/v2/encounter-method/1/"
              }
            }
          ],
          "version": {
            "name": "heartgold",
            "url": "https://pokeapi.co/api/v2/version/15/"
          }
        }
      ]
    }
  ],
  "moves": [
    {
      "move": {
        "name": "flash",
        "url": "https://pokeapi.co/api/v2/move/148/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          },
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          }
        }
      ]
    }
  ],
  "species": {
    "name": "butterfree",
    "url": "https://pokeapi.co/api/v2/pokemon-species/12/"
  },
  "sprites": {
    "back_female": "http://pokeapi.co/media/sprites/pokemon/back/female/12.png",
    "back_shiny_female": "http://pokeapi.co/media/sprites/pokemon/back/shiny/female/12.png",
    "back_default": "http://pokeapi.co/media/sprites/pokemon/back/12.png",
    "front_female": "http://pokeapi.co/media/sprites/pokemon/female/12.png",
    "front_shiny_female": "http://pokeapi.co/media/sprites/pokemon/shiny/female/12.png",
    "back_shiny": "http://pokeapi.co/media/sprites/pokemon/back/shiny/12.png",
    "front_default": "http://pokeapi.co/media/sprites/pokemon/12.png",
    "front_shiny": "http://pokeapi.co/media/sprites/pokemon/shiny/12.png"
  },
  "stats": [
    {
      "base_stat": 70,
      "effort": 0,
      "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    }
  ],
  "types": [
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ]
}
```
## Wireframes

Desktop(https://wireframe.cc/3qgNPo) 

Mobile (https://wireframe.cc/7mFavv)


### MVP/PostMVP

#### MVP 

• Implement dynamic HTML, CSS, and Javascript/Vanilla Javascript

• Request external data sources using Axios

• Implement media queries for mobile, tablet, and desktops

• Add event listeners

#### PostMVP  
• Add animations



## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 17| Project Approval | Complete
|August 18| Core Application Structure (HTML, CSS, etc.) | Complete
|August 19| Initial Clickable Model  | Complete
|August 20| MVP | Complete
|August 21| Presentations | Incomplete

## Priority Matrix

https://imgur.com/Uo1VzLc

## Timeframes



| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML | H | 4 hrs| 4hrs | 4hrs  |
| CSS | H | 5hrs|4hrs | 3.5hrs |
| Javascript | H | 6hrs| 6hrs | 8hrs |
| DOM| H | 6 hrs|6 hrs | 6.5 hrs |
| API| H | 6 hrs| 6 hrs|  6hrs|
| Testing | H | 6 hrs| 6hrs|7hrs  |
| Total | H | 33 hrs|32 hrs |35 hrs |
## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
for (let stat of selectedPokemon.stats) {
    let stats = document.createElement("ul");
    

    stats.innerText = ` ${stat.stat.name}: ${stat.base_stat} ` ;
    pokeStats.appendChild(stats);
    let statsUppercase = stats.toUpperCase;
  }
```
This function allows me to pull that stats of the pokemon from API. I used a for loop before but found a 'for of loop' was easier to use.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.
 

``` 
 Old code:
//   for (let i = 0; i < 3; i++) {

//     let randomPokemon = Math.floor(Math.random() * pokeData.length) 

New Code:  for (let i = 0; i < 1; i++) {
      const randomPokemon = Math.floor(Math.random() * 500)

Reasoning: I changed the interger to 500 because pokeData.length only gave me a selection of 20 Pokemon.



Old code:

//   pokemonHeightDiv.append(results2.data.height)
//   let ph = document.getElementById("height")
//   let phText = document.createTextNode(' inches ')
//   ph.appendChild(phText)

New Code: pokemonHeightDiv.innerText = `Height: ${selectedPokemon.height} inches`;




Old Code:
//   pokemonWeightDiv.append(results2.data.weight)
//   let pw = document.getElementById('weight')
//   let text = document.createTextNode(" lbs ")
//   pw.appendChild(text);


New Code:  pokemonWeightDiv.innerText = `Weight: ${selectedPokemon.weight} lbs`;

Old Code:

//   for (let i = 1; i < 2; i++) {

//     pokeStats.append(results2.data.stats[i].base_stat)
//     console.log(results2.data.stats[i].base_stat)
//   }
//   for (let i = 2; i < 3; i++) {
//     pokeDefense.append(results2.data.stats[i].base_stat)
//     console.log(results2.data.stats[i].base_stat)
//   }
New Code:
for (let stat of selectedPokemon.stats) {
    let stats = document.createElement("ul");
    

    stats.innerText = ` ${stat.stat.name}: ${stat.base_stat} ` ;
    pokeStats.appendChild(stats);
    let statsUppercase = stats.toUpperCase;


Reasoning: Clean coding
```

