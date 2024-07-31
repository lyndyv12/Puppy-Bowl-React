import './App.css'
import Home from './pages/Home'
import Details from './pages/Details'
import NewPlayer from './pages/NewPlayer'
import {Route, Routes} from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/newplayer" element={<NewPlayer />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
