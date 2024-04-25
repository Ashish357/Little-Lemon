import React from 'react'
import restaurant_food from '../../assets/restaurantfood.jpg'
import { Link } from 'react-router-dom'
import './style.css'

const CallToAction = () => {
  return (
      <div className='overlay'>
    <main className='container'>
        <div className="content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-txt">
          We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button><Link to="/booking">Reserve a Table</Link></button>
        </div>
        <div className="image">
            <img src={restaurant_food} alt="food-image"/>
        </div>
    </main>
    </div>
  )
}

export default CallToAction