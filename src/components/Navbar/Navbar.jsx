import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo"><span>Sasher Gurung</span></div>
        <ul className='nav-menu'>
            <li className='nav-link'>Home</li>
            <li className='nav-link'>About Me</li>
            <li className='nav-link'>Portfolio</li>
            <li className='nav-link'>Contact</li>
        </ul>
        <div className="nav-contact">Contact</div>
    </div>
  )
}

export default Navbar
