import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion"

function Skills() {
  return (
    <section className="text-white container mx-auto bg-slate-800 w-[100%] h-[100vh]" id="skills">

        <div className="flex justify-center">
        <h1 className="text-white lg:text-5xl md:text-4xl text-3xl  font-semibold md:mb-20 mb-8 text-center">PROFESSIONAL <span className="text-primary">SKILLSET</span> </h1>

        </div>
        <div className="w-[80%] flex justify-evenly mx-auto">
            <div className=" w-[50%] p-4">
                <motion.div initial='hidden' whileInView='visible' transition={{duration: 1 , ease:'linear'}} 
                  variants={{
                    visible: {translateX:0, opacity:1},
                    hidden: {translateX: -500, opacity:0}
                  }}
                >
                   <span>html</span>
                    <ProgressBar completed={80} borderRadius={"50px"} bgColor={"#dd4b25"} labelAlignment={"outside"} transitionDuration={"5s"} 
                    transitionTimingFunction={"linear"} animateOnRender={true} initCompletedOnAnimation={0}/>
                </motion.div>
          
            
                <motion.div initial='hidden' whileInView='visible' transition={{duration: 2 , ease:'linear'}} 
                  variants={{
                    visible: {translateX:0, opacity:1},
                    hidden: {translateX: -500, opacity:0}
                  }}
                >
                   <span>CSS</span>
                    <ProgressBar completed={70} borderRadius={"50px"} bgColor={"#254bdd"} labelAlignment={"outside"} transitionDuration={"5s"} 
                    transitionTimingFunction={"linear"} animateOnRender={true} initCompletedOnAnimation={0}/>
                </motion.div>
            
          
                <motion.div initial='hidden' whileInView='visible' transition={{duration: 3 , ease:'linear'}} 
                  variants={{
                    visible: {translateX:0},
                    hidden: {translateX: -500}
                  }}
                >
                   <span>JavaScript</span>
                    <ProgressBar completed={90} borderRadius={"50px"} bgColor={"#efd81d"} labelAlignment={"outside"} transitionDuration={"5s"} 
                    transitionTimingFunction={"linear"} animateOnRender={true} initCompletedOnAnimation={0}/>
                </motion.div>
            </div>

            <div className=" w-[50%] p-4">
                <motion.div initial='hidden' whileInView='visible' transition={{duration: 1 , ease:'linear'}} 
                  variants={{
                    visible: {translateX:0, opacity:1},
                    hidden: {translateX: 700, opacity:0}
                  }}
                >
                   <span>Tailwind CSS</span>
                    <ProgressBar completed={80} borderRadius={"50px"} bgColor={"#36b7f0"} labelAlignment={"outside"} transitionDuration={"5s"} 
                    transitionTimingFunction={"linear"} animateOnRender={true} initCompletedOnAnimation={0}/>
                </motion.div>
          
            
                <motion.div initial='hidden' whileInView='visible' transition={{duration: 2 , ease:'linear'}} 
                  variants={{
                    visible: {translateX:0, opacity:1},
                    hidden: {translateX: 700, opacity:0}
                  }}
                >
                   <span>Framer Motion</span>
                    <ProgressBar completed={70} borderRadius={"50px"} bgColor={"#b92fb5"} labelAlignment={"outside"} transitionDuration={"5s"} 
                    transitionTimingFunction={"linear"} animateOnRender={true} initCompletedOnAnimation={0}/>
                </motion.div>
            
          
                <motion.div initial='hidden' whileInView='visible' transition={{duration: 3 , ease:'linear'}} 
                  variants={{
                    visible: {translateX:0, opacity:1},
                    hidden: {translateX: 700, opacity:0}
                  }}
                >
                   <span>React Js</span>
                    <ProgressBar completed={90} borderRadius={"50px"} bgColor={"#5ed3f3"} labelAlignment={"outside"} transitionDuration={"5s"} 
                    transitionTimingFunction={"linear"} animateOnRender={true} initCompletedOnAnimation={0}/>
                </motion.div>
            </div>

        </div>

        
   

    </section>
  )
}

export default Skills