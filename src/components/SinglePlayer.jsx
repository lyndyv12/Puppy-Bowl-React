import React from 'react'
import './SinglePlayer.css'
import { useNavigate } from 'react-router-dom';

function SinglePlayer( { player }) {
    console.log(player);
    const navigate = useNavigate()
  return (
    <div className="player-card">
        <h3>Name: {player?.name} <br /> 
        Breed: {player?.breed} </h3>
        <img src={player?.imageUrl} alt={`Image of ${player?.name}`} />
        <button onClick={()=> navigate(`/details/${player?.id}`)}>See Details</button>

    </div>
  )
}

export default SinglePlayer