import React from 'react'

export const OrderDetails = () => {
  return (
    <section className="orderDetails">
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Adress</b>
                    {"Lucnow"}
                    </p>
                </div>
                <div>
                <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {"Vishu"}
                    </p>
                     <p>
                    <b>Phone</b>
                    {798987677898}
                    </p>
                </div>
                <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {"Processing"}
                    </p>
                     <p>
                    <b>Placed At</b>
                    {"02-01-24"}
                    </p>  
                    <p>
                    <b>Delivered At</b>
                    {"02-01-24"}
                    </p>
                </div>
                <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method</b>
                    {"Online"}
                    </p>
                     <p>
                    <b>Payment Refrence</b>
                    {"asdrgereg"}
                    </p>  
                    <p>
                    <b>Paid At</b>
                    {"02-01-24"}
                    </p>
                </div>
                <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total</b>
                    ₹ {"323"}
                    </p> 
                    <p>
                    <b>Shipping Charges</b>
                    ₹ {"50"}
                    </p>
                    <p>
                    <b>Tax</b>
                    ₹ {"20"}
                    </p> 
                      <p>
                    <b>Total Amount</b>
                    ₹ {"323+50+20"}
                    </p>             
                </div>
                <article>
                    <h1>Ordered Items</h1>
                    <div>
                        <h4>Chesse Burger</h4>
                        <div>
                            <span>{12}</span> x <span>{234}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Chicken Chesse Burger</h4>
                        <div>
                            <span>{17}</span> x <span>{561}</span>
                        </div>
                    </div>
                      <div>
                        <h4>French Fries With Burger</h4>
                        <div>
                            <span>{17}</span> x <span>{561}</span>
                        </div>
                    </div>
                    <div>
                        <h4 style ={{fontWeight:800}}>Sub Total</h4>
                        <div  style ={{fontWeight:800}}>₹ {965}</div>
                    </div>
                </article>
        </main>
    </section>
  )
}

export default OrderDetails;