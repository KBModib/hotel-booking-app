import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/images/logo.png';

export default function Header() {
  return (
    <header>
    <ul>
      <li><Link to="/"><img src={logo} alt="logo" height={100} width={100} /></Link></li>
      <li><Link to="/rooms"><h3>Rooms</h3></Link></li>
      <li><Link to="/amenities"><h3>Amenities</h3></Link></li>
      <li><Link to="/contact"><h3>Contact</h3></Link></li>
    </ul>
    <div className="button-container">
    <button><Link to="/adminlogin" className='nav-btn'>Admin</Link></button>
    <button><Link to="/guestlogin" className='nav-btn'>Bookings</Link></button>
    </div>
  </header>
  )
}
