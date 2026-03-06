export default function Card({pokemon, onClick}){

    return(
        <>
            <div className="card" id={pokemon.id} onClick={onClick}>
                <img src={pokemon.sprite}></img>
                <p>{pokemon.name}</p>
            </div>
        </>
    )
}