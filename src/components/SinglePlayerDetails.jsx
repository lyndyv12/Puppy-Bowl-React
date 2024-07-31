import React from 'react'
import './SinglePlayer.css'
import { useNavigate } from 'react-router-dom';

function SinglePlayerDetails( { playerDetail }) {
    const navigate = useNavigate()

    const removePlayer = async (playerId) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_BASE_URL}/players/${playerId}`, {
            method: 'DELETE',
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const result = await response.json();
          console.log(result)
          if (result.success){
            alert("Player removed successfully");
            navigate("/")
          }
      
        } catch (err) {
          console.error(`Whoops, trouble removing player #${playerId} from the roster!`, err);
        }
      };


    
  return (
    <div className="player-card">
        <h3>ID: {playerDetail?.id} <br />
        Status: {playerDetail?.status} <br />
        Name: {playerDetail?.name} <br />
        Breed: {playerDetail?.breed} <br />
        Team: {playerDetail.team === null ? `Unassigned` : `${playerDetail.team}`} </h3>
        <img src={playerDetail?.imageUrl} alt={`Image of ${playerDetail?.name}`} /> 
        <button onClick={()=> removePlayer(playerDetail.id)}>Delete</button>
    </div>
  )
}

export default SinglePlayerDetails