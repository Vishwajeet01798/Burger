import React from 'react'
import menu from '../../styles/menu.scss'
import { MenuCard } from './MenuCard'
import burger from '../../assests/burger.avif'
import f from '../../assests/f.jpg'

const Menu = () => {
const addToCartHandler =(itemNum)=>{
}
    
  return <section id="menu">
        <h1>MENU</h1>
        <div>
            <MenuCard 
            itemNum={1}
             burgerSrc={burger} 
             price={500}
            title="cheese burger"
          handler={addToCartHandler}
          delay={0.1}
          />
          <MenuCard itemNum={3}
             burgerSrc={f}
             price={300}
            title="Veg burger with fries"
          handler={addToCartHandler}
          delay={.5}
          />
           <MenuCard itemNum={3}
             burgerSrc={f}
             price={300}
            title="Veg burger with fries"
          handler={addToCartHandler}
          delay={0.8
        }
          />
          </div>
    </section>
}

export default Menu