//import React from 'react'
import {useNavigate} from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();

  const irContact = () =>{
    navigate ('/contact')
  }


  return (
    <div className='nav'>

        <h2>Este es el componenete Nav</h2>

        
      <button className="btn btn-primary" onClick={irContact}>Ir a contacto</button>

      
    </div>
  )
}

export default Nav
