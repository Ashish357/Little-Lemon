import React from 'react'

const TestimonialCard = ({imageUrl,name,review}) => {
  return (
    <div className='testimonials-card'>
        <div className='ratting'>
            <h3>Ratting</h3>
            <p className="star">★★★★★</p>
        </div>
        <div className="testimonial-customer">
            <img src={imageUrl} alt="" />
            <p>{name}</p>
        </div>
        <div className="review">
            <p className='review-heading'>Review</p>
            <p>{review}</p>
        </div>
    </div>
  )
}

export default TestimonialCard