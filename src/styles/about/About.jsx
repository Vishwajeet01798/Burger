import React from 'react'
import { Link } from 'react-router-dom';
import {RiFindReplaceLine} from "react-icons/ri";
import panda from "../../assests/panda.jpg";

const About = () => {
  return (
   <section className='about'>
    <main>
        <h1>About Us</h1>
        <article>
            <h4>Crunchy Burger</h4>
            <p>Eat and Repeat</p>
            <p>Explore various types of food burger snacks</p>
            <Link to ="/">
            <RiFindReplaceLine/>
            </Link>
        </article>
        <div>
            <h2>Founder</h2>
            <article>
                <div>
                    <img src={panda} alt="Founder" />
                    <h3>Vishwajeet</h3>
                </div>
                <p>I am Vishu</p>
            </article>
        </div>
    </main>
   </section>
  )
}

export default About;