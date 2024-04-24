/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo}></img>
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li>shop <hr></hr></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>

      <div className='nav-login-cart'>
        <button>login</button>
        <img src={cart_icon}></img>
        <div className='nav-cart-count'>0</div>

      </div>


    </div>
  )
}
