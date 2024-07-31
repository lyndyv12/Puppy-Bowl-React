import React from 'react'
import SinglePlayer from '../SinglePlayer'
import './PuppyCardList.css'

function PuppyCardList({ players }) {
  return (
    <div className='player-list'>
        {players.map((player)=>(
            <SinglePlayer key={ player.id } player={ player } />
        ))}
    </div>
  )
}

export default PuppyCardList