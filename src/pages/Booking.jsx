import React from 'react';
    import './Booking.css';

    function Booking() {
      return (
        <div className="booking-container">
          <h2>Booking</h2>
          <p>Please fill out the form below to book a session.</p>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
             <input type="date" placeholder="Select Date" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Book Now</button>
          </form>
        </div>
      );
    }

    export default Booking;
