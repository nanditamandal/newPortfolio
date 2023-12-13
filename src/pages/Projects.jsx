import { motion } from "framer-motion"

import shoping from '../assets/shoping.png';
import tailwildproject from '../assets/tailwildproject.png';
import tailwildproject2 from '../assets/tailwildproject2.png';
import card from '../assets/card.png';

function Projects() {
  return (
    
    <section className="text-white bg-slate-800 w-screen h-[100vh]" id="projects">

<div className="flex justify-center pt-5">
<h1 className="text-white lg:text-5xl md:text-4xl text-3xl  font-semibold md:mb-20 mb-8 text-center">MY LATEST <span className="text-primary">WORKS</span> </h1>

</div>

<div className="w-[80%] grid grid-cols-2 gap-5 mx-auto">

<motion.div initial= 'hidden' whileInView='visible'
    
    transition={{duration: 1 , ease:'linear'}} 
  
    variants={{
      visible: { translateY: 0, opacity: 1},
      hidden: { translateY:-200, opacity:0}
    }} className=" w-[90%] h-[100%] bg-base-100">
  
<a rel="noreferrer" target="_blank" href="https://shoping-card-kappa.vercel.app/">
 
    <img className="object-fill h-[100%] w-[100%]"src={shoping} alt="" />
 </a>
</motion.div>

<motion.div initial= 'hidden' whileInView='visible'
    
    transition={{duration: 1 , ease:'linear'}} 
  
    variants={{
      visible: { translateY: 0, opacity: 1},
      hidden: { translateY:-200, opacity:0}
    }}
    className=" w-[90%] h-[100%] pb-5 bg-base-100 ">
    <a href="https://tailwind-assignment-eight.vercel.app/">
  
  <img className="object-fill h-[100%] w-[100%]"src={tailwildproject} alt="" />
  </a>
</motion.div>
<motion.div initial= 'hidden' whileInView='visible'
    
    transition={{duration: 1 , ease:'linear'}} 
  
    variants={{
      visible: { translateY: 0, opacity: 1},
      hidden: { translateY:200, opacity:0}
    }}
    className=" w-[90%] h-[100%] bg-base-100 ">
    <a href="https://tailwind-assignment-eight.vercel.app/">
  
  <img className="object-fill h-[100%] w-[100%]"src={tailwildproject2} alt="" />
  </a>
</motion.div>
<motion.div initial= 'hidden' whileInView='visible'
    
    transition={{duration: 1 , ease:'linear'}} 
  
    variants={{
      visible: { translateY: 0, opacity: 1},
      hidden: { translateY:200, opacity:0}
    }} className=" w-[90%] h-[100%] bg-base-100 ">
  
<a rel="noreferrer" target="_blank" href="https://shoping-card-kappa.vercel.app/">
 
    <img className="object-fill h-[100%] w-[100%]"src={card} alt="" />
 </a>
</motion.div>

   

</div>




</section>
  
  )
}

export default Projects