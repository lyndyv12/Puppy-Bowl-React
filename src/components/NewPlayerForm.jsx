import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function NewPlayerForm() {
  const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [status, setStatus] = useState('bench'); 
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();


    const handleNewPlayer = async (e) => {
        e.preventDefault(); 

        console.log("I'm trying to handle a new player")
        
        const newPlayer = { name, breed, status, imageUrl }; 
        const success = await addNewPlayer(newPlayer);
        
        if (success === true) {
          setName('');
          setBreed('');
          setStatus('bench');
          setImageUrl('');
          navigate("/")
          
        }
      };

    const addNewPlayer = async (player) => {
        try {
        console.log(player);
        const response = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-ET-WEB-AM/players`,
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(player),
            }
        );

        const result = await response.json();
        console.log(result.data);
        return result.success === true;
        } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
        }
    };



  return (
    <div>
      <form id="player-form" onSubmit={handleNewPlayer}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />

      <label htmlFor="breed">Breed:</label>
      <input
        type="text"
        id="breed"
        name="breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        required
      />
      <br />

      <label htmlFor="status">Status:</label>
      <select
        id="status"
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="bench">Bench</option>
        <option value="field">Field</option>
      </select>
      <br />

      <label htmlFor="imageUrl">Image URL:</label>
      <input
        type="url"
        id="imageUrl"
        name="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <br />

      <button className="addPlayerBtn" type="submit">
        Submit
      </button>
    </form>
  </div>
  )
}

export default NewPlayerForm