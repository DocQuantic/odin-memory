import { useState } from 'react';
import './App.css'
import CardsList from './components/CardsList'

function App({ pokemons }) {
  const [shuffledPokemons, setShuffledPokemons] = useState(pokemons)

  function shufflePokemons(array){
    setShuffledPokemons(array
      .map(obj => ({ value: obj, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(obj => obj.value));
  }

  function handleClick(e){
    const clickedPokemon = shuffledPokemons.filter(pokemon => pokemon.id == e.target.parentNode.id)[0]

    if(clickedPokemon.isClicked === false){
      const newPokemons = shuffledPokemons.map(pokemon => pokemon === clickedPokemon ? {...pokemon, isClicked: true} : pokemon)
      
      shufflePokemons(newPokemons)
    } else {
      console.log("Already clicked")
    }
  }

  return (
    <>
      <header>
        <div className="title">
          <h1>Pokemon Memory Game</h1>
          <p>Get points by clicking on an image but don't click on any more than once !</p>
        </div>
        <div className="scores">
          <p>Score: 0</p>
          <p>Best: 0</p>
        </div>
      </header>
      <main>
        <CardsList pokemons={shuffledPokemons} onClick={handleClick}/>
      </main>
    </>
  )
}

export default App
