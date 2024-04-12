import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';

const Users = () => {
    const arr=[1,2,3,4]
  return (
  <section className='tableClass'>
     <main>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Role</th>
                        <th>Since</th>
                    </tr>
                    <tbody>
                        {
                            arr.map(i=>(
                                <tr key ={i}>
                                <td>#abcd</td>
                                <td>Vishu</td>
                                <td>25</td>
                                <td>Admin</td>
                                <td>{"12-4-24"}</td>
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

export default Users