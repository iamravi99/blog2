import { useState } from 'react'
import Home from './Components/Home'

import './App.css'
import { Routes, Route} from "react-router-dom"

import Superher from './Superhero/Superher'
import Signup from './Components/Signup'
import Login from './Components/Login'
import About from './Components/about/About'

import Uniroute from './Components/Uniroute'
import Movieroute from './Components/Movieroute'
import Contact from './Components/Contact'
import { AuthProvider } from './contexts/AuthContext'
import Multiverse from './Components/Multiverse/Multiverse'
import Explore from './Components/Multiverse/Explore'




function App() {
  
  return (
    <AuthProvider>
  
<Routes>
  <Route path="/" element={<Home/>}  />
  <Route path='/multiverse' element={<Multiverse/>} />
<Route path="/explore" element={<Explore/>}  />
<Route path="/superhero" element={<Superher/>}  />
<Route path="/signup" element={<Signup/>}  />
<Route path="/login" element={<Login/>}  />
<Route path="/about" element={<About/>} />
<Route path="/movie" element={<Movieroute/>} />
<Route path="/uni" element={<Uniroute/>} />
<Route path="/contact" element={<Contact/>} />


</Routes>


  
  
  
  

    </AuthProvider>
  )
}

export default App
