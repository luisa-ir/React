//import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Nav from './Components/Nav'
import Contact from './Components/Contact'
import Home from './Components/Home'

const App = () => {
  return (
    <>
  
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Nav' element={<Nav />}/>
      <Route path='/contact' element={<Contact />}/>
      
    </Routes>
      
    </>
  )
}

export default App
