import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SinglePlayerDetails from '../components/SinglePlayerDetails';
import NavBar from '../components/NavBar';

function Details() {
    const id = useParams().id;
    const [playerDetail, setPlayerDetail] = useState([]);

    
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/players/${id}`)
          .then((response) => {
            console.log(response.data.data.player);
            setPlayerDetail(response.data.data.player);
          })
          .catch((err) => {
            console.error('Error fetching players:', err);
          });
      }, []);


  return (
    <div>
        <NavBar />
        <SinglePlayerDetails playerDetail= {playerDetail} />
    </div>
  )
}

export default Details