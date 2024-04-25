import React from 'react'
import './style.css'
import Card from './Card'
import greekSalad from "../../assets/greekSalad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemonDessert.jpg";

const Specials = () => {
  return (
    <div className='special container'>
      <div className="top">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        <Card 
           imageUrl={greekSalad}
           title="Greek Salad"
           price={12.99}
           description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
       />
        <Card 
           imageUrl={bruchetta}
           title="Bruchetta"
           price={7.99}
           description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
       />
        <Card 
           imageUrl={lemonDessert}
           title="Lemon Dessert"
           price={6.99}
           description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
       />
      </div>
    </div>
  )
}

export default Specials