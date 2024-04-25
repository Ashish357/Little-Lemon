import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import logo from '../../assets/Logo.svg'

const Nav = () => {
  return (
    <nav className="container">
      <div className='logo'><img src={logo} alt="logo" /></div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="#about">About</Link></li>
        <li><Link to="#">Menu</Link></li>
        <li><Link to="#">Reservation</Link></li>
        <li><Link to="#">Order Online</Link></li>
        <li><Link to="#">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav