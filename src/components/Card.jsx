import { useState } from "react"

export default function Card({pokemon, onClick}){

    return(
        <>
            <div className="card" id={pokemon.id} onClick={onClick}>
                <img src={pokemon.sprite}></img>
                <p>{pokemon.name}</p>
                <p>{pokemon.isClicked ? "clicked" : "unclicked"}</p>
            </div>
        </>
    )
}