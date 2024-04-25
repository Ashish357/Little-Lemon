import React from 'react'
import './style.css'
import Mario_and_Adrian_A from "../../assets/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../../assets/Mario_and_Adrian_B.jpg";

const Chicago = () => {
  return (
    <div className='location-background'>
    <section id='about' className='location container'>
      <div className="location-left">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-txt">
          Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
        </p>
      </div>
      <div className="location-right">
      <img src={Mario_and_Adrian_A} alt="Mario and Adrian" />
        <img src={Mario_and_Adrian_B} alt="Mario and Adrian" />
      </div>
    </section>
    </div>
  )
}

export default Chicago