import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';

const Orders = () => {
    const arr=[1,2,3,4]
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
                        <th>Payment Method</th> 
                        <th>User</th>
                        <th>Action</th>
                    </tr>
                    <tbody>
                        {
                            arr.map(i=>(
                                <tr key ={i}>
                                <td>#abcd</td>
                                <td>Processing</td>
                                <td>25</td>
                                <td>{3455}</td>
                                <td>COD</td>
                                <td>Vishu</td>
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

export default Orders