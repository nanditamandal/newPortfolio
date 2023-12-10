import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion"

function Navbar() {

    const [isClicked, setIsClicked]= useState(false);

    const handelClick=()=>{
        setIsClicked(!isClicked);
        console.log(isClicked);
    }

  return (
    <nav className="bg-slate-900 text-white p-4 relative">
        <div className=" grid grid-cols-2 md:grid-cols-3 container mx-auto px-4">
            <div className="flex items-center">Logo</div>
            <div className=" hidden md:flex gap-4 items-center justify-center">
                <a href=""><motion.span initial={{marginLeft:-1000}} animate={{marginLeft:0}} transition={{duration: 5 , ease:"linear" }}>Home</motion.span></a>
                
                <a href="">About</a>
                <a href="">
                <motion.span initial={{marginRight:-1000}} animate={{marginRight:0}} transition={{duration: 5 , ease:"linear" }}>Contact</motion.span>
                </a>
          </div>
            <div className="flex justify-end items-center ">

                <button className="hidden md:flex px-3 py-2 bg-rose-400 rounded">Login</button>
                <IoMdMenu className="text-2xl md:hidden cursor-pointer"  onClick={handelClick}/>
                
            </div>
        </div>
        <div className={`h-[300px] w-[300px] bg-red-400 ${isClicked ? "block" :"hidden"} absolute top-14 right-0 md:hidden`}>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <a href="">Home</a>
                                <a href="">About</a>
                                <a href="">Contact</a>
                        </div>
        </div>
       {/* {
            isClicked &&  <div className="h-[300px] w-[300px] bg-red-400 block absolute top-14 right-0 md:hidden">
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <a href="">Home</a>
                                <a href="">About</a>
                                <a href="">Contact</a>
                        </div>
                        </div>
        
       } */}
    </nav>
  )
}

export default Navbar