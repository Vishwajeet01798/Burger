import React from 'react';
import { motion } from 'framer-motion';


export const Founder = () => {
    const options ={
        initial:{
            x:"-100%",
            opacity:0,
        },
        whileInView:{
            x:0,
            opacity:1,
        }
    }
  return (
    <section className='founder'>
        <motion.div {...options}>
            <img src="https://img.freepik.com/free-photo/cheese-burger-american-cheese-burger-with-golden-french-fries-coleslaw_1142-57622.jpg?t=st=1705136367~exp=1705139967~hmac=a5add11de716ead313c9de2d5b2842533a77eb54e0fc5a02ad1ac3210d176e76&w=740" alt="founder" height={200} width={200}/>
            <h3>Vishu</h3>
            <p>New Outlet Open SOON!</p><br/>
            Eat one time Repeat Every Time
        </motion.div>

        </section>
  )
}
