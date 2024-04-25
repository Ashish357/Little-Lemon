import React from 'react'
import './style.css'

const Card = ({imageUrl,title,price,description}) => {
  return (
    <div className='card'>
        <img src={imageUrl} alt="foodImage" />
        <div className='detail'>
            <div className='detail-heading'>
                <h6>{title}</h6>
                <p>{price}</p>
            </div>
            <div className='detail-desc'>
                <p>{description}</p>
            </div>
            <div className='detail-delivery'><p>Order Delivery</p></div>
        </div>
    </div>
  )
}

export default Card