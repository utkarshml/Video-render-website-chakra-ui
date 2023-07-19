import React from 'react'
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Footer from './components/Footer'
import Video from "./components/Video"
function App() {
  return (
   <Router>
    <Header/>
    <Routes>
          <Route path="/" element={<Home/>} />
            </Routes>
        <Routes>
          <Route path="/home" element={<Home/>} />
            </Routes>
            <Routes>
          <Route path="/about" element={<About/>} />
            </Routes>
            <Routes>
          <Route path="/video" element={<Video/>} />
            </Routes>
          <Footer />
   </Router>
  )
}

export default App
