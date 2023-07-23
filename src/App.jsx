import React from 'react'
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Footer from './components/Footer'
import Video from "./components/Video"
import Login from './components/Login'
import Signup from './components/Signup'
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
