import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

async function fetchPokemon(id){
  try {
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    let json = await response.json();
    return json;
  } catch {
    throw new Error("Couldn't fetch API");
  }
}

let pokemons = []
for(let i=0; i<10; i++){
  const id = Math.floor(Math.random() * 1001);
  let pokemon = await fetchPokemon(id)
  pokemons.push({"name": pokemon.name, "sprite": pokemon.sprites.front_default, "id": id, "isClicked": false})
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App pokemons={pokemons}/>
  </StrictMode>,
)
