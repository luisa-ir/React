//import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const volver = () =>{
    navigate (-1)
  }

  return (

    <div className='home'>

        <h1>Bienvenido a Home</h1>
        <button className="btn btn-dark" onClick={volver}>volver a nav</button>
        
    </div>
  )
}

export default Home
