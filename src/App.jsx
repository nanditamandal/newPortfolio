
import './App.css'
import Contact from './pages/Contact';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
// import HomeParticles from './pages/HomeParticles';
import Home from './pages/Home';
import Slider from './pages/Slider';
import Animation from './pages/animation';
import Navbar from './pages/Navbar';
import Motion from './pages/Motion';
import Skills from './pages/Skills';

function App() {
  
  const form = useRef();

  return (
    <>
    {/* <HomeParticles></HomeParticles> */}
     {/* <Navbar></Navbar> */}
     <Home></Home>
     <Skills></Skills>
     <Contact></Contact>
     <Slider></Slider>
     <Animation></Animation>
      <Motion />

     

    </>
  )
}

export default App
