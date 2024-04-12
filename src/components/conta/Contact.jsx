import React from 'react'
import {motion} from "framer-motion";
import b3 from "../../assests/b3.jpg"

const contact = () => {
  return (
   <section className="contact">
    
    <motion.form
    initial ={{
      x:"-100vw",
      opacity:"0",
    }}
    animate={{
      x:0,
      opacity:1,
    }}
    transition={{delay:0.2}}
    >
        <h2>Contact Us</h2>
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Email'/>
        <textarea placeholder="Message..." cols="30" rows="10">
        </textarea>
        <button type="submit">Send</button>
    </motion.form>

    <motion.div
    initial={{
      x:"100vw",
      opacity:0,
    }}
    animate={{
      x:0,
      opacity :1,
    }}
    className='formBorder'>

    <motion.div
    initial ={{
      y:"-50vh",
      x:"50%",
      opacity:0,
    }}
    animate={{
      y:"-40%",
      x:"50%",
      opacity:1,
    }}
    transition={{
      delay:1,
    }}
    >
      
    <img src={b3} alt="Burger"/>

    </motion.div>
    </motion.div>


   </section>
  )
}

export default contact