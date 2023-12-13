
import './App.css'
import Contact from './pages/Contact';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
// import HomeParticles from './pages/HomeParticles';
import Home from './pages/Home';
import Slider from './pages/Slider';
import Animation from './pages/Animation';
import Navbar from './pages/Navbar';
import Motion from './pages/Motion';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  const form = useRef();
   

  return (
    <>
    
    {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/blogs" element={<Slider/>} />
          <Route path="/projects" element={<Projects />}/>

        </Routes>  */}
     <Home></Home>
      <Skills></Skills>
      
    <Projects></Projects>
     <Slider></Slider>
     
      <Contact></Contact>

     

    </>
  )
}

export default App
