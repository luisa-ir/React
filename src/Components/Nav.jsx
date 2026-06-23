//import React from 'react'
import {useNavigate} from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();

  const irHome = () =>{
    navigate ('/home')
  }

  const irContact = () =>{
    navigate ('/contact')
  }


  return (
    <div className='nav'>

        <h2>Este es el componenete Nav</h2>

        <button className="btn btn-dark" onClick={irHome}>Ir a Home</button> 
        <button className="btn btn-dark" onClick={irContact}>Ir a Contacto</button> 

        
      

      
    </div>
  )
}

export default Nav
