import React from 'react'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SingUp from './Components/SingUp'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import MyAcount from './Components/MyAcount'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/myacount' element={<MyAcount/>}/>

        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App