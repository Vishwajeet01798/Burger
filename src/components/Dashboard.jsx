import React from 'react';
import { Link } from 'react-router-dom';
import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS,Tooltip,ArcElement,Legend} from "chart.js";
import Loader from './layout/Loader';

ChartJS.register(Tooltip,ArcElement,Legend)
const loading = false;
const Dashboard = () => {
    const data = {
        labels: ["Prepared,Shipped,Delivered"],
        datasets:[
        {
        label: "# of orders",
        data: [2,3,4],
        backgroundColor:[
        "rgba(159,63 176)",
        "rgba(78,63,176)",
        "rgb(156,0,60)" ,
    ],
        borderColor: ["rgba(159,63, 176,0.1)","rgba(78,63,176,0.1)","rgb(156,0,60,0.1)"],
        borderWidth: 1,
},
      ]
    }
    const Box = ({title,value}) =>(
        <div>
            <h3>
                {title === "Income" && "₹"}
                {value}
                </h3>
            <p>{title}</p>
        </div>
    ) 
  return (
  <section className='dashboard'>
   {
    loading === false ?
    <main>
    <article>
          <Box title= "Users"  value={56}/>
          <Box title= "Orders" value={165}/>  
          <Box title= "Income" value={8081}/>

    </article>
    <section>

        <div>
            <Link to="/admin/orders">View Orders</Link>
             <Link to="/admin/users">View Users</Link>
        </div>
        <aside>
             <Doughnut data={data}/>
        </aside>
    </section>
</main> : <Loader/>
   }
  </section>
  )
}

export default Dashboard;