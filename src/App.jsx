import { useState } from 'react'
import Home from './Components/Home'

import './App.css'
import { Routes, Route} from "react-router-dom"

import Superher from './Superhero/Superher'
import Signup from './Components/Signup'
import About from './Components/about/About'


import Uniroute from './Components/Uniroute'
import Movieroute from './Components/Movieroute'
import Contact from './Components/Contact'




function App() {
  
  return (
    <>
  

<Routes>
  <Route path="/" element={<Home/>}  />

<Route path="/superhero" element={<Superher/>}  />
<Route path="/signup" element={<Signup/>}  />
<Route path="/about" element={<About/>} />
<Route path="/movie" element={<Movieroute/>} />
<Route path="/uni" element={<Uniroute/>} />
<Route path="/contact" element={<Contact/>} />


</Routes>


  
  
  
  

    </>
  )
}

export default App
