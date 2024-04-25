import React from 'react'
import restaurant from "../../assets/restaurant.jpg";
import './style.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='container'>
      <div className="footer-top">
        <div className="footer-left">
          <img src={restaurant} alt="Restaurant-image" />
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <Link to='#'>Home</Link>
            <Link to='#'>About</Link>
            <Link to='#'>Menu</Link>
            <Link to='#'>Reservation</Link>
            <Link to='#'>Order Online</Link>
            <Link to='#'>Login</Link>
          </div>
          <div className='footer-links'>
            <h3>Contact</h3>
            <Link to='#'>Address</Link>
            <Link to='#'>Phone</Link>
            <Link to='#'>Email</Link>
          </div>
          <div className='footer-links'>
            <h3>Social Media</h3>
            <Link to='#'>Instagram</Link>
            <Link to='#'>Facebook</Link>
            <Link to='#'>Twitter</Link>
        </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Developed by Ashish Saha.</span>
        <p>© 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer