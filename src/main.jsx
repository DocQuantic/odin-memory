import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

async function fetchPokemons(){
  try {
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10`,
    );
    let json = await response.json();
    return json;
  } catch {
    throw new Error("Invalid city name");
  }
}

let pokemon = await fetchPokemons()
console.log(pokemon)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
