import React from 'react'
import './style.css'

const BookingForm = () => {
  return (
    <div className='booking-page-overlay'>
    <div className='booking-form container'>
        <h1>Reserve a Table</h1>
        <form>
            <label>
                First Name: 
                <input type="text" required/>
            </label>
            <label>
                Last Name:  
                <input type="text" required/>
            </label>
            <label>
                Email:  
                <input type="email" required/>
            </label>
            <label>
                Reservation Date:   
                <input type="date" required/>
            </label>
            <label>
                Choose Time:    
                <select name="choose-time" id="">
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
            </select>
            </label>
            <label>
                Number of Guests:   
                <input type="number" value={2}/>
            </label>
            <label>
                Occasion:   
                <select name="occasion" id="">
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Other">Other</option>
                </select>
            </label>
        </form>
        <p>
            <input type="checkbox" name="term-condition" id="" />
            I agree to terms & conditions.<span>*</span>
        </p>
        <button>Book Table</button>
    </div>
    </div>
  )
}

export default BookingForm