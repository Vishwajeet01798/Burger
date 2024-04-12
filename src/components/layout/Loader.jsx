import React from 'react';
import { IoFastFoodOutline } from 'react-icons/io5';
import {motion} from "framer-motion";

const Loader = () => {

  const options ={
    initial :{
      opacity:1,
    },
    animate:{
      opacity :1,
    },
    transition:{
      ease:"linear",
      repeat:"infinity",
      repeatType:"reverse"
    }
  }
  return (
  <section className='loader'>
<IoFastFoodOutline/>
<div>
<motion.p {...options}>
  Loading...
</motion.p>
</div>
  </section>
  )
}

export default Loader