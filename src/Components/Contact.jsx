//import React from 'react'
import imagenContacto from "../assets/contac.jpg"
import {useNavigate} from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className='contact'>

        <h2>Este es el componente Contacto</h2>

        <img src={imagenContacto} alt='imagenContacto' width="300"/>
        <br />
        <br />

        <button className="btn btn-dark" onClick={()=> navigate('/Nav')}>Volver a Nav</button>
        <button className="btn btn-dark" onClick={()=> navigate('/Home')}>Volver a Home</button>

    </div>
  )
}

export default Contact
