import { useState } from "react"

export default function Card({pokemon}){
    //[isCLicked, setIsClicked] = useState(false)

    return(
        <>
            <div className="card">
                <img src={pokemon.sprite}></img>
                <p>{pokemon.name}</p>
            </div>
        </>
    )
}