//import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

  return (

    <div className='home'>

        <h1>Bienvenido </h1>
        <button onClick={()=> navigate ('/Nav')}>Ir a Nav</button>
        
    </div>
  )
}

export default Home
