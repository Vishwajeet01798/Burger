import {BrowserRouter as Router,  Route, Routes} from "react-router-dom";

import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Contact from "./components/conta/Contact";
import Cart from "./components/car/Cart";
import  Shipping from "./components/car/Shipping";
import ConfirmOrder from "./components/car/ConfirmOrder";
import PaymentSuccess from "./components/car/PaymentSuccess";
import Login from "./components/layout/login/Login";
import Footer from "./components/layout/Footer";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myorder/MyOrders";
import OrderDetails from "./components/myorder/OrderDetails";
import Dashboard from "./components/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import About from "./styles/about/About";
import NotFound from "./components/layout/NotFound";
import Loader from "./components/layout/Loader";

import "./styles/app.scss";
import "./styles/colors.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/PaymentSuccess.scss";
import "./styles/Login.scss";
import "./styles/Profile.scss";
import "./styles/table.scss";
import "./styles/orderdetails.scss"
import "./styles/dashboard.scss";
import "./styles/about.scss";
import "./styles.notFound.scss";
import "./styles.Loader.scss";


function App() {
  return (
    <Router>
      <Header isAuthenticated={true}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/> 
        <Route path="/about" element={<About/>}/>
         <Route path="/Cart" element={<Cart/>}/> 
         <Route path="/Shipping" element={<Shipping/>}/> 
       <Route path="/ConfirmOrder" element ={<ConfirmOrder/>}/> 
       <Route path="/PaymentSuccess" element ={<PaymentSuccess/>}/>  
       <Route path="/Login" element ={<Login/>}/> 
       <Route path="/me" element ={<Profile/>}/>  
        <Route path="/myorders" element ={<MyOrders/>}/>
        <Route path="/order/:id" element ={<OrderDetails/>}/>
        <Route path="/admin/dashboard" element ={<Dashboard/>}/>
         <Route path="/admin/users" element ={<Users/>}/>
          <Route path="/admin/orders" element ={<Orders/>}/>
          <Route path ="*" element={<NotFound />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
