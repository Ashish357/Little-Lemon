import React from 'react'
import TestimonialCard from './TestimonialCard'
import './style.css'

const CustomersSay = () => {
  return (
    <div className="testimonials-overlay">
    <section className='testimonials container'>
      <div className="testimonials-heading">
          <h1>Testimonials</h1>
      </div>
      <div className='testimonials-cards'>
        <TestimonialCard 
        imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
        name="Luke" 
        review="Phenomenal!" />
        <TestimonialCard 
        imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        name="Lydia" 
        review="Finger Licking Good!" />
        <TestimonialCard 
        imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        name="Lola" 
        review="Superb!" />
        <TestimonialCard 
        imageUrl="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        name="Lenny" 
        review="Awesome!" />
      </div>
    </section>
    </div>
  )
}

export default CustomersSay