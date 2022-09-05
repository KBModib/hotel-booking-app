import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import ima from '../src/assets/images/stargazing.jpg';

export default function Rooms() {
  return (
    <div>
      <Header/>
      <h1>Rooms</h1>
      <div className='rooms-container'>
        <div className='room-info'>
          <div className='room-slider'>
          <h3>Room details</h3>
          <p>Room description</p>
          <button>Book</button>
        </div>
        <div className='room-display'>
          <div className='room-section'>
            <h4 className='room-title'>Room name</h4>
            <img src={ima} alt='room'/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
  );
}