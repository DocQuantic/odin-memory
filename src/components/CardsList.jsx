import Card from "./Card"

export default function CardsList({ pokemons, onClick }){
    return(
        <>
            {pokemons.map(pokemon => {
                return(
                    <Card pokemon={pokemon} key={pokemon.id} onClick={onClick} />
                )
            })}
        </>
    )
}