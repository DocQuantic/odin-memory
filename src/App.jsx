import './App.css'
import CardsList from './components/CardsList'

function App({ pokemons }) {

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
        <CardsList pokemons={pokemons}/>
      </main>
    </>
  )
}

export default App
