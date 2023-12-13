import { motion } from "framer-motion"

// import { useInView } from "framer-motion"
// import { useRef } from "react"
// import { useEffect } from "react";

// import { useInView } from "react-intersection-observer";

function Motion() {

  // const ref = useRef(null)
  // const isInView = useInView(ref);
  // const controls = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  // }, [controls, inView]);

  // const squareVariants = {
  //   visible: { x:0 }
  // };

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto px-4">

     <motion.div initial= 'hidden' whileInView='visible'
    
  transition={{duration: 5 , ease:'linear'}} 

  variants={{
    visible: { translateX: 0},
    hidden: { translateX:-200}
  }}
     
      
      className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</motion.div> 

<motion.div initial={{y:-1000}} animate={{y:0}} transition={{duration:5, ease:'linear'}} className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</motion.div>

{/* <motion.div initial={{x:1000}} animate={{x:0}} transition={{duration:5, ease:'linear'}} className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</motion.div> */}


    </div>
<motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
    
    </>
    
  )
}

export default Motion