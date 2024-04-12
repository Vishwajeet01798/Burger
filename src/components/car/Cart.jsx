import React from 'react';
import { Link } from 'react-router-dom';
import b3 from "./../../assests/b3.jpg";


const CartItem = ({value,title,img,increment,decrement})=>(
<>
    <div className="cartItem">
        <div>
            <h4>{title}</h4>
            <img src={img}/>
        </div>
    </div>

   <button onClick={decrement} >-</button>
   <input type="number" value={value} readOnly />
   <button onClick={increment}>+</button>
   </>
)

const Cart =()=> {

    const increment =(item) =>{};
    const decrement =(item) =>{};

    return (
        <section className='cart'>
            <main>

                <CartItem 
                title={"Cheese burger"} img={b3} value={0} 
                increment={()=> increment(1)}
                decrement={()=> decrement(1)}
                />
                <CartItem 
                title={"Chicken burger"}
                 img={b3} 
                 value={0} 
                increment={()=>increment(2)}
                decrement={()=> decrement(2)}
                />
                <CartItem 
                title={" Veg burger"} img={b3} value={0} 
                increment={()=>increment(3)}
                decrement={()=> decrement(3)}
                />
                <article>
                    <div>
                        <h4>Sub Total</h4>
                         <p>₹{300}</p>
                    </div>
                    <div>
                    <h4>Tax</h4>
                    <p>₹{300 * 0.1}</p></div> 
                     <div>
                    <h4>Shipping Charges</h4>
                    <p>₹{50}</p></div> 
                     <div>
                    <h4>Total</h4>
                    <p>₹{300 + 50 +50}</p>
                    </div>
                    <Link to ="/shipping">Checkout</Link>
                </article>
            </main>
        </section>
    )
}
export default Cart