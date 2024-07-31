import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios"
import PuppyCardList from '../components/PuppyCardList/PuppyCardList';
import NavBar from '../components/NavBar';
import Timer from '../components/timer';

function Home() {
    const [players, setPlayers] = useState([]);
    const [playersToShow, setPlayersToShow] = useState([]);
    
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/players`)
          .then((response) => {
            console.log(response.data.data.players);
            setPlayers(response.data.data.players);
            setPlayersToShow(response.data.data.players)
          })
          .catch((err) => {
            console.error('Error fetching players:', err)})
      }, []);

    const playerSearch = (e) => {
      console.log(e.target.value);
      const searchResults = players.filter((player) =>
        player.name.toLowerCase().includes(e.target.value.toLowerCase())|| player.breed.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setPlayersToShow(searchResults);
      console.log(searchResults);
      console.log(players);
    };


  return (
    <div>
        <NavBar />
        <Timer />      
        <label>
        Search for a player by name or breed:
        <input type="text" onChange={playerSearch} />
        </label>
        <PuppyCardList players={playersToShow} />

    </div>
  )
}

export default Home