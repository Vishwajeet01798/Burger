import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';

const MyOrders = () => {

    const arr = [1,2,3,4]

  return (
    <section className='tableClass'>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Item Qty</th>
                        <th>Amount</th>
                        <th>Payment Methods</th>
                        <th>Action</th>
                    </tr>
                    <tbody>
                        {
                            arr.map(i=>(
                                <tr key ={i}>
                                <td>#1</td>
                                <td>processing</td>
                                <td>25</td>
                                <td>₹{399}</td>
                                <td>COD</td>
                                <td>
                                    <Link to={`/order/${"ads"}`}>
                                    <AiOutlineEye/>
                                    </Link>
                                    </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </thead>
            </table>
        </main>

    </section>
  )
}

export default MyOrders