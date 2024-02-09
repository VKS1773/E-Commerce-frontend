import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import hero_imag from '../Assests/hero_image.png'
const  Hero= ()=>{
  return (
    <div className="hero">
        <div className="hero-left">
           <h2>NEW ARRIVALS ONLY</h2>
           <div>
           <div className="hero-hand-icon">
            <h2>new</h2>
            <img  src={hand_icon} alt="" />
           </div>
           <p>Collections</p>
           <p>for everyone</p>
           </div>
           <div className="hero-latest-btn">
            <div>latest Collection</div>
            <img src={arrow_icon} alt="" />
           </div>
           
        </div>
        <div className="hero-right">
         <img className="hero-right-image" src={hero_imag} alt="" />
        </div>

    </div>
  )
}

export default Hero