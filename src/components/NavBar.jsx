import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div>

    <nav className="navbar" id="navbar">
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/newplayer">Add New Player</Link></li>
          <li><Link to="/">Something Else</Link></li>
          <li><Link to="/">Something Else</Link></li>
      </ul>
    </nav>

    <header className="header">
      <h1 className="title">Puppy Bowl 2024</h1>
    </header>
    <div className="info-bar">
      <p>Your puppy bowl roster! Complete and submit your roster by July 31st.</p>
    </div>

    </div>




      
  )
}

export default NavBar