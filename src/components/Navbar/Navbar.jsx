import React,{useState} from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import {Link} from 'react-router-dom'
function Navbar() {
  const[menu, setMenu]=useState("shop");
  return (
    <div className="navbar">
     <div className="nav-logo">
      <img src={logo} alt="" />
      <p>SHOPPER</p>
     </div>
     <ul className="nav-menu">
      <li onClick={()=>setMenu("shop")}><Link  style={{textDecoration:'none'}} to='/' >Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
      <li onClick={()=>setMenu("womens")}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
      <li onClick={()=>setMenu("mens")}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
      <li onClick={()=>setMenu("Kids")}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
     </ul>
     <div className="nav-login-cart">
      <button><Link to="/login">Login</Link></button>
      <Link tyle={{textDecoration:'none'}} to='/cart'><img src={cart_icon} alt="" /></Link>
      <div className="cart_icon_count">0</div>
     </div>
      </div>
  )
}

export default Navbar