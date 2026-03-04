import Card from "./Card"

export default function CardsList({ pokemons }){
    console.log(pokemons)
    return(
        <>
            {pokemons.map(pokemon => {
                return(
                    <Card pokemon={pokemon} />
                )
            })}
        </>
    )
}