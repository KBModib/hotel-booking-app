import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function AdminDashboard() {

  return (
    <div>
      <img src='' alt='logo' />
      <ButtonGroup aria-label="Basic example">
      <Button className='dashboard-button'><Link to="/bookinglog" className='nav-admin'>Bookings</Link></Button>
      <Button className='dashboard-button'><Link to="/userlog" className='nav-admin'>Users</Link></Button>
      <Button className='dashboard-button'><Link to="/roomslog" className='nav-admin'>Rooms</Link></Button>
    </ButtonGroup>
    </div>
  )
}
