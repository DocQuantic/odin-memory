import { useState } from 'react';
import './App.css'
import CardsList from './components/CardsList'

function App({ pokemons }) {
  const [shuffledPokemons, setShuffledPokemons] = useState(pokemons)
  const [score, setScore] = useState(0)
  const [bestScore, setBetScore] = useState(0)

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
      setScore(score+1)
      shufflePokemons(newPokemons)
    } else {
      setScore(0)
      if(bestScore<score){
        setBetScore(score)
      }
      setShuffledPokemons(pokemons)
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
          <p>Score: {score}</p>
          <p>Best: {bestScore}</p>
        </div>
      </header>
      <main>
        <CardsList pokemons={shuffledPokemons} onClick={handleClick}/>
      </main>
    </>
  )
}

export default App
