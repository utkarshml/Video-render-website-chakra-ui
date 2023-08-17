import React from 'react'
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Header from "./Components/Layout/Header"
import Home from "./Components//Pages/Home"
import About from "./Components/Pages/About"
import Footer from './Components/Layout/Footer'
import Video from "./Components/Pages/Video"
import Login from './Components/Pages/Login'
import Signup from './Components/Pages/Signup'
function App() {
  return (
   <Router>
    <Header/>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/video" element={<Video/>} />
          <Route path='/login' element={<Login />}/>
          <Route path='/Signup' element={<Signup />}/>
          </Routes>
          <Footer />
   </Router>
  )
}

export default App
