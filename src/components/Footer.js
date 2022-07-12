import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer>
      <ul>
        <li><Link to="/"><h4>Forest Hotel</h4></Link></li>
        <li><Link to="/rooms"><h5>Rooms</h5></Link></li>
        <li><Link to="/guestlogin"><h5>Bookings</h5></Link></li>
        <li><Link to="/contact"><h5>Contact</h5></Link></li>
      </ul>
    </footer>
  )
}

    


