import React,{useContext, useRef, useState} from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import {Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assests/dropdown_icon.png'

function Navbar() {
  const[menu, setMenu]=useState("shop");
  const{getTotalCartItems}=useContext(ShopContext);
  const menuRef=useRef();
  const dropdown_toggle=(e)=>{
     menuRef.current.classList.toggle('nav-menu-visible')
     e.target.classList.toggle('open');
  }
  return (
    <div className="navbar">
     <div className="nav-logo">
      <img src={logo} alt="" />
      <p>SHOPPER</p>
     </div>
     <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
     <ul ref={menuRef} className="nav-menu">
      <li onClick={()=>setMenu("shop")}><Link  style={{textDecoration:'none'}} to='/' >Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
      <li onClick={()=>setMenu("womens")}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
      <li onClick={()=>setMenu("mens")}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
      <li onClick={()=>setMenu("Kids")}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
     </ul>
     <div className="nav-login-cart">
      <button><Link style={{textDecoration:'none'}}to="/login">Login</Link></button>
      <Link  to='/cart'><img src={cart_icon} alt="" /></Link>
      <div className="nav-cart-count">{getTotalCartItems()}</div>
  
      
     </div>
      </div>
  )
}

export default Navbar