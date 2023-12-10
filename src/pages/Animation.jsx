
import './animation.css';

function Animation() {
  return (
   <>
      <div className=" text-white h-[300px] w-[300px] bg-black  flex justify-center items-center rounded-[50%] m-10 
      
                 ">
                circle
      </div>
         <button className="transition-all ease-linear duration-[5000ms] delay-1000 bg-zinc-700 text-black rounded-sm m-5 p-5 
         hover:bg-orange-900 hover:scale-150 hover:translate-x-96">Hover me</button>

           <button className="transition-all ease-linear duration-[5000ms] delay-1000 bg-zinc-700 text-black rounded-sm m-5 p-5 
         animate-move-circle">Hover me</button>
   
   </>

        
 
  
  )
}

export default Animation        